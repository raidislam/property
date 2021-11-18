import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
const AddProperty = ({
  setPropertyData,
  propertyData,
  propertyname,
  setpropertyName,
  searchValue,
  setsearchValue,
}) => {
  const searchHandler = (e) => {
    const searchText = e.target.value;
    // setValue(searchText);
    const matched = propertyData.filter((pro) =>
      pro.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matched.length);
    setsearchValue(matched);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Container>
        <Grid container sx={{ my: "5rem" }}>
          <Grid item xs={8}>
            <TextField
              onChange={searchHandler}
              sx={{ width: "60%" }}
              label="search property owner..."
              variant="standard"
            ></TextField>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              <AddCircleOutlineIcon /> Add Property
            </Button>
          </Grid>
        </Grid>
      </Container>
      <AddPropertyModal
        propertyname={propertyname}
        setpropertyName={setpropertyName}
        propertyData={propertyData}
        setPropertyData={setPropertyData}
        open={open}
        handleClose={handleClose}
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
    </div>
  );
};

export default AddProperty;
