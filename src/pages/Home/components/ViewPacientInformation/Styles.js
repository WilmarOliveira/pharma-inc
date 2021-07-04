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
    align-items: center;
    justify-content: center;
`

export const InformationLineName = styled(InformationLine)`
    font-size: 22px; 
    font-weight: bold; 
    padding-bottom: 10px;
`
