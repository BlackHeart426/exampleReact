import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import {StyledFormControl, StyledOutlinedInput, useStyles} from "./style";
import OutlinedInput from "@material-ui/core/OutlinedInput";

interface IProps {
    loading: boolean,
    searchText: string,
    onSearch: (a: string) => string
}

export const SearchField = (props: IProps) => {
    const classes = useStyles();
    const [searchText, setSearchText] = React.useState<string>('');
    const dispatch = useDispatch()
    const {onSearch} = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        dispatch(onSearch( event.target.value ));
    };

    const handleClearTextField = () => {
        setSearchText( '' );
        dispatch(onSearch( '' ));
    };

    return (
        <StyledFormControl className={classes.margin} >

            <OutlinedInput
                id="standard-adornment-amount"
                value={searchText}
                placeholder="Search"
                onChange={handleChange}
                // variant={"outlined"}
                endAdornment={
                    <InputAdornment position="end">
                        {searchText
                            ? <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClearTextField}
                                size="small"
                            >
                                <CloseIcon />
                            </IconButton>
                            : <IconButton
                                aria-label="toggle password visibility"
                                size="small"
                            >
                                <SearchIcon />
                            </IconButton>

                        }
                    </InputAdornment>
                }
            />
        </StyledFormControl>
    )
}