
import React, { useState, useEffect } from 'react';
import { AssessmentResult, ScoreCategory } from '../types';

const LOCAL_ADMIN_PASSWORD = '167557'; 

interface AdminProps {
  data: AssessmentResult[];
  databaseUrl: string;
}

const Admin: React.FC<AdminProps> = ({ data: localData, databaseUrl }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [sheetData, setSheetData] = useState<any[]>(localData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFromSheets = async () => {
    if (!isAuthenticated || !databaseUrl || databaseUrl.includes('your-script-url')) {
      if (isAuthenticated && (!databaseUrl || databaseUrl.includes('your-script-url'))) {
         setError('กรุณาตั้งค่า DATABASE_URL ใน App.tsx ก่อนดึงข้อมูล');
      }
      return;
    }
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(databaseUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      if (Array.isArray(result)) {
        setSheetData(result);
      } else {
        setError('รูปแบบข้อมูลจาก Google Sheets ไม่ถูกต้อง (ควรเป็น Array)');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('ไม่สามารถเชื่อมต่อ Google Sheets ได้ (ตรวจสอบการ Deploy ของคุณ)');
    } finally {
      setIsLoading(false);
    }
  };

  const getBadgeColor = (style: string) => {
    switch(style) {
      case ScoreCategory.L5: return 'bg-red-100 text-red-600';
      case ScoreCategory.L4: return 'bg-orange-100 text-orange-600';
      case ScoreCategory.L3: return 'bg-yellow-100 text-yellow-700';
      case ScoreCategory.L2: return 'bg-teal-100 text-teal-600';
      case ScoreCategory.L1: return 'bg-green-100 text-green-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchFromSheets();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === LOCAL_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError(null);
    } else { 
      setError('รหัสผ่านไม่ถูกต้อง'); 
      setPassword(''); 
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 animate-fade-in">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-center border border-slate-100">
          <div className="text-4xl mb-4">🔐</div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800 font-['Kanit']">ระบบจัดการหลังบ้าน</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-5 bg-slate-50 border rounded-2xl text-center font-bold text-3xl outline-none focus:ring-4 focus:ring-blue-100 tracking-[0.5em]" 
              placeholder="••••••" 
              required 
            />
            {error && <p className="text-red-500 text-sm font-bold bg-red-50 py-2 rounded-xl">{error}</p>}
            <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 shadow-xl transition-all">เข้าสู่ระบบ</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pb-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-800 font-['Kanit']">ฐานข้อมูลนักศึกษา</h2>
          <p className="text-slate-500">ข้อมูลอัปเดตจาก Google Sheets ล่าสุด</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button 
            onClick={fetchFromSheets} 
            disabled={isLoading} 
            className="flex-1 md:flex-none bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-700 transition-all disabled:opacity-50 text-sm"
          >
            {isLoading ? '🔄 กำลังดึงข้อมูล...' : '🔃 รีเฟรชข้อมูล'}
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 p-4 rounded-2xl text-red-600 font-bold mb-6 text-center text-sm">
          {error}
        </div>
      )}

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-50">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="p-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">วัน/เวลา</th>
                <th className="p-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">ชื่อ-นามสกุล</th>
                <th className="p-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest">ระดับ/ชั้นปี (แผนก)</th>
                <th className="p-6 font-bold text-slate-400 text-[10px] uppercase tracking-widest text-center">สรุปผล</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {sheetData.length > 0 ? sheetData.map((item, index) => (
                <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 text-[10px] text-slate-400 font-mono">{item.timestamp}</td>
                  <td className="p-6 font-bold text-slate-800 text-sm">{item.submitter}</td>
                  <td className="p-6 text-xs text-slate-600 font-medium">
                    {item.year} <span className="text-slate-400 ml-1">({item.department})</span>
                  </td>
                  <td className="p-6 text-center">
                    <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black shadow-sm ${getBadgeColor(item.style)}`}>
                      {item.style}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="p-32 text-center text-slate-400 font-medium italic">
                    {isLoading ? 'กำลังโหลด...' : 'ยังไม่พบข้อมูลในระบบ หรือยังไม่ได้เชื่อมต่อฐานข้อมูล'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
