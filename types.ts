
export type Level = 'ปวช' | 'ปวส';

export interface AssessmentResult {
  timestamp: string;
  name: string;
  grade: string;
  level: Level;
  department: string;
  age: number;
  score: number;
  category: string;
}

export enum ScoreCategory {
  L1 = 'ระดับ 1',
  L2 = 'ระดับ 2',
  L3 = 'ระดับ 3',
  L4 = 'ระดับ 4',
  L5 = 'ระดับ 5'
}
