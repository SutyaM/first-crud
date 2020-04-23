export interface Todo {
  id?: number;
  name: string;
  description: string;
  status: 'new' | 'in progress' | 'done';
  userID: number;
  categoryID: number;
  updated_at?: string;
  created_at?: string;
}