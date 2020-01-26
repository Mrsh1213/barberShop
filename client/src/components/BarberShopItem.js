import React from 'react';
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {CardMedia} from "@material-ui/core";
import withStyles from '@material-ui/styles/withStyles';

const styles = theme => ({
    img: {
        height: "200px",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    actionButtom: {
        textTransform: 'uppercase',
        margin: theme.spacing(1),
        width: 152
    },
    box: {
        marginBottom: 40,
        height: 65
    },
});
BarberShopItem.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    rate: PropTypes.string,
    countBarber: PropTypes.string,
};

function BarberShopItem(props) {
    const {classes, name, address, image, rate, countBarber} = props;
    return (
        <Paper className={classes.paper}>
            <CardMedia
                className={classes.img}
                image={'data:image/jpeg;base64,' + image}
                title={name}
            />
            <div className={classes.box}>
                <Typography style={{textTransform: 'uppercase'}} color='secondary' gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {address}
                </Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button color='primary' variant="contained" className={classes.actionButtom}>
                    بیشتر
                </Button>
            </div>
        </Paper>
    );
}

export default withStyles(styles)(BarberShopItem);