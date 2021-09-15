import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, InputAdornment } from "@material-ui/core";

function Search({city, updateCity}){
    const [newCity, setNewCity] = useState('');

    const sumbitHandler = () => {
        // prevents us from entering in an empty search bar
        if (!newCity) {
            return;
        }
        console.log("submitting new city: ", newCity);
        console.log("going to update old city: ", city)
        updateCity(newCity.toLowerCase());
        setNewCity('');
    }

    return (
        <div style={{margin: '2vh'}}>
            <TextField
                variant='outlined'
                value={newCity}
                defaultValue={city}
                placeholder='Search'
                onChange={(e) => setNewCity(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton onClick={sumbitHandler}>
                                <SearchIcon></SearchIcon>
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </div>
    );
}

export default Search;