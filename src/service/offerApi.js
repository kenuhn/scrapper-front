import { existApi } from "../main";
import data from "../mockData/data.json";

export class OfferApi {
  async searchOffers(offerDTO) {
    try {
      console.log(offerDTO);
      if (existApi) {
        const token = localStorage.getItem("token").replace(/^['"]|['"]$/g, "");
        const response = await fetch(
          "https://bzckend-crawler-job.vercel.app/api/crawl/",
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
          "https://bzckend-crawler-job.vercel.app/api/all/",
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
          "https://bzckend-crawler-job.vercel.app/api/favorite/",
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
          "https://bzckend-crawler-job.vercel.app/api/favorite/",
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
