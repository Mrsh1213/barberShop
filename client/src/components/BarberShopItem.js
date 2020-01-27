import React from 'react';
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import withStyles from '@material-ui/styles/withStyles';
import Link from "@material-ui/core/Link";

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
    data: PropTypes.object,
};

function BarberShopItem(props) {
    const {name, id, address, image, rate, countBarber} = props.data;
    const {classes} = props;
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
                <Link href={"/barberInfo/" + id}>
                    بیشتر ...
                </Link>
            </div>
        </Paper>
    );
}

export default withStyles(styles)(BarberShopItem);