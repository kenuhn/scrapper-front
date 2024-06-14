import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
  const objectToken = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");
  console.log(objectToken);
  return jwtDecode(objectToken);
};
