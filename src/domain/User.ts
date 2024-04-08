export type User = {
  id: UniqId;
  name: string;
  email: Email;
  token: string;
  role: string;
};

export const isLogin = (user: User) => {
  if (user.token) window.location.replace("/home");
  else window.location.replace("/login");
};
