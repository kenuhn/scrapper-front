/* eslint-disable react/prop-types */
import { Box, Button, Container } from "@mui/material";
import { useState } from "react";

import CardItem from "../cardItem/cardItem";

const CardGrid = (myOffer) => {
  const listOffer = myOffer.searchOffer;
  console.log("listOffer", listOffer);
  const [prev, setPrev] = useState(0);
  const [curr, setCurr] = useState(10);

  const handleNext = () => {
    if (curr >= listOffer.length) return;
    setPrev(curr);
    setCurr(curr + 10);
  };

  const handlePrev = () => {
    if (prev <= 0) return;
    setPrev(prev - 10);
    setCurr(curr - 10);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          overflowY: "auto",
          p: 2,
          bgcolor: "background.paper",
        }}
      >
        {listOffer.length > 1 ? (
          listOffer
            .slice(prev, curr)
            .map((item, index) => (
              <CardItem
                key={index}
                title={item.Title}
                link={item.Link}
                description={item.Description.substr(0, 800)}
                company={item.Company}
              />
            ))
        ) : (
          <p> No offer</p>
        )}
      </Box>
      <Container>
        <Button onClick={handlePrev}>Précédent</Button>
        <Button onClick={handleNext}>Suivant</Button>
      </Container>
    </Container>
  );
};

export default CardGrid;
