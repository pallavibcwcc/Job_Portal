import Paper from '@mui/material/Paper';
import Navbar  from './components/Navbar/navbar';
// import Adddatamodal from './components/modals/Adddatamodal';
import Table from './components/Table/tableView';
import './App.css';


const APP =() => {
  return(
<div>
<Paper>
<Navbar/>
{/* <Adddatamodal/> */}
</Paper>
<Table/>
</div>
  )
}

export default APP;