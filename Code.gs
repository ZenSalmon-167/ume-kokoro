/**
 * Gume Kokoro - Backend v2.7 (Latest Stable)
 * ระบบจัดการฐานข้อมูลผ่าน Google Sheets สำหรับโปรเจกต์ตรวจสุขภาพใจ
 */

const SHEET_NAME = 'ชีต1'; // ** ชื่อชีตต้องตรงกับใน Google Sheets **

/**
 * ฟังก์ชันบันทึกข้อมูล (POST)
 * รองรับการส่งข้อมูลจากหน้า 'ตรวจสอบอารมณ์'
 */
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  // สร้างชีตและหัวตารางถ้ายังไม่มี
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    const headers = ['วัน/เวลา', 'ชื่อ-นามสกุล', 'ระดับ/ชั้นปี', 'แผนกวิชา', 'สรุปผล'];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f3f3f3");
  }

  try {
    const p = e.parameter;
    
    // ตรวจสอบว่ามีข้อมูลส่งมาจริงหรือไม่
    if (!p.submitter && !p.style) {
      return ContentService.createTextOutput("Error: No data received")
                           .setMimeType(ContentService.MimeType.TEXT);
    }

    const rowData = [
      new Date(),           // A: วัน/เวลา
      p.submitter || "-",   // B: ชื่อ
      p.year || "-",        // C: ชั้นปี
      p.department || "-",  // D: แผนก
      p.style || "-"        // E: ผลประเมิน
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput("Success")
                         .setMimeType(ContentService.MimeType.TEXT);
                         
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString())
                         .setMimeType(ContentService.MimeType.TEXT);
  }
}

/**
 * ฟังก์ชันดึงข้อมูล (GET)
 * ใช้สำหรับหน้า Admin เพื่อแสดงตาราง และหน้า Statistics เพื่อวาดกราฟ
 */
function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify([]))
                         .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify([]))
                           .setMimeType(ContentService.MimeType.JSON);
    }

    const rows = data.slice(1); // ตัดหัวตารางออก
    const result = rows.map(row => ({
      timestamp: row[0] instanceof Date 
        ? Utilities.formatDate(row[0], "GMT+7", "dd/MM/yyyy HH:mm") 
        : row[0].toString(),
      submitter: row[1],
      year: row[2],
      department: row[3],
      style: row[4]
    })).reverse(); // เรียงจากใหม่ไปเก่า
    
    // สำคัญ: ต้องส่งกลับเป็น JSON เพื่อให้ Frontend ฝั่ง React อ่านได้
    return ContentService.createTextOutput(JSON.stringify(result))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.toString()}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}