import {React,useState} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Addmodal from '../modals/Adddatamodal';



const rows = [
 {job_profile:'Software Developer',job_type:'Remote',location:'Banglore',experience:'Fresher'},
  {job_profile:'Tech Support',job_type:'on site',location:'Pune',experience:'0-1'},
 {job_profile:'Teacher',job_type:'Online',location:'Delhi',experience:'0-5'},
 {job_profile:'Marketing',job_type:'Remote',location:'Punjab',experience:'3-6'},
 {job_profile:'AI Engineer',job_type:'Hybrid',location:'Hyderbad',experience:'0-1'},
];

export default function BasicTable() {
  const[job,setJob]=useState([
    {job_profile:'Software Developer',job_type:'Remote',location:'Banglore',experience:'Fresher'},
     {job_profile:'Tech Support',job_type:'on site',location:'Pune',experience:'0-1'},
    {job_profile:'Teacher',job_type:'Online',location:'Delhi',experience:'0-5'},
    {job_profile:'Marketing',job_type:'Remote',location:'Punjab',experience:'3-6'},
    {job_profile:'AI Engineer',job_type:'Hybrid',location:'Hyderbad',experience:'0-1'},
   ]);
   const submitbtn = (p) => {
  setJob([...job,p])
    console.log([...job,p.formData],"formDataformData");
    };
    const editHandler = (event) => {
      console.log(event,"eventdelete");
        }
        const deleteHandler = (event) => {
          console.log(event,"eventDelete");
        }
  return (
    <TableContainer component={Paper}>
    <Addmodal submitbtn={submitbtn}/>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Profile</TableCell>
            <TableCell align="right">Job Types</TableCell>
            <TableCell align="right">Location&nbsp;</TableCell>
            <TableCell align="right">Experience&nbsp;</TableCell>
            {/* <TableCell align="right">Experience&nbsp;</TableCell> */}
            <TableCell  align="right">Action&nbsp; </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {job.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.job_profile}
              </TableCell>
              {/* <TableCell align="right">{row.job_profile}</TableCell> */}
              <TableCell align="right">{row.job_type}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.experience}</TableCell>
              <TableCell align="right"><Button variant='contained' onClick={editHandler}>Edit</Button> <Button variant='contained' onClick={deleteHandler}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
