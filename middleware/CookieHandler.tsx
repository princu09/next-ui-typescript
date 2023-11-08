import { cookies } from "next/headers";

export const getCookie = () => {
  const cookieStore = cookies();
  return cookieStore.get("next-new-token");
};