import { PacientDivImage } from './Styles';

const PacientImage = ({ src, alt }) => {

    return(
        <PacientDivImage>
            <img src={src} alt={alt} />
        </PacientDivImage>
    )
}

export default PacientImage;