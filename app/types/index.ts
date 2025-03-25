export type BlogPost = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  authorId: Author["id"];
  body: string;
  images?: string[]; // to check
};

export type Author = {
  id: number;
  name: string;
  picture: string;
};
