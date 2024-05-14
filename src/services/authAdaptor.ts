import { fakeApi } from "./api";

export function useAuth() {
  return {
    auth(name: string, email: Email) {
      return fakeApi({
        name,
        email,
        id: "sample-user-id",
        allergies: ["cocoa", "cherry"],
        preferences: ["marshmallow", "peanuts"],
      });
    },
  };
}
