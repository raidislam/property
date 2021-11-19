import React, { useEffect, useState } from "react";
import { Alert, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AddProperty from "../../AddProperty/AddProperty";
import ModalShow from "../../ModalShow/ModalShow";
import axios from "axios";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

//table color
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Property = () => {
  const [searchValue, setsearchValue] = useState([]);
  const [propertyname, setpropertyName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [propertyId, setPropertyId] = useState(0);
  const [newproperty, setProperty] = useState({});
  const handleOpen = (id, property) => {
    setProperty(property);
    setPropertyId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [propertyData, setPropertyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/property")
      .then((res) => res.json())
      .then((data) => {
        setPropertyData(data);
        setsearchValue(data);
      });
  }, []);
  console.log(newproperty);
  const deleteProperty = (data) => {
    axios.delete(`http://localhost:5000/property/${data}`).then((response) => {
      if (response) {
        alert("you successfully deleted");
      }
    });
    window.location.reload();
  };
  console.log(propertyId);
  console.log(propertyData);
  return (
    <Paper>
      <Box>
        <Container
          style={{
            backgroundColor: "#efefef",
            padding: "20px",
            marginTop: "100px",
            borderRadius: "10px",
            height: "650px",
            overflowY: "scroll",
          }}
        >
          <AddProperty
            propertyId={propertyId}
            searchValue={searchValue}
            setsearchValue={setsearchValue}
            propertyname={propertyname}
            setpropertyName={setpropertyName}
            propertyData={propertyData}
            setPropertyData={setPropertyData}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">ID</StyledTableCell>
                      <StyledTableCell>Property</StyledTableCell>
                      <StyledTableCell align="right">Name</StyledTableCell>
                      <StyledTableCell align="right">Location</StyledTableCell>
                      <StyledTableCell align="right">phone</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchValue.map((property, index) => (
                      <StyledTableRow
                        key={property.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <StyledTableCell align="right">
                          {property.id}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {property.propertyname}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {property.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {property.location}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {property.phone}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
                            onClick={() => deleteProperty(property.id)}
                            variant="contained"
                            color="secondary"
                          >
                            <DeleteForeverRoundedIcon /> Delete
                          </Button>
                          <Button
                            sx={{ m: "15px" }}
                            variant="contained"
                            color="secondary"
                            onClick={() => handleOpen(property.id, property)}
                          >
                            <EditRoundedIcon /> Edit
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
        <ModalShow
          setPropertyData={setPropertyData}
          propertyData={propertyData}
          setPropertyId={setPropertyId}
          handleClose={handleClose}
          open={open}
          setsearchValue={setsearchValue}
          newproperty={newproperty}
          setProperty={setProperty}
          searchValue={searchValue}
          propertyId={propertyId}
          searchValue={searchValue}
        />
      </Box>
    </Paper>
  );
};

export default Property;
