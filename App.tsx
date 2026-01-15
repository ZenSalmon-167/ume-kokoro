
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import EmotionCheck from './pages/EmotionCheck';
import Statistics from './pages/Statistics';
import Admin from './pages/Admin';
import Guide from './pages/Guide';
import Knowledge from './pages/Knowledge';
import Psychiatrist from './pages/Psychiatrist';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AssessmentResult } from './types';

// คัดลอก URL ที่ได้จากขั้นตอน "Deploy" ใน Google Apps Script มาใส่ที่นี่ที่เดียว
const DATABASE_URL = 'https://script.google.com/macros/s/AKfycbwUrJc42NgFIdf-hSLiJ_nNKvWICfhdivf2Td8u-UkXSf10VZSixJ9xx0DpW5luYk0/exec';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'check' | 'stats' | 'admin' | 'guide' | 'knowledge' | 'psychiatrist'>('home');
  const [results, setResults] = useState<AssessmentResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('gume_kokoro_data');
    if (saved) {
      setResults(JSON.parse(saved));
    }
  }, []);

  const handleAddResult = (newResult: AssessmentResult) => {
    const updated = [...results, newResult];
    setResults(updated);
    localStorage.setItem('gume_kokoro_data', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      
      {!DATABASE_URL || DATABASE_URL.includes('your-script-url') ? (
        <div className="bg-amber-50 border-b border-amber-200 p-2 text-center text-xs font-bold text-amber-700 animate-pulse">
          ⚠️ คำเตือน: ยังไม่ได้ตั้งค่า DATABASE_URL ใน App.tsx ข้อมูลจะไม่ถูกบันทึกลง Google Sheets
        </div>
      ) : null}

      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
        {currentPage === 'home' && (
          <Home 
            onStart={() => setCurrentPage('check')} 
            onStats={() => setCurrentPage('stats')}
          />
        )}
        {currentPage === 'check' && (
          <EmotionCheck 
            onComplete={handleAddResult} 
            onBack={() => setCurrentPage('home')} 
            databaseUrl={DATABASE_URL}
          />
        )}
        {currentPage === 'stats' && <Statistics data={results} />}
        {currentPage === 'guide' && <Guide />}
        {currentPage === 'knowledge' && <Knowledge />}
        {currentPage === 'psychiatrist' && <Psychiatrist />}
        {currentPage === 'admin' && <Admin data={results} databaseUrl={DATABASE_URL} />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
