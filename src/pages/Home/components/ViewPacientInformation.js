import Dialog from '@material-ui/core/Dialog';
import { ContainerPacientInformation, InformationLine, InformationLineName } from '../Styles';
import PacientImage from './PacientImage';

const ViewPacientInformation = ({ currentPacient, open, setClose }) => {

    const handleOnClose = () => {
        setClose();
    }

    return(
        <Dialog open={open} onClose={() => handleOnClose(false)}>
            <ContainerPacientInformation>
                <PacientImage src={currentPacient.picture.medium} alt='Pacient' />
                <InformationLineName>{`${currentPacient.name.first} ${currentPacient.name.last}`}</InformationLineName>
                <InformationLine><strong>Email:</strong> {currentPacient.email}</InformationLine>
                <InformationLine><strong>Gender: </strong>{currentPacient.gender}</InformationLine>
                <InformationLine><strong>Birth:</strong>{currentPacient.dob.date}</InformationLine>
                <InformationLine><strong>Phone: </strong>{currentPacient.phone}</InformationLine>
                <InformationLine><strong>Nationality: </strong>{currentPacient.nat}</InformationLine>
                <InformationLine><strong>ID: </strong>{currentPacient?.id.value}</InformationLine>
            </ContainerPacientInformation>
        </Dialog>
    )
}

export default ViewPacientInformation;