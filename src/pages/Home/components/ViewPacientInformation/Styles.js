import styled from 'styled-components';

export const ContainerPacientInformation = styled.div`
    width: 600px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const InformationLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    margin: 0 auto 0 auto;
    padding-bottom: 5px;
    font-size: 16px;
    text-transform: ${props => props.capitalize && 'capitalize'};

    strong {
        padding-right: 3px;
    }
`

export const InformationLineName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 22px; 
    font-weight: bold; 
    padding-bottom: 10px;
`
