
import React from 'react';

const Psychiatrist: React.FC = () => {
  return (
    <div className="animate-fade-in pb-20">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 font-['Kanit']">
          พบ <span className="text-indigo-600">ผู้เชี่ยวชาญ</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
          การปรึกษาจิตแพทย์ไม่ใช่เรื่องน่าอาย แต่คือก้าวแรกสู่การมีสุขภาพใจที่ยั่งยืน
        </p>
      </section>

      {/* Preparation Section */}
      <section className="bg-indigo-50/50 rounded-[3rem] p-10 md:p-16 mb-12 border border-indigo-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-['Kanit']">เตรียมตัวอย่างไรก่อนพบแพทย์?</h2>
            <div className="space-y-4">
              {[
                { icon: "📝", text: "จดบันทึกอาการ: เช่น นอนไม่หลับนานแค่ไหน เครียดเรื่องอะไรเป็นพิเศษ" },
                { icon: "💊", text: "เตรียมข้อมูลยา: หากมีการทานยาโรคประจำตัวหรืออาหารเสริม" },
                { icon: "⏰", text: "เช็กเวลาว่าง: การคุยครั้งแรกอาจใช้เวลา 30-60 นาที" },
                { icon: "🤝", text: "เปิดใจให้กว้าง: บอกเล่าความรู้สึกตามจริง แพทย์จะเก็บข้อมูลเป็นความลับ" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-slate-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[3rem] flex items-center justify-center text-white shadow-2xl">
              <div className="text-center p-8">
                <span className="text-7xl mb-6 block">👩‍⚕️</span>
                <h3 className="text-2xl font-bold mb-2">จิตแพทย์ vs นักจิตวิทยา</h3>
                <p className="text-indigo-100 text-sm">จิตแพทย์สามารถสั่งยาได้ ส่วนนักจิตวิทยาจะเน้นการบำบัดด้วยการพูดคุย</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:border-indigo-200 transition-colors">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🏥</div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">โรงพยาบาลรัฐ</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">ค่าบริการประหยัดที่สุด (ประมาณ 50-500 บาท) สามารถใช้สิทธิบัตรทองหรือประกันสังคมได้ แต่คิวอาจจะยาว</p>
          <ul className="text-xs text-indigo-600 font-bold space-y-2">
            <li>• รพ. จุฬาลงกรณ์</li>
            <li>• รพ. ศิริราช</li>
            <li>• รพ. รามาธิบดี</li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:border-indigo-200 transition-colors">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🏢</div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">คลินิกเอกชน</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">เน้นความสะดวก รวดเร็ว และเป็นส่วนตัวสูง ค่าบริการเริ่มต้นประมาณ 1,500 - 3,000 บาทขึ้นไป</p>
          <ul className="text-xs text-indigo-600 font-bold space-y-2">
            <li>• Manarom Hospital</li>
            <li>• คลินิกสุขภาพจิตทั่วไป</li>
            <li>• รพ. กรุงเทพ / รพ. บำรุงราษฎร์</li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:border-indigo-200 transition-colors">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6">📱</div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">ช่องทางออนไลน์</h3>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">ปรึกษาผ่านวิดีโอคอลได้จากที่บ้าน เหมาะสำหรับผู้ที่ไม่สะดวกเดินทางหรือต้องการความเป็นส่วนตัว</p>
          <ul className="text-xs text-indigo-600 font-bold space-y-2">
            <li>• แอปฯ Ooca (อูคา)</li>
            <li>• แอปฯ Alljit</li>
            <li>• แอปฯ Doctor Anywhere</li>
          </ul>
        </div>
      </div>

      {/* Specific Specialized Centers */}
      <section className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-16 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-8 font-['Kanit']">สถาบันเฉพาะทาง (ในกรุงเทพฯ)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold text-xl mb-2">สถาบันจิตเวชศาสตร์สมเด็จเจ้าพระยา</h4>
              <p className="text-slate-400 text-sm mb-4">เชี่ยวชาญด้านจิตเวชโดยเฉพาะ ให้บริการครบวงจร</p>
              <div className="text-xs font-black text-indigo-400">📞 02-442-2500</div>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="font-bold text-xl mb-2">สถาบันกัลยาณ์ราชนครินทร์</h4>
              <p className="text-slate-400 text-sm mb-4">บริการด้านสุขภาพจิตและจิตเวชครอบคลุม</p>
              <div className="text-xs font-black text-indigo-400">📞 02-441-6100</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Call to Action */}
      <section className="text-center">
        <div className="inline-block p-8 bg-white rounded-full shadow-lg border border-indigo-50">
          <p className="text-slate-600 font-medium">
            หากยังไม่แน่ใจ... ลองเริ่มจากการโทรปรึกษา <b>สายด่วนสุขภาพจิต 1323</b> (ฟรี 24 ชม.)
          </p>
        </div>
      </section>
    </div>
  );
};

export default Psychiatrist;
