import { useEffect, useState, useMemo } from 'react';
import { ContainerHome, Description, Content } from './Styles';
import PacientsList from './components/PacientsList';
import SearchPacients from './components/SearchPacients';
import { getFullName } from '../../utils/utils';
import axios from 'axios';

const Home = () => {
    const BASE_URL = 'https://randomuser.me/api';
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        if (data.length > 0) {
            return data.filter((item) => {
                const fullName = getFullName(item.name);
                return fullName.toLowerCase().includes(search.toString().toLowerCase());
            })
        }
        
        return [];
    }, [search, data])


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
                <SearchPacients setSearch={(text) => setSearch(text)} />
                <PacientsList pacientsList={filteredData} />
            </Content>
        </ContainerHome>
    )
}

export default Home;