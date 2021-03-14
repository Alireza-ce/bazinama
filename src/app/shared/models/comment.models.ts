export interface Comment {
  id: number;
  title: string;
  score: number;
  comment_text: string;
  likes: number;
  dislikes: number;
  user: string;
  date_added: string;
  comment_reply: any[];
  user_avatar: string;
  product: number;
  is_read: boolean;
  is_approved: boolean;
  product_name: string;
  date_modify: string;
}