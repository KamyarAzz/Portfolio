export type TTooltip = {
  isVisible: boolean;
  text: string;
};

export type TPostPreview = {
  id: number;
  title: string;
  description: string;
  likes: number;
  created_at: string;
  comment_count: number;
};

export type TPost = {
  content: string;
  created_at: string;
  description: string;
  id: number;
  likes: number;
  title: string;
};

export type TComment = {
  id: number;
  post_id: number;
  full_name: string;
  email: string;
  message: string;
  created_at: string;
};

export type TSort = "desc" | "asc" | null;
