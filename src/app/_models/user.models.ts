export type TUser = {
  id?: number;
  username: string;
  password: string;
  fullname?: string;
  email?: string;
};

export type TProfile = {
  avatar: string;
  website: string;
  bio: string;
  gender: string;
  accountSuggestion: true;
  followers: any;
  following: any;
};
