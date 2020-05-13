import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
            rootForm: {
                //width: 800,
                // display: 'none',
                [theme.breakpoints.down('md')]: {
                    // display: 'block',
                    width: '100%',
                },
            },
            leftSide: {
                width: 417,
                [theme.breakpoints.down('md')]: {
                    // display: 'block',
                    width: '95%',
                    marginRight: 0,
                    padding: 0,
                },
                padding: 10,
                marginLeft: 10
            } ,
            rightSide: {
                width: 420,
                [theme.breakpoints.down('md')]: {
                    // display: 'block',
                    width: '95%',
                    marginLeft: 0,
                },
                padding: 10,
                marginRight: 20
            },
            leftSideDiv: {
                [theme.breakpoints.down('md')]: {
                    padding: 0,
                },
                padding: 10,
            }
        }
    )
)
