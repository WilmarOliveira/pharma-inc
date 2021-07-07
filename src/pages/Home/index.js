import { useEffect, useState, useMemo, useCallback } from 'react';
import { ContainerHome, Description, Content } from './Styles';
import PacientsList from './components/PacientsList';
import SearchPacients from './components/SearchPacients';
import TableLoader from './components/Loaders/TableLoader';
import { getFullName } from '../../utils/utils';
import axios from 'axios';

const Home = () => {
    const BASE_URL = 'https://randomuser.me/api';
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);


    const filteredData = useMemo(() => {
        if (data.length > 0) {
            return data.filter((item) => {
                const fullName = getFullName(item.name);
                return fullName.toLowerCase().includes(search.toString().toLowerCase());
            })
        }
        
        return [];
    }, [search, data])

     const getPacients = useCallback(async() => {

        await axios.get(`${BASE_URL}/?page=${currentPage}&results=50&seed=abc`)
        .then(response => {
            setData([...data, ...response.data.results]);
            setIsLoading(false);
        })

        // eslint-disable-next-line
    }, [currentPage])

    
    const handleOnLoadMorePacients = useCallback(() => {
        setCurrentPage(prev => prev + 1)
        
    }, [])


    useEffect(() => {
        getPacients();
      }, [getPacients])
    


    return(
        <ContainerHome>
            <Content>
                <Description>
                    Opus igitur est dicere dura omni specie. 
                    "Tu autem in specie, non videntur, nec omnino res est."
                    Et examine ab eis praecepta eius quae habes, et primo et principaliter
                </Description>
                <SearchPacients setSearch={(text) => setSearch(text)} />
                {isLoading ?
                    <TableLoader /> 
                    :
                    <PacientsList pacientsList={filteredData} search={search} handleOnLoadMorePacients={handleOnLoadMorePacients} />
                }
            </Content>
        </ContainerHome>
    )
}

export default Home;