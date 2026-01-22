import React, { useState } from 'react';
import { AssessmentResult, Level, ScoreCategory } from '../types';

interface EmotionCheckProps {
  onComplete: (result: AssessmentResult) => void;
  onBack: () => void;
  databaseUrl: string;
}

const QUESTIONS = [
  "รู้สึกเครียดหรือกังวลบ่อยๆ ในช่วงนี้",
  "รู้สึกเศร้า หดหู่ หรือสะเทือนใจง่าย",
  "รู้สึกเบื่อหน่าย หมดแรงใจในการทำกิจกรรมต่างๆ",
  "รู้สึกไม่มีสมาธิในการเรียนหรือการใช้ชีวิตประจำวัน",
  "รู้สึกโดดเดี่ยว หรือมองว่าไม่มีใครเข้าใจเรา"
];

const OPTIONS = [
  { label: 'ไม่เลย', value: 0 },
  { label: 'น้อย', value: 1 },
  { label: 'บ่อย', value: 2 },
  { label: 'มาก', value: 3 }
];

const YEAR_OPTIONS = [
  "ปวช. 1", "ปวช. 2", "ปวช. 3", 
  "ปวส. 1", "ปวส. 2"
];

const DEPARTMENT_OPTIONS = [
  "แผนกช่างยนต์",
  "แผนกช่างกลโรงงาน",
  "แผนกช่างเชื่อมโลหะ",
  "แผนกช่างไฟฟ้า",
  "แผนกช่างอิเล็กทรอนิกส์",
  "แผนกเมคคาทรอนิกส์",
  "แผนกเทคนิคคอมพิวเตอร์",
  "แผนกการบัญชี",
  "แผนกการตลาด",
  "แผนกธุรกิจค้าปลีก",
  "แผนกโลจิสติกส์",
  "แผนกธุรกิจดิจิทัล",
  "แผนกการโรงแรม",
  "แผนกการท่องเที่ยว",
  "แผนกอาหารและโภชนาการ"
];

const DMH_CHECKIN_URL = 'https://checkin.dmh.go.th';

const EmotionCheck: React.FC<EmotionCheckProps> = ({ onComplete, onBack, databaseUrl }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    yearGrade: '',
    department: '',
  });
  const [answers, setAnswers] = useState<number[]>(new Array(QUESTIONS.length).fill(-1));
  const [finalResult, setFinalResult] = useState<AssessmentResult | null>(null);

  const handleNext = () => {
    if (!formData.name.trim() || !formData.yearGrade || !formData.department) {
      alert("กรุณากรอกชื่อและเลือกข้อมูลให้ครบถ้วนก่อนนะคะ");
      return;
    }
    setStep(2);
  };

  const calculateCategory = (score: number): ScoreCategory => {
    if (score <= 3) return ScoreCategory.L1;
    if (score <= 6) return ScoreCategory.L2;
    if (score <= 9) return ScoreCategory.L3;
    if (score <= 12) return ScoreCategory.L4;
    return ScoreCategory.L5;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (answers.includes(-1)) {
      alert("กรุณาตอบคำถามให้ครบทุกข้อก่อนนะคะ");
      return;
    }

    setIsSubmitting(true);
    const totalScore = answers.reduce((a, b) => a + b, 0);
    const category = calculateCategory(totalScore);

    const result: AssessmentResult = {
      timestamp: new Date().toISOString(),
      name: formData.name,
      grade: formData.yearGrade,
      level: formData.yearGrade.includes('ปวช') ? 'ปวช' : 'ปวส',
      department: formData.department,
      age: 18,
      score: totalScore,
      category: category
    };

    try {
      if (!databaseUrl || databaseUrl.includes('your-script-url')) {
        console.warn('Database URL not configured, skipping sheet update.');
      } else {
        const params = new URLSearchParams();
        params.append('submitter', result.name);
        params.append('year', result.grade);
        params.append('department', result.department);
        params.append('style', result.category);

        await fetch(databaseUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString()
        });
      }
      
      setFinalResult(result);
      onComplete(result);
      setStep(3);
    } catch (error) {
      console.error('Submission failed:', error);
      setFinalResult(result);
      onComplete(result);
      setStep(3);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 3 && finalResult) {
    const needsExtraCheck = [ScoreCategory.L3, ScoreCategory.L4, ScoreCategory.L5].includes(finalResult.category as ScoreCategory);

    return (
      <div className="max-w-xl mx-auto py-12 px-4 animate-fade-in">
        <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl text-center border border-blue-50">
          <div className="text-6xl mb-6">✨</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ประเมินเรียบร้อยแล้ว</h2>
          <p className="text-slate-400 mb-8 font-medium italic">สุขภาพใจของคุณอยู่ในระดับ...</p>
          
          <div className={`text-6xl font-black py-10 rounded-3xl mb-8 ${
            finalResult.category === ScoreCategory.L5 ? 'bg-red-50 text-red-600' :
            finalResult.category === ScoreCategory.L4 ? 'bg-orange-50 text-orange-600' :
            finalResult.category === ScoreCategory.L3 ? 'bg-yellow-50 text-yellow-600' :
            finalResult.category === ScoreCategory.L2 ? 'bg-teal-50 text-teal-600' :
            'bg-green-50 text-green-600'
          }`}>
            {finalResult.category}
          </div>
          
          <p className="text-slate-500 mb-10 font-medium leading-relaxed px-4">
            ขอบคุณที่ร่วมทำแบบทดสอบนะคะ คุณ {finalResult.name} <br/>
            {needsExtraCheck ? "เราแนะนำให้คุณสแกน QR Code ด้านล่างเพื่อรับคำปรึกษาเพิ่มเติม หรือประเมินอย่างละเอียดผ่านระบบของกรมสุขภาพจิตนะคะ" : "ดูแลรักษาสุขภาพใจที่ดีแบบนี้ต่อไปนะคะ"}
          </p>

          <div className="flex flex-col gap-6">
            {needsExtraCheck && (
              <div className="space-y-4 animate-bounce-slow">
                <div className="bg-slate-50 p-6 rounded-[2.5rem] border-2 border-dashed border-blue-200 inline-block mx-auto">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(DMH_CHECKIN_URL)}`} 
                    alt="QR Code สำหรับรับคำปรึกษา" 
                    className="w-48 h-48 mx-auto rounded-xl shadow-md bg-white p-2"
                  />
                  <p className="mt-3 text-blue-600 font-bold text-sm italic">สแกนเพื่อรับคำปรึกษาเบื้องต้น</p>
                </div>
                
                <a 
                  href={DMH_CHECKIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  🏥 ประเมินต่อที่กรมสุขภาพจิต (DMH Check-in)
                </a>
              </div>
            )}
            
            <button 
              onClick={onBack} 
              className="w-full py-5 bg-slate-100 text-slate-600 rounded-2xl hover:bg-slate-200 font-bold transition-all"
            >
              กลับหน้าหลัก
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 p-8 md:p-12">
        {step === 1 ? (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 font-['Kanit']">ข้อมูลเบื้องต้น</h2>
              <p className="text-slate-400 mt-1">กรุณาเลือกข้อมูลให้ถูกต้องเพื่อผลสถิติที่แม่นยำ</p>
            </div>
            
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">ชื่อ-นามสกุล</label>
                <input 
                  type="text" 
                  placeholder="พิมพ์ชื่อของคุณที่นี่..." 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold" 
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">ระดับชั้น / ชั้นปี</label>
                <select 
                  value={formData.yearGrade} 
                  onChange={(e) => setFormData({...formData, yearGrade: e.target.value})} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <option value="" disabled>--- กรุณาเลือกชั้นปี ---</option>
                  {YEAR_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 ml-2 uppercase tracking-wider">แผนกวิชา</label>
                <select 
                  value={formData.department} 
                  onChange={(e) => setFormData({...formData, department: e.target.value})} 
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none font-bold appearance-none cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <option value="" disabled>--- กรุณาเลือกแผนกวิชา ---</option>
                  {DEPARTMENT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            <button 
              type="button" 
              onClick={handleNext} 
              className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 transition-all active:scale-95 mt-6"
            >
              ทำแบบทดสอบ (5 ข้อ)
            </button>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">ช่วงนี้คุณรู้สึกอย่างไรบ้าง?</h2>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
            </div>
            
            {QUESTIONS.map((q, i) => (
              <div key={i} className="space-y-3">
                <p className="font-bold text-slate-700">{i+1}. {q}</p>
                <div className="grid grid-cols-4 gap-2">
                  {OPTIONS.map((opt) => (
                    <button 
                      key={opt.value} 
                      type="button" 
                      onClick={() => {const a = [...answers]; a[i] = opt.value; setAnswers(a);}} 
                      className={`p-3 rounded-xl border-2 font-bold text-[10px] md:text-xs transition-all ${
                        answers[i] === opt.value 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md scale-105' 
                          : 'bg-slate-50 text-slate-400 border-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-6 border-t border-slate-50">
              <button onClick={() => setStep(1)} className="flex-1 font-bold text-slate-400 hover:text-slate-600 text-sm">ย้อนกลับ</button>
              <button 
                onClick={handleSubmit} 
                disabled={isSubmitting} 
                className="flex-[2] py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-lg hover:bg-blue-700 disabled:opacity-50 transition-all text-sm"
              >
                {isSubmitting ? '🔄 กำลังส่งข้อมูล...' : 'ส่งผลประเมิน ✨'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionCheck;