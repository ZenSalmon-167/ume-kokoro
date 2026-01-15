
/**
 * Gume Kokoro - Backend v2.0
 * สำหรับใช้กับ Google Sheets (ชื่อชีตต้องเป็น: ชีต1)
 */

const SHEET_NAME = 'ชีต1';

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // สร้างชีตและหัวตารางถ้ายังไม่มี
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      const headers = ['วัน/เวลา', 'ชื่อ-นามสกุล', 'ระดับ/ชั้นปี', 'แผนกวิชา', 'สรุปผล'];
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold").setBackground("#f3f3f3");
    }

    // ดึงค่าจาก parameter (ที่ส่งมาจาก URLSearchParams ใน Frontend)
    const p = e.parameter;
    
    const rowData = [
      new Date(),           // คอลัมน์ A
      p.submitter || "-",   // คอลัมน์ B
      p.year || "-",        // คอลัมน์ C
      p.department || "-",  // คอลัมน์ D
      p.style || "-"        // คอลัมน์ E
    ];
    
    sheet.appendRow(rowData);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString()).setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);

    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);

    const rows = data.slice(1);
    const result = rows.map(row => ({
      timestamp: row[0] instanceof Date ? Utilities.formatDate(row[0], "GMT+7", "dd/MM/yyyy HH:mm") : row[0].toString(),
      submitter: row[1],
      year: row[2],
      department: row[3],
      style: row[4]
    })).reverse();
    
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }
}
