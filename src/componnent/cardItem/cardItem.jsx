import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { tokenContext } from "../../App";
import { OfferApi } from "../../service/offerApi";
const CardItem = ({ title, link, description, company }) => {
  const [open, setOpen] = useState(false);
  const offerApi = new OfferApi();
  const token = useContext(tokenContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user_id = token.user_id;
  const handleAddJob = () => {
    offerApi.addJobFavorite({
      id: user_id,
      job_title: title,
      link,
      description,
    });
  };

  return (
    <>
      <Card
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          width: "100%",
        }}
        onClick={handleOpen}
      >
        <CardContent>
          <FormControl fullWidth>
            <Typography variant="h5" component="div" gutterBottom align="left">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="primary"
              >
                {title}
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              gutterBottom
              align="left"
            >
              {company}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.primary" align="left">
              {description.substring(0, 100)}...
            </Typography>
          </FormControl>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: "10px" }}
          >
            View Description
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddJob}>
            Add
          </Button>
        </Box>
      </Card>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{description}</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose} variant="contained" color="primary">
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default CardItem;

// <Card sx={{ mb: 2, height: "250px" }}>
// <FormControl>
//   <Typography variant="h5" component="div">
//     <Link href={link} target="_blank" rel="noopener noreferrer">
//       {title}
//     </Link>
//   </Typography>
//   <Typography variant="subtitle1" color="text.secondary">
//     {company}
//   </Typography>
//   <Divider sx={{ my: 1 }} />
//   <Typography variant="body2" color="text.primary">
//     {description}
//   </Typography>
//   <Button
//     variant="contained"
//     sx={{ alignSelf: "flex-end", marginRight: "20px" }}
//   >
//     {" "}
//     Add{" "}
//   </Button>
// </FormControl>
// </Card>
