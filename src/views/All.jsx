import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  //  marginTop:"100px",
  //  marginBottom:"200px",
   margin:"100px auto 200px",
   width:"70%"
  },
});
const All = () => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5000/users")
      setUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>S No.</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              {/* <StyledTableCell align="right">Calories</StyledTableCell> */}
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Transfer</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item,index) => {
              return (
                <StyledTableRow key={item.username}>
                  <StyledTableCell component="th" scope="row">
                    {index +1}
                  </StyledTableCell>
                  <StyledTableCell align="left" component="th" scope="row">
                    {item.username}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{item.name}</StyledTableCell> */}
                  <StyledTableCell align="right">{item.amount}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to={`/http://localhost:5000/users/${item._id}`}>
                      <Button variant="contained" color="primary">
                        Transfer
                      </Button>
                    </Link>
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default All;
