export interface Category {
  id?: number;
  name: string;
  status: "important" | "free-time" | "family";
  created_at?: string;
  updated_at?: string;
}