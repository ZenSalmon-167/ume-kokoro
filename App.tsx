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

// ใช้ fallback URL หากไม่ได้ตั้งค่าใน Environment
const DEFAULT_URL = 'https://script.google.com/macros/s/AKfycbwUrJc42NgFIdf-hSLiJ_nNKvWICfhdivf2Td8u-UkXSf10VZSixJ9xx0DpW5luYk0/exec';

// พยายามดึงค่าจาก process.env.DATABASE_URL (ซึ่ง Vite จะทำการแทนที่ให้ตอน Build)
const DATABASE_URL = (typeof process !== 'undefined' && process.env && process.env.DATABASE_URL) 
  ? process.env.DATABASE_URL 
  : DEFAULT_URL;

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
      
      {(!DATABASE_URL || DATABASE_URL === '') && (
        <div className="bg-amber-50 border-b border-amber-200 p-2 text-center text-xs font-bold text-amber-700 animate-pulse">
          ⚠️ คำเตือน: ยังไม่ได้ตั้งค่า DATABASE_URL ข้อมูลจะไม่ถูกบันทึกลง Google Sheets
        </div>
      )}

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