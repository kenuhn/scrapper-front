export const decodeToken = () => {
  let objectToken = localStorage.getItem("token");
  if (objectToken) {
    return objectToken = objectToken.replace(/^['"]|['"]$/g, "");
  }

  console.log(objectToken);
  return null;
};
