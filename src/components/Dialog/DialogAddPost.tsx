import React, {ChangeEvent, useEffect, useState} from "react";
import {CustomDialog} from "./CustomDialog";
import {CardContent, Typography, Select, MenuItem, Paper, InputLabel, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import {connect} from "react-redux";

const initialState = {
    name: '',
    description: '',
    available: 'all',
    comments: 'allowed',
    visible: '',
    teaser: ''
}

interface IState {
    name: string,
    description: string,
    available: string,
    comments: string,
    visible: any,
    teaser: string
}

function DialogAddPost(props: any) {
    const {show, onHide} = props;
    const [dialogOpened, setDialogOpened] = useState<boolean>(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
    const [state, setState] = useState<IState>(initialState)


    useEffect(()=>{
        setDialogOpened(show)
    },[show])

    useEffect(() => {
        if (state.name.trim() &&  state.description.trim()){
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [state.name, state.description]);

    const handleSave = () => {
        // const now = moment()
        // moment.lang('ru');
        // onHide()
        // const dataPost = {
        //     uuid: shortid.generate(),
        //     createPost: now.format('LLLL'),
        //     name: state.name,
        //     description: state.description,
        //     teaser: state.teaser,
        //     available: state.available,
        //     comments: state.comments,
        //     visible: state.visible,
        //     countLike: 0,
        //     countComments: "",
        // }
        // props.action.addDataBlog('Posts', dataPost)
    }

    const handleRemove = () => {
        onHide()

    }

    const handleChangeAvailable = (event: any) => {
        setState({...state, available: event.target.value})
    }
    const handleChangeComment = (event: any) => {
        setState({...state, comments: event.target.value})
    }

    const handleChangeWhoSee = (event: any) => {
        setState({...state, visible: event.target.value})
    }

    // const handleChange = (value: any) => {
    //
    //     setValue({value});
    //     setHtml(value.toString('html'));
    // };

    const data = {
        title: 'New Post',
        content:
            <div>
                <Typography variant="body2"  component="p">
                    <strong>Name</strong>
                </Typography>
                <TextField
                    variant="outlined"
                    style={{marginTop: 5}}
                    fullWidth
                    id="name"
                    name="name"
                    type="text"
                    size={"small"}
                    placeholder="Enter your name"
                    margin="normal"
                    onChange={(e) => setState({...state, name: e.target.value})}
                    // onKeyPress={(e)=>handleKeyPress(e)}
                />
                <Typography variant="body2" style={{marginTop: 10}}  component="p">
                    <strong>Main text</strong>
                </Typography>
                <TextField
                    variant="outlined"
                    style={{marginTop: 5}}
                    fullWidth
                    id="description"
                    name="description"
                    type="text"
                    size={"small"}
                    placeholder="Enter description"
                    margin="normal"
                    onChange={(e) => setState({...state, description: e.target.value})}
                    // onKeyPress={(e)=>handleKeyPress(e)}
                />
                <Grid container spacing={2} style={{marginTop: 20}} >
                    <Grid item xs={6}>
                        <Select
                            fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.available}
                            onChange={handleChangeAvailable}
                        >
                            <MenuItem value={'all'}>Open for all</MenuItem>
                            <MenuItem value={'sub'}>Only subscribers</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.comments}
                            onChange={handleChangeComment}
                        >
                            <MenuItem value={'allowed'}>Comments allowed</MenuItem>
                            <MenuItem value={'notAllowed'}>Comments not allowed</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Typography variant="body2"  component="p" style={{marginTop: 20}} >
                    <strong>Who can see post</strong>
                </Typography>
                <FormControl variant="outlined" fullWidth>
                    <Select
                        // style={{height: 40}}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={state.visible}
                        onChange={handleChangeWhoSee}
                    >
                        {props.dataBlog.Tiers && Object.values(props.dataBlog.Tiers).map((item: any, index: number) => (
                            <MenuItem key={index} value={item.uuid}>"{item.name}" ({item.cost})</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="body2"  component="p" style={{marginTop: 20}} >
                    <strong>Teaser (not for subscribers)</strong>
                </Typography>
                <TextField
                    variant="outlined"
                    style={{marginTop: 5}}
                    fullWidth
                    multiline
                    rows={8}
                    inputProps={{
                        maxLength: 150,
                    }}
                    id="teaser"
                    name="Teaser"
                    type="text"
                    placeholder={"Enter teaser"}
                    margin="normal"
                    onChange={(e) => setState({...state, teaser: e.target.value})}
                    // onKeyPress={(e)=>handleKeyPress(e)}
                />
                <Typography color="textSecondary" variant="body2"  component="p" align={"right"}>
                    {state.description.length} / 150
                </Typography>

            </div>,
        action:
            <>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    // className={classes.loginBtn}
                    onClick={handleSave}
                    disableElevation
                    disabled={isButtonDisabled}>
                    save
                </Button>
            </>
    }

    return (
        <CustomDialog size={'sm'} data={ data } show={ dialogOpened } extendData={false} onHide={ onHide } />
    )
}

function mapStateToProps(state: any) {
    return {
        dataBlog: state.blog
    }
}
function mapDispatchToProps(dispatch: any) {
    return {
        action: {
            // addDataBlog: (nameColumn: string, value: any) => dispatch(addDataBlogActionCreator(nameColumn, value, true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogAddPost)