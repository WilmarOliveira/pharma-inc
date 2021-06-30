import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCellHeader = withStyles(() => ({
  head: {
    backgroundColor: '#E5E4E2',
    color: '#000',
    fontWeight: 'bold',
    border: '1px #000 solid'

  }
}))(TableCell);

const StyledTableCellRow = withStyles(() => ({
  body: {
    border: '1px #000 solid'

  }
}))(TableCell);

const PacientsList = () => {

    function createData(name, gender, birth) {
        return { name, gender, birth};
      }
      
      const rows = [
        createData('Freddy Krueger', 'Male', '02/01/1964'),
        createData('Michael Myers', 'Male', '02/01/1964'),
        createData('Samara Morgan', 'Female', '02/01/1964'),
        createData('Jason Vorhees', 'Male', '02/01/1964'),
        createData('Regan McNeil', 'Female', '02/01/1964'),
      ];


    return(
        <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCellHeader align="center">Name</StyledTableCellHeader>
            <StyledTableCellHeader align="center">Gender</StyledTableCellHeader>
            <StyledTableCellHeader align="center">Birth</StyledTableCellHeader>
            <StyledTableCellHeader align="center">Actions</StyledTableCellHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <StyledTableCellRow align="center">{row.name}</StyledTableCellRow>
              <StyledTableCellRow align="center">{row.gender}</StyledTableCellRow>
              <StyledTableCellRow align="center">{row.birth}</StyledTableCellRow>
              <StyledTableCellRow align="center">
                <Button size="small" variant="contained" style={{ color: '#fff', backgroundColor: '#353839' }}>View</Button>
              </StyledTableCellRow>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default PacientsList;