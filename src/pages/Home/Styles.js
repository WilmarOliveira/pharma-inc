import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
    height: calc(100vh - 80px);
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto 40px auto;
`

export const Description = styled.div`
    max-width: 555px;
    padding-bottom: 40px;
`

export const ContainerPacientInformation = styled.div`
    width: 600px;
    height: 600px
`

export const StyledTextFieldSearch = styled(TextField)`
    &.MuiTextField-root {
        margin-bottom: 20px; 
        background-Color: #fff;
    }
`

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
    }
`