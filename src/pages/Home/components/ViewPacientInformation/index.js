import Dialog from '@material-ui/core/Dialog';
import { ContainerPacientInformation, InformationLine, InformationLineName } from './Styles';
import PacientImage from '../PacientImage';
import { getFullName, getFormattedDate } from '../../../../utils/utils'

const ViewPacientInformation = ({ currentPacient, open, setClose }) => {

    const handleOnClose = () => {
        setClose();
    }

    return(
        <Dialog open={open} onClose={() => handleOnClose(false)}>
            <ContainerPacientInformation>
                <PacientImage src={currentPacient.picture.medium} alt={getFullName(currentPacient.name)} />
                <InformationLineName>{getFullName(currentPacient.name)}</InformationLineName>
                <InformationLine><strong>Email:</strong> {currentPacient.email}</InformationLine>
                <InformationLine capitalize={true} ><strong>Gender:</strong>{currentPacient.gender}</InformationLine>
                <InformationLine><strong>Birth:</strong>{getFormattedDate(currentPacient.dob.date)}</InformationLine>
                <InformationLine><strong>Phone:</strong>{currentPacient.phone}</InformationLine>
                <InformationLine><strong>Nationality:</strong>{currentPacient.nat}</InformationLine>
                <InformationLine><strong>ID:</strong>{currentPacient?.id.value}</InformationLine>
            </ContainerPacientInformation>
        </Dialog>
    )
}

export default ViewPacientInformation;