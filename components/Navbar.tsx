
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'check' | 'stats' | 'admin' | 'guide' | 'knowledge' | 'psychiatrist') => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold shadow-sm transition-transform group-hover:scale-105">g</div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">gume kokoro</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <button 
            onClick={() => onNavigate('home')}
            className={`${activePage === 'home' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'} transition-colors relative py-1`}
          >
            หน้าแรก
            {activePage === 'home' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>}
          </button>
          <button 
            onClick={() => onNavigate('knowledge')}
            className={`${activePage === 'knowledge' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'} transition-colors relative py-1`}
          >
            แหล่งความรู้
            {activePage === 'knowledge' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>}
          </button>
          <button 
            onClick={() => onNavigate('psychiatrist')}
            className={`${activePage === 'psychiatrist' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'} transition-colors relative py-1`}
          >
            พบผู้เชี่ยวชาญ
            {activePage === 'psychiatrist' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>}
          </button>
          <button 
            onClick={() => onNavigate('check')}
            className={`${activePage === 'check' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'} transition-colors relative py-1`}
          >
            ตรวจสอบอารมณ์
            {activePage === 'check' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>}
          </button>
          <button 
            onClick={() => onNavigate('stats')}
            className={`${activePage === 'stats' ? 'text-blue-600' : 'text-slate-500 hover:text-blue-500'} transition-colors relative py-1`}
          >
            สถิติ
            {activePage === 'stats' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onNavigate('admin')}
            className="text-slate-400 hover:text-slate-600 text-[10px] font-bold uppercase tracking-widest hidden sm:block"
          >
            Admin
          </button>
          <button 
            onClick={() => onNavigate('check')}
            className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            เริ่มประเมิน
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
