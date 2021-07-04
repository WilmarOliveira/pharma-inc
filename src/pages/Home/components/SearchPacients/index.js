import { StyledTextFieldSearch } from './Styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchPacients = ({ setSearch }) => {

    return(
        
        <StyledTextFieldSearch 
            fullWidth 
            size='small' 
            label='Searching' 
            variant='outlined'
            onChange={(e) => setSearch(e.target.value)}
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