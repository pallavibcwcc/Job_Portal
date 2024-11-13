import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
// import add from './add.css';
import "./add.css";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function BasicModal(p) {
  console.log(p,"props");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    job_profile:"",
    job_type:"",
    location:"",
    experience:"",
  });

console.log(formData,"formData");

const HandleInputFields =(d) => {
console.log(d.target.name,d.target.value);
const { name, value } = d.target;
setFormData({
      ...formData,
      [name]: value,
    });
  }
  const submitbtn = () => {
    p.submitbtn(formData);
  console.log(formData,"formDataformData")
  };
 
  return (
    <div>
      <div className="add-btn">
        <Button variant="contained" onClick={handleOpen}>
          Add Jobs
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                fullWidth
                onChange={HandleInputFields}
                id="outlined-basic"
                label="Job Profile"
                variant="outlined"
                name="job_profile"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                onChange={HandleInputFields}
                id="outlined-basic"
                label="Job Types"
                variant="outlined"
                name="job_type"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                onChange={HandleInputFields}
                id="outlined-basic"
                label="Location"
                variant="outlined"
                name="location"
              />
            </Grid>
            <Grid size={6}>
              <TextField
                fullWidth
                onChange={HandleInputFields}
                id="outlined-basic"
                label="Experience"
                variant="outlined"
                name="experience"
              />
            </Grid>
            <Grid size={6}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Button onClick={submitbtn} variant="contained">
                  Submit
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
