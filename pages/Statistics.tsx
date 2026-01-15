
import React, { useMemo } from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from 'recharts';
import { AssessmentResult, ScoreCategory } from '../types';

interface StatisticsProps {
  data: AssessmentResult[];
}

const Statistics: React.FC<StatisticsProps> = ({ data }) => {
  const pieData = useMemo(() => {
    const counts = data.reduce((acc: any, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { name: ScoreCategory.L1, value: counts[ScoreCategory.L1] || 0, color: '#10b981' },
      { name: ScoreCategory.L2, value: counts[ScoreCategory.L2] || 0, color: '#2dd4bf' },
      { name: ScoreCategory.L3, value: counts[ScoreCategory.L3] || 0, color: '#facc15' },
      { name: ScoreCategory.L4, value: counts[ScoreCategory.L4] || 0, color: '#f97316' },
      { name: ScoreCategory.L5, value: counts[ScoreCategory.L5] || 0, color: '#ef4444' },
    ].filter(item => item.value > 0);
  }, [data]);

  return (
    <div className="animate-fade-in pb-16 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-black text-slate-800 mb-3 font-['Kanit']">สถิติสุขภาพใจ (ระดับ 1-5)</h2>
        <p className="text-slate-500 font-medium max-w-2xl mx-auto italic underline">สรุปภาพรวมจากการบันทึกใน Google Sheets</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 text-center">
        {[ScoreCategory.L1, ScoreCategory.L2, ScoreCategory.L3, ScoreCategory.L4, ScoreCategory.L5].map((cat, i) => (
          <div key={cat} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{cat}</p>
            <div className={`text-3xl font-black ${
              i === 0 ? 'text-green-500' : i === 1 ? 'text-teal-500' : i === 2 ? 'text-yellow-500' : i === 3 ? 'text-orange-500' : 'text-red-500'
            }`}>
              {data.filter(d => d.category === cat).length}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-50 shadow-xl max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-slate-700 mb-8 text-center flex items-center justify-center gap-2">
          <span className="w-2 h-5 bg-blue-500 rounded-full"></span>
          สัดส่วนระดับสุขภาพใจภาพรวม
        </h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', fontWeight: 'bold' }} 
              />
              <Legend verticalAlign="bottom" align="center" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
