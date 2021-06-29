import { ContainerCompany, ContainerHeader, ImageCompany, ImageUser, TitleCompany } from './Styles';
import { grey } from '@material-ui/core/colors';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import PersonIcon from '@material-ui/icons/Person';


const Header = () => {

    return(
        <ContainerHeader>
            <ContainerCompany>
                <ImageCompany>
                    <InsertPhotoIcon style={{ color: grey[500] }} />
                </ImageCompany>
                <TitleCompany>Company</TitleCompany>
            </ContainerCompany>
            <ImageUser>
                <PersonIcon style={{ color: grey[500] }} />
            </ImageUser>
        </ContainerHeader>
    )
}

export default Header;