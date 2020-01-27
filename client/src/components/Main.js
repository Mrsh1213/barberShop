import React, {Component} from 'react';
import withStyles from '@material-ui/styles/withStyles';
import {withRouter} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import barberShops from '../api/barberShop';


import Topbar from './Layout/Topbar';
import BarberShopItem from "./BarberShopItem";

const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey['100'],
        overflow: 'hidden',
        background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 200
    },
    grid: {
        width: 1200,
        marginTop: 40,
        [theme.breakpoints.down('md')]: {
            width: 'calc(100% - 20px)'
        }
    }
});

class Main extends Component {

    state = {
        learnMoredialog: false,
        getStartedDialog: false
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <CssBaseline/>
                <Topbar/>
                <div className={classes.root}>
                    <Grid container justify="center">
                        <Grid spacing={4} alignItems="center" justify="right" container className={classes.grid}>
                            {barberShops.map(barberShop => <Grid item xs={12} md={4}>
                                <BarberShopItem
                                    data={barberShop}
                                />
                            </Grid>)
                            }
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default withRouter(withStyles(styles)(Main));
