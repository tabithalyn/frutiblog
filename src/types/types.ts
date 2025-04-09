export type PostType = {
  _id: string;
  slug: string;
  image: string;
  category: string;
  title: string;
  updatedAt: string;
}

export type UserType = {
  _id: string;
  username: string;
  profilePicture: string;
  createdAt: string;
  email: string;
  isAdmin: boolean;
}