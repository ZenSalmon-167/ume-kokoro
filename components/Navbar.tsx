
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'check' | 'stats' | 'admin' | 'guide' | 'knowledge' | 'psychiatrist') => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const navOptions = [
    { value: 'home', label: '🏠 หน้าแรก' },
    { value: 'knowledge', label: '📚 แหล่งความรู้' },
    { value: 'psychiatrist', label: '👩‍⚕️ พบผู้เชี่ยวชาญ' },
    { value: 'check', label: '🧠 ตรวจสอบอารมณ์' },
    { value: 'stats', label: '📊 สถิติ' },
    { value: 'admin', label: '🔐 Admin' },
    { value: 'guide', label: '📖 คู่มือการตั้งค่า' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo Section */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group shrink-0" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-sm transition-transform group-hover:scale-105">g</div>
          <span className="text-xl font-bold text-slate-800 tracking-tight hidden sm:block">gume kokoro</span>
        </div>
        
        {/* Dropdown Navigation Menu */}
        <div className="flex-grow max-w-xs mx-4">
          <div className="relative">
            <select 
              value={activePage}
              onChange={(e) => onNavigate(e.target.value as any)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold rounded-2xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all hover:bg-slate-100"
            >
              {navOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <button 
            onClick={() => onNavigate('check')}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-black hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            เริ่มประเมิน
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
