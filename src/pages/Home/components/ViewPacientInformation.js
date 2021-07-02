import Dialog from '@material-ui/core/Dialog';
import { ContainerPacientInformation } from '../Styles';

const ViewPacientInformation = ({ currentPacient, open, setClose }) => {

    const handleOnClose = () => {
        setClose();
    }

    return(
        <Dialog open={open} onClose={() => handleOnClose(false)}>
            <ContainerPacientInformation>
                <div><strong>Name: </strong>{currentPacient?.name.first}</div>
                <div><strong>Email: </strong>{currentPacient?.email}</div>
                <div><strong>Gender: </strong>{currentPacient?.gender}</div>
                <div><strong>Birth:</strong>{currentPacient?.dob.date}</div>
                <div><strong>Phone: </strong>{currentPacient?.phone}</div>
                <div><strong>Nationality: </strong>{currentPacient?.nat}</div>
                <div><strong>ID: </strong>{currentPacient?.id.value}</div>
            </ContainerPacientInformation>
        </Dialog>
    )
}

export default ViewPacientInformation;