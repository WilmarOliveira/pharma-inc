import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchPacients = () => {

    return(
        
        <TextField 
            fullWidth 
            size='small' 
            label='Searching' 
            variant='outlined' 
            style={{marginBottom: '20px', backgroundColor: '#fff'}}
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