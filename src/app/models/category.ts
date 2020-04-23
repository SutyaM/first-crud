export interface Category {
  id?: number;
  name: string;
  status: 'important' | 'freetime' | 'family';
  updated_at?: string;
  created_at?: string;
};