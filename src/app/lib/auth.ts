export type User = {
  username: string;
  email: string;
  avatar: string;
};


export function saveUser(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "gamezone-user",
      JSON.stringify(user)
    );
  }
}


export function getUser() {
  if (typeof window !== "undefined") {

    const user = localStorage.getItem(
      "gamezone-user"
    );

    if (user) {
      return JSON.parse(user);
    }

  }

  return null;
}


export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(
      "gamezone-user"
    );
  }
}