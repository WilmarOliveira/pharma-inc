import { useMemo, useRef, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import ViewPacientInformation from '../ViewPacientInformation';
import { StyledTableCellHeader, StyledTableCellRow } from './Styles';
import { getFormattedDate } from '../../../../utils/utils';

const PacientsList = ({ pacientsList, handleOnLoadMorePacients, search }) => {
  const [open, setOpen] = useState(false);
  const [currentPacient, setCurrentPacient] = useState();

  const loaderRef = useRef(null);

    const createData = (value) => {
      return value;
    }

    const rows = useMemo(() => {
      const updatedRows = pacientsList.map((value) => {
        return createData(value);
      });

      return updatedRows;
    }, [pacientsList])

    const handleOnClick = (row) => {
      setCurrentPacient(row);
      setOpen(true);
    }

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '20px',
        threshold: 1.0
      };
  
      const observer = new IntersectionObserver((entities) => {
        const target = entities[0];
  
        if (target.isIntersecting){
          handleOnLoadMorePacients();
        }
      }, options);
  
      if (loaderRef.current){
        observer.observe(loaderRef.current);
      }

    }, [handleOnLoadMorePacients, search]);

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
              <TableRow key={row.login.username}>
                <StyledTableCellRow align='center'>{`${row.name.first} ${row.name.last}`}</StyledTableCellRow>
                <StyledTableCellRow align='center'>{row.gender}</StyledTableCellRow>
                <StyledTableCellRow align='center'>{getFormattedDate(row.dob.date)}</StyledTableCellRow>
                <StyledTableCellRow align='center'>
                  <Button onClick={() => handleOnClick(row)} size='small' variant='contained' style={{ color: '#fff', backgroundColor: '#353839' }}>View</Button>
                </StyledTableCellRow>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {search.length === 0 && <div ref={loaderRef} >Loading...</div>}
      {open && <ViewPacientInformation currentPacient={currentPacient} open={open} setClose={() => setOpen(false)} />}
      </>
    )
}

export default PacientsList;