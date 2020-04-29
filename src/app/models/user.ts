export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  groupID?: number;
  role?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;   
}