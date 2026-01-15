
import React from 'react';

const Knowledge: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-['Kanit']">
          คลังความรู้ <span className="text-blue-600">สุขภาพใจ</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          เข้าใจสาเหตุ สังเกตอาการ และรู้วิธีป้องกัน เพื่อดูแลใจให้แข็งแรง
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Section: Stress */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-50 relative overflow-hidden group flex flex-col">
          <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:scale-110 transition-transform">😫</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3 font-['Kanit']">
            <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
            ความเครียด (Stress)
          </h2>
          
          <div className="space-y-6 text-slate-600 font-medium leading-relaxed flex-grow">
            <div className="bg-yellow-50/50 p-6 rounded-3xl border border-yellow-100">
              <h3 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">🔍 สาเหตุ:</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>แรงกดดันจากการเรียนและการสอบ</li>
                <li>ปัญหาความสัมพันธ์กับเพื่อนหรือครอบครัว</li>
                <li>ความคาดหวังจากตัวเองและคนรอบข้าง</li>
                <li>การพักผ่อนไม่เพียงพอหรือดูแลตัวเองไม่ดี</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">🚩 อาการสังเกตได้:</h3>
              <p className="text-sm">ปวดหัวบ่อย ปวดเมื่อยคอบ่าไหล่ หงุดหงิดง่าย ไม่มีสมาธิ หรือเริ่มมีพฤติกรรมการกินที่เปลี่ยนไป</p>
            </div>

            <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">🛡️ การป้องกัน:</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>จัดสรรเวลาเรียนและเวลาพักผ่อนให้สมดุล</li>
                <li>ทำงานอดิเรกที่ชอบเพื่อผ่อนคลาย</li>
                <li>ฝึกปฏิเสธงานหรือสิ่งที่เกินกำลัง</li>
                <li>ออกกำลังกายสม่ำเสมอเพื่อลดฮอร์โมนความเครียด</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section: Depression */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-blue-50 relative overflow-hidden group flex flex-col">
          <div className="absolute top-0 right-0 p-8 text-6xl opacity-10 group-hover:scale-110 transition-transform">🥀</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3 font-['Kanit']">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            โรคซึมเศร้า (Depression)
          </h2>
          
          <div className="space-y-6 text-slate-600 font-medium leading-relaxed flex-grow">
            <div className="bg-blue-50/50 p-6 rounded-3xl border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">🔍 สาเหตุ:</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>กรรมพันธุ์และสารเคมีในสมองไม่สมดุล</li>
                <li>เผชิญเหตุการณ์กระทบจิตใจรุนแรง (การสูญเสีย, การถูกทำร้าย)</li>
                <li>ภาวะเจ็บป่วยเรื้อรังทางร่างกาย</li>
                <li>ลักษณะนิสัยมองโลกในแง่ร้ายหรือความมั่นใจต่ำ</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">🚩 อาการสังเกตได้:</h3>
              <p className="text-sm">เศร้าดิ่งต่อเนื่องเกิน 2 สัปดาห์ หมดความสนใจในสิ่งที่เคยชอบ รู้สึกไร้ค่า อ่อนเพลียตลอดเวลา หรือมีความคิดอยากทำร้ายตัวเอง</p>
            </div>

            <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100">
              <h3 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">🛡️ การป้องกัน:</h3>
              <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                <li>สร้างสายสัมพันธ์ที่ดีกับคนรอบข้าง ไม่เก็บตัวคนเดียว</li>
                <li>รู้เท่าทันอารมณ์และยอมรับความรู้สึกตัวเอง</li>
                <li>หลีกเลี่ยงเครื่องดื่มแอลกอฮอล์และสารเสพติด</li>
                <li>ปรึกษาผู้เชี่ยวชาญทันทีเมื่อเริ่มรู้สึกคุมอารมณ์ไม่ได้</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Therapy Methods */}
      <section className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-slate-100 mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center font-['Kanit']">
          🧠 วิธีการบำบัดและรักษา
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">💊</div>
            <h3 className="text-xl font-bold text-slate-800">การรักษาด้วยยา</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              ช่วยปรับสมดุลสารเคมีในสมองให้กลับมาปกติ ยาต้านเศร้าไม่ได้ทำให้เสพติดและควรทานภายใต้คำแนะนำของแพทย์อย่างต่อเนื่อง
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-2xl">🗣️</div>
            <h3 className="text-xl font-bold text-slate-800">จิตบำบัด (CBT)</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              การบำบัดทางความคิดและพฤติกรรม ช่วยให้เรียนรู้วิธีจัดการกับความคิดลบ และปรับเปลี่ยนมุมมองต่อสถานการณ์ต่างๆ
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">🧘</div>
            <h3 className="text-xl font-bold text-slate-800">การดูแลแบบองค์รวม</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              การปรับตารางชีวิต การออกกำลังกาย การนอนหลับที่ดี และการทำกิจกรรมบำบัด เช่น ศิลปะ ดนตรี หรือการฝึกสติ
            </p>
          </div>
        </div>
      </section>

      {/* Support Others */}
      <section className="bg-blue-600 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Kanit'] text-center">🤝 วิธีการให้กำลังใจและอยู่เคียงข้าง</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">✅ สิ่งที่ควรทำ</h3>
              <ul className="space-y-4 text-slate-100">
                <li className="flex gap-3">
                  <span className="text-green-300">✔</span>
                  <span><strong>รับฟังอย่างตั้งใจ:</strong> ปล่อยให้เขาได้ระบายโดยไม่ขัดจังหวะ ไม่ตัดสิน</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-300">✔</span>
                  <span><strong>แสดงความเข้าใจ:</strong> "ฉันอยู่ข้างๆ เธอนะ", "ไม่เป็นไรนะที่เธอจะรู้สึกแบบนี้"</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">❌ สิ่งที่ควรเลี่ยง</h3>
              <ul className="space-y-4 text-slate-100">
                <li className="flex gap-3">
                  <span className="text-red-300">✘</span>
                  <span><strong>คำพูดเปรียบเทียบ:</strong> "คนอื่นลำบากกว่าเราอีก", "แค่นี้เอง สู้ๆ นะ"</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-300">✘</span>
                  <span><strong>การตัดสิน:</strong> "ทำไมถึงคิดแบบนี้", "ทำไมไม่ออกไปข้างนอกบ้าง"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-['Kanit']">"คุณไม่ได้อยู่คนเดียว"</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            หากคุณรู้สึกว่าไม่ไหว การปรึกษาจิตแพทย์หรือนักจิตวิทยาไม่ใช่เรื่องน่าอาย แต่คือก้าวแรกสู่การมีหัวใจที่แข็งแรงขึ้น
          </p>
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-4 rounded-3xl">
            <span className="text-blue-400 font-black">สายด่วนสุขภาพจิต</span>
            <span className="text-3xl font-black">1323</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Knowledge;
