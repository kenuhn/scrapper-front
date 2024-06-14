export class UserApi {
  async login(userDTO) {
    try {
      console.log(userDTO);
      const response = await fetch(
        "https://bzckend-crawler-job.vercel.app/api/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDTO),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async register(userDTO) {
    try {
      console.log("userDTO", userDTO);
      const response = await fetch(
        "https://bzckend-crawler-job.vercel.app/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(userDTO),
        }
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
