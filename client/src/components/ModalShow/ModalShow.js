import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
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

const ModalShow = ({
  open,
  handleClose,
  propertyData,
  propertyId,
  newproperty,
  searchValue,
}) => {
  const [propertyname, setpropertyName] = useState("");
  const [userName, setuserName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setphone] = useState("");

  console.log(propertyId);
  const updateProperty = (id) => {
    console.log(id);
    axios.put("http://localhost:5000/update", {
      propertyname: propertyname || newproperty.propertyname,
      name: userName || newproperty.name,
      location: location || newproperty.location,
      phone: phone || newproperty.phone,
      id: id,
    });
    window.location.reload();
  };
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
            <TextField
              sx={{ width: "80%" }}
              name="propertyname"
              variant="outlined"
              label="add your property name"
              defaultValue={newproperty.propertyname}
              onChange={(e) => {
                setpropertyName(e.target.value);
                // const newText = e.target.value;
                // const text = {
                //   propertyname: newText,
                //   name: userName,
                //   location: location,
                //   phone: phone,
                // };
                // setpropertyName(text);
              }}
            ></TextField>
            <TextField
              defaultValue={newproperty.name}
              sx={{ width: "80%", my: "10px" }}
              name="name"
              variant="outlined"
              label="add your name"
              onChange={(e) => {
                setuserName(e.target.value);
                // const name = e.target.value;
                // const newName = { name: name, ...searchValue };
                // setuserName(newName);
              }}
            ></TextField>
            <TextField
              defaultValue={newproperty.location}
              sx={{ width: "80%", my: "10px" }}
              name="location"
              variant="outlined"
              label="add location"
              onChange={(e) => {
                setLocation(e.target.value);
                // const newLocation = e.target.value;
                // const location = { location: newLocation, ...searchValue };
                // setLocation(location);
              }}
            ></TextField>
            <TextField
              sx={{ width: "80%", my: "10px" }}
              defaultValue={newproperty.phone}
              name="phone"
              variant="outlined"
              label="add phone"
              onChange={(e) => {
                setphone(e.target.value);
                // const newPhone = e.target.value;
                // const phone = { phone: newPhone, ...searchValue };
                // setphone(phone);
              }}
            ></TextField>
            <Button
              onClick={() => updateProperty(propertyId)}
              sx={{ width: "80%" }}
              variant="contained"
            >
              Edit property
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalShow;
