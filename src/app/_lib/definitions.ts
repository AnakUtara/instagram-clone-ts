export interface Post {
  id: number;
  username: string;
  image: string;
  caption: string;
  date: string;
  type: string;
  hashtag: string[];
  likes: object[];
  comments: object[];
}
