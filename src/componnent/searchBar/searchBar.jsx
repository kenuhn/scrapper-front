import { Search as SearchIcon } from "@mui/icons-material";
import { AppBar, Box, Button, InputBase, Paper, Toolbar } from "@mui/material";
import { useContext, useState } from "react";
import { crawlContext } from "../../App";
import { OfferApi } from "../../service/offerApi";
const SearchBar = () => {
  const [searchTag1, setSearchTag1] = useState("");
  const [searchTag2, setSearchTag2] = useState("");
  const [searchTag3, setSearchTag3] = useState("");
  const offer = new OfferApi();
  const { setSearch } = useContext(crawlContext);
  const handleSearchTag1Change = (event) => setSearchTag1(event.target.value);
  const handleSearchTag2Change = (event) => setSearchTag2(event.target.value);
  const handleSearchTag3Change = (event) => setSearchTag3(event.target.value);

  const handleSubmit = async () => {
    const searchValues = {
      ville: searchTag1,
      jobtitre: searchTag2,
      distance: searchTag3,
    };

    const newOffer = await offer.searchOffers(searchValues);
    setSearch(newOffer);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
            }}
          >
            <SearchIcon sx={{ p: "10px" }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="ville"
              inputProps={{ "aria-label": "ville" }}
              value={searchTag1}
              onChange={handleSearchTag1Change}
            />
          </Paper>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
            }}
          >
            <SearchIcon sx={{ p: "10px" }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="poste"
              inputProps={{ "aria-label": "poste" }}
              value={searchTag2}
              onChange={handleSearchTag2Change}
            />
          </Paper>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 200,
            }}
          >
            <SearchIcon sx={{ p: "10px" }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="périmètre"
              inputProps={{ "aria-label": "périmètre" }}
              value={searchTag3}
              onChange={handleSearchTag3Change}
            />
          </Paper>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Search
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SearchBar;
