import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs'
import { useState } from 'react';
import ViewPacientInformation from './ViewPacientInformation';
import { StyledTableCellHeader, StyledTableCellRow } from '../Styles';

const PacientsList = ({ pacientsList }) => {
  const [open, setOpen] = useState(false);
  const [currentPacient, setCurrentPacient] = useState();

    function createData(email, name, gender, birth) {
        return { email, name, gender, birth};
      }
      
    const rows = pacientsList.map((value) => {
      const formatedDate = dayjs(value?.dob.date).format('DD/MM/YYYY');
      return createData(value.email, value?.name.first, value?.gender, formatedDate);
    });

    const handleOnClick = (row) => {
      const pacient = pacientsList.find(pacient => pacient.email === row.email);
      setCurrentPacient(pacient);
      setOpen(true);
    }

    return(
      <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCellHeader align='center'>Name</StyledTableCellHeader>
              <StyledTableCellHeader align='center'>Gender</StyledTableCellHeader>
              <StyledTableCellHeader align='center'>Birth</StyledTableCellHeader>
              <StyledTableCellHeader align='center'>Actions</StyledTableCellHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.email}>
                <StyledTableCellRow align='center'>{row.name}</StyledTableCellRow>
                <StyledTableCellRow align='center'>{row.gender}</StyledTableCellRow>
                <StyledTableCellRow align='center'>{row.birth}</StyledTableCellRow>
                <StyledTableCellRow align='center'>
                  <Button onClick={() => handleOnClick(row)} size='small' variant='contained' style={{ color: '#fff', backgroundColor: '#353839' }}>View</Button>
                </StyledTableCellRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ViewPacientInformation currentPacient={currentPacient} open={open} setClose={() => setOpen(false)} />
      </>
    )
}

export default PacientsList;