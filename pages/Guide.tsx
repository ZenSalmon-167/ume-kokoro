import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 animate-fade-in font-['Sarabun']">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-800 mb-4 font-['Kanit']">คู่มือการ Deploy Web App</h1>
        <p className="text-slate-500 text-lg italic underline">ทำไมข้อมูลถึงไม่เข้า? ตรวจสอบตามนี้!</p>
      </div>

      <div className="space-y-12">
        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-l-4 border-l-blue-600">
          <h2 className="text-2xl font-bold mb-4">1. การ Deploy (สำคัญที่สุด)</h2>
          <p className="mb-4">ทุกครั้งที่มีการแก้ไขโค้ดใน Apps Script คุณต้องทำตามนี้:</p>
          <ul className="list-decimal ml-6 space-y-2 font-bold text-blue-700">
            <li>กดปุ่ม Deploy {' > '} <b>New Deployment</b> (ห้ามใช้ Test Deployment)</li>
            <li>Execute as: <b>Me</b></li>
            <li>Who has access: <b>Anyone</b> (ห้ามเลือก Only myself หรือ วิทยาลัย)</li>
            <li>กด Deploy และคัดลอก URL ใหม่ที่ลงท้ายด้วย <b>/exec</b></li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-[2rem] shadow-sm border">
          <h2 className="text-2xl font-bold mb-4">2. ตั้งชื่อชีตให้ตรงกัน</h2>
          <p>ในไฟล์ Excel ของคุณ (Google Sheets) ต้องมี Tab ชื่อ <b>"ชีต1"</b> (ภาษาไทย) เท่านั้น หากชื่อต่างกันระบบจะหาไม่เจอ</p>
        </section>

        <section className="bg-white p-8 rounded-[2rem] shadow-sm border border-amber-200 bg-amber-50">
          <h2 className="text-2xl font-bold mb-4">3. การอนุญาตสิทธิ์ (Authorization)</h2>
          <p>ตอนกด Deploy ครั้งแรก จะมีหน้าต่างเตือนว่า Google Haven't verified this app ให้กด:</p>
          <p className="font-bold">Advanced {' > '} Go to Gume Kokoro (unsafe) {' > '} Allow</p>
        </section>
      </div>
    </div>
  );
};

export default Guide;