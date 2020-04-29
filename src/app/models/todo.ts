export interface Todo {
  id?: number;
  name: string;
  description: string;
  status: string;
  user_id: number;
  category_id: number;
  created_at?: string;
  update_at?: string;
}