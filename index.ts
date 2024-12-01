export default interface PostType {
  post_id: string;
  title: string;
  content: string;
  created_at: string;
  tags: string[];
  url_string: string;
  views: number;
}
