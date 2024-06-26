import { existApi } from "../main";
import data from "../mockData/data.json";

export class OfferApi {
  async searchOffers(offerDTO) {
    try {
      console.log(offerDTO);
      if (existApi) {
        const token = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");
        const response = await fetch(
          "http://127.0.0.1:8000/api/crawl/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(offerDTO),
          }
        );

        const dataf = await response.json();

        return dataf;
      } else {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getAllOffers() {
    try {
      if (existApi) {
        const token = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");

        const response = await fetch(
          "http://127.0.0.1:8000/api/all/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataf = await response.json();
        console.log(dataf);
        return dataf;
      } else {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async addJobFavorite(job) {
    try {
      if (existApi) {
        const token = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");

        const response = await fetch(
          "http://127.0.0.1:8000/api/user_jobs/favorite/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(job),
          }
        );

        const dataf = await response.json();
        console.log(dataf);
        return dataf;
      } else {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getMyOffer() {
    try {
      if (existApi) {
        const token = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");

        const response = await fetch(
          "http://127.0.0.1:8000/api/favorite/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataf = await response.json();
        console.log(dataf);
        return dataf;
      } else {
        return data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
