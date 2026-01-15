
import React from 'react';

interface HomeProps {
  onStart: () => void;
  onStats: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart, onStats }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-soft-gradient rounded-[3rem] mb-12 shadow-sm border border-blue-50/50 px-6">
        <div className="mb-6 inline-block px-4 py-1.5 bg-white/80 rounded-full text-blue-600 text-xs font-black uppercase tracking-widest border border-blue-100">
          Student Well-being System
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          gume <span className="text-blue-600">kokoro</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
          "เพราะสุขภาพใจ สำคัญไม่แพ้การเรียน"<br />
          ระบบประเมินสุขภาพใจเบื้องต้นสำหรับนักศึกษา
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all text-lg active:scale-95"
          >
            เริ่มตรวจสอบอารมณ์
          </button>
          <button 
            onClick={onStats}
            className="w-full sm:w-auto px-10 py-4 bg-white text-slate-600 border border-slate-200 font-bold rounded-2xl shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all text-lg active:scale-95"
          >
            ดูสถิติภาพรวม
          </button>
        </div>
      </section>

      {/* Explanation of Levels */}
      <section className="mb-16 px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-2 font-['Kanit']">ความหมายของระดับความเครียด</h2>
          <p className="text-slate-500">ยิ่งระดับสูงขึ้น บ่งบอกว่าคุณกำลังต้องการการพักผ่อนหรือความช่วยเหลือ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { lv: 'ระดับ 1', title: 'ปกติมาก', desc: 'ใจฟู ผ่อนคลาย สุขภาพจิตดีเยี่ยม', color: 'bg-green-50 border-green-100 text-green-700', emoji: '😊' },
            { lv: 'ระดับ 2', title: 'ปกติ', desc: 'มีความสุขดี รับมือความกดดันได้', color: 'bg-teal-50 border-teal-100 text-teal-700', emoji: '🙂' },
            { lv: 'ระดับ 3', title: 'เริ่มเครียด', desc: 'เริ่มมีความกังวล ควรหาเวลาพักผ่อน', color: 'bg-yellow-50 border-yellow-100 text-yellow-700', emoji: '😐' },
            { lv: 'ระดับ 4', title: 'เครียดสูง', desc: 'รู้สึกหนักใจ ควรหาคนรับฟังหรือที่ปรึกษา', color: 'bg-orange-50 border-orange-100 text-orange-700', emoji: '😟' },
            { lv: 'ระดับ 5', title: 'เครียดมาก', desc: 'ภาวะเครียดสะสม แนะนำปรึกษาผู้เชี่ยวชาญ', color: 'bg-red-50 border-red-100 text-red-700', emoji: '😫' },
          ].map((item, idx) => (
            <div key={idx} className={`p-6 rounded-3xl border ${item.color} text-center shadow-sm`}>
              <div className="text-3xl mb-2">{item.emoji}</div>
              <div className="font-black text-sm uppercase mb-1">{item.lv}</div>
              <div className="font-bold text-lg mb-2">{item.title}</div>
              <p className="text-xs leading-relaxed opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Call */}
      <section className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">ไม่สบายใจ? โทรหาเราได้นะ</h2>
            <p className="text-slate-400 font-medium">สายด่วนสุขภาพจิต ปรึกษาได้ตลอด 24 ชั่วโมง</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-6 rounded-3xl text-center">
            <p className="text-blue-400 font-black text-xs mb-1">CALL CENTER</p>
            <div className="text-5xl font-black">1323</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
