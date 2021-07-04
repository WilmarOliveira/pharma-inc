import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

export const StyledTableCellHeader = styled(TableCell)`
    &.MuiTableCell-head {
        background-color: #E5E4E2;
        color: #000;
        font-weight: bold;
        border: 1px #000 solid;
    }
`

export const StyledTableCellRow = styled(TableCell)`
    &.MuiTableCell-body {
        border: 1px #000 solid;
        text-transform: capitalize;
    }
`