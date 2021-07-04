import { StyledTextFieldSearch } from './Styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchPacients = () => {

    return(
        
        <StyledTextFieldSearch 
            fullWidth 
            size='small' 
            label='Searching' 
            variant='outlined' 
            InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon />
                  </InputAdornment>
                ),
            }} 
        />
        
    )
}

export default SearchPacients;