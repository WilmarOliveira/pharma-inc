import { ContainerHome, Description, Content } from './Styles';
import PacientsList from './components/PacientsList';
import SearchPacients from './components/SearchPacients';

const Home = () => {

    return(
        <ContainerHome>
            <Content>
                <Description>
                    Opus igitur est dicere dura omni specie. 
                    "Tu autem in specie, non videntur, nec omnino res est."
                    Et examine ab eis praecepta eius quae habes, et primo et principaliter
                </Description>
                <SearchPacients />
                <PacientsList />
            </Content>
        </ContainerHome>
    )
}

export default Home;