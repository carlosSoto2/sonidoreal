export interface IBlogDT {
  id: number;
  img?: string;
  tag?: string;
  title: string;
  date: string;
  read?: string;
  author_img?: string;
  author_name: string;
  page: string;
  sm_text?: string;
  category?: string;
  sm_desc?: string;
  desc?: string;
  see?: string;
  comment?: number;
  icon?: string;
  video_id?: string;
  audio_url?: string;
  blog_slider?: boolean;
  blog_audio?: boolean;
  blog_quote?: boolean;
  video?: boolean;
  slider_images?: string[];
}
