import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Axios from "axios";
// import * as SongAPI from "../../API/SongAPI";
// import {SET_SONGDATA} from "../../store/types";
// import {hideLoader} from "../../store/action/app";

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

interface IProps {
    onSearch: (value: string) => string
}

export default function AsynchronousSearch(props: IProps) {
    const [open, setOpen] = React.useState<boolean>(false);
    const [options, setOptions] = React.useState<any>([]);
    const loading = open && options.length === 0;
    const {onSearch} = props;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }
        const listSongs: [] = [];
        (async () => {
            // API select
            // const response = await SongAPI.getRef().once('value')
            //     .then((snapshot) => {
            //         snapshot.forEach(childSnapshot => {
            //             listSongs.push(childSnapshot.val());
            //         });
            //     });
            // const countries = await response;

            if (active) {
                setOptions(Object.values(listSongs).map(item => item));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleChange = (value: string) => {
        onSearch(value)
    }

    return (
        <Autocomplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option: any, value: any) => option.data.title === value.data.title}
            getOptionLabel={(option: any) => option.data.title + ' - ' + option.data.artist}
            options={options}
            onChange={(event: any, value: string) => handleChange(value)}
            loading={loading}
            renderInput={(params: any) => (
                <TextField
                    {...params}
                    label="Search Song"

                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
