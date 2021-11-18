import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddPropertyModal = ({
  open,
  handleClose,
  setPropertyData,
  propertyData,
  propertyname,
  setpropertyName,
  setsearchValue,
  searchValue,
}) => {
  const [userName, setuserName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setphone] = useState("");

  const propertySubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/property", {
      propertyname: propertyname,
      name: userName,
      location: location,
      phone: phone,
    });

    setPropertyData([
      ...propertyData,
      {
        propertyname: propertyname,
        name: userName,
        location: location,
        phone: phone,
      },
    ]);
    setsearchValue([
      ...searchValue,
      {
        propertyname: propertyname,
        name: userName,
        location: location,
        phone: phone,
      },
    ]);
    handleClose();
  };
  console.log(propertyname, userName, location);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={propertySubmit}>
              <TextField
                sx={{ width: "80%" }}
                name="propertyname"
                variant="outlined"
                label="add your property name"
                onChange={(e) => {
                  setpropertyName(e.target.value);
                }}
              ></TextField>
              <TextField
                sx={{ width: "80%", my: "10px" }}
                name="name"
                variant="outlined"
                label="add your name"
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              ></TextField>
              <TextField
                sx={{ width: "80%", my: "10px" }}
                name="location"
                variant="outlined"
                label="add location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              ></TextField>
              <TextField
                sx={{ width: "80%", my: "10px" }}
                name="location"
                type="text"
                variant="outlined"
                label="add phone"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              ></TextField>
              <Button sx={{ width: "80%" }} type="submit" variant="contained">
                add property
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddPropertyModal;
