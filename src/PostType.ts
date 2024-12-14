export type PostType = {
  post_id: string;
  created_at: string;
  title: string;
  content: string;
  url_string: string;
  views: number;
  thumbnail_string: string;
  is_hidden: boolean;
  is_draft: boolean;
  is_pinned: boolean;
};
