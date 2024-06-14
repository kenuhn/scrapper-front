/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { tokenContext } from "../App";
import CardGrid from "../componnent/cardGrid/cardGrid";
import { OfferApi } from "../service/offerApi";
export const MyOffer = () => {
  const { user_id } = useContext(tokenContext);
  const [listMyOffer, setListMyOffer] = useState([]);
  const offerApi = new OfferApi();
  useEffect(() => {
    async function getMyOffer() {
      try {
        const response = await offerApi.getMyOffer(user_id);
        if (response && Array.isArray(response)) {
          console.log("test", response);
          setListMyOffer(response);
        } else {
          console.log("Invalid response format:", response);
          setListMyOffer([]);
        }
      } catch (error) {
        console.error("Failed to fetch offers:", error);
        setListMyOffer([]);
      }
    }

    getMyOffer();
  }, [user_id]); // Ajout de user_id comme dépendance

  return (
    <>
      <CardGrid searchOffer={listMyOffer} />
    </>
  );
};
