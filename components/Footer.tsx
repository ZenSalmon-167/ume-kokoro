
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 font-medium">© 2024 Gume Kokoro - ระบบตรวจสุขภาพใจนักศึกษา</p>
        <p className="text-gray-400 text-sm mt-2">โปรเจกต์เพื่อการศึกษา (ระดับ ปวช./ปวส.)</p>
        <div className="mt-4 p-4 bg-red-50 text-red-700 text-xs inline-block rounded-lg border border-red-100 max-w-md">
          คำชี้แจง: เว็บไซต์นี้เป็นเพียงการประเมินเบื้องต้น ไม่สามารถใช้ทดแทนการวินิจฉัยโดยแพทย์ผู้เชี่ยวชาญได้
        </div>
      </div>
    </footer>
  );
};

export default Footer;
