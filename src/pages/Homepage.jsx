import { useContext, useEffect } from "react";
import { crawlContext } from "../App";
import CardGrid from "../componnent/cardGrid/cardGrid";
import SearchBar from "../componnent/searchBar/searchBar";
import { OfferApi } from "../service/offerApi";
export const Homepage = () => {
  const { search, setSearch } = useContext(crawlContext);
  const offer = new OfferApi();

  useEffect(() => {
    async function getOffers() {
      const response = await offer.getAllOffers();
      console.log("response", response);
      setSearch(response);
    }
    getOffers();
  }, []);

  console.log("listSearchCrawl", search);

  return (
    <>
      <div
        style={{
          width: "80%",
          textAlign: "flex-end",
          justifyContent: "flex-end",
          margin: "50px 0 0 280px",
        }}
      >
        {/* <h2>Bonjour {name}</h2> */}
        <SearchBar />
        <CardGrid searchOffer={search} />
      </div>
    </>
  );
};
