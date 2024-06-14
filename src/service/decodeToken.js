export const decodeToken = () => {
  let objectToken = localStorage.getItem("token");
  if (objectToken) {
    objectToken = objectToken.replace(/^['"]|['"]$/g, "");
  }

  console.log(objectToken);
  return null;
};
