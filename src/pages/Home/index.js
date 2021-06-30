import { useEffect, useState } from 'react';
import { ContainerHome, Description, Content } from './Styles';
import PacientsList from './components/PacientsList';
import SearchPacients from './components/SearchPacients';
import axios from 'axios';

const Home = () => {
    const BASE_URL = 'https://randomuser.me/api';
    const [data, setData] = useState([]);

    useEffect(() => {

        async function fetchPacients() {
          await axios.get(`${BASE_URL}/?results=5`)
          .then(response => {
              setData(response.data.results)
          })
    
        }
    
        fetchPacients();
    
      }, [])

    return(
        <ContainerHome>
            <Content>
                <Description>
                    Opus igitur est dicere dura omni specie. 
                    "Tu autem in specie, non videntur, nec omnino res est."
                    Et examine ab eis praecepta eius quae habes, et primo et principaliter
                </Description>
                <SearchPacients />
                <PacientsList pacientsList={data} />
            </Content>
        </ContainerHome>
    )
}

export default Home;