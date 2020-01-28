import React from 'react';
import * as PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {CardMedia} from "@material-ui/core";
import withStyles from '@material-ui/styles/withStyles';
import Rate from 'rc-rate';
import barber from '../images/barber.svg';
import {IoIosCut} from "react-icons/io";
import 'rc-rate/assets/index.css';

const styles = theme => ({
    img: {
        height: "200px",
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    reserveButtom: {
        margin: theme.spacing(1),
        backgroundColor: "#4feeed",
        ':hover': {
            backgroundColor: "#cf00ee",
        }
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
                    <div dir="ltr">
                        <Rate
                            defaultValue={rate}
                            style={{
                                fontSize: 20, flexDirection: "row-reverse",
                                display: "flex"
                            }}
                            allowHalf
                            allowClear={false}
                            disabled
                            character={<IoIosCut/>}
                        />

                    </div>
                    {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {address}
                </Typography>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button className={classes.reserveButtom}
                        fullWidth color={"secondary"} variant={"contained"}
                        href={"/barberInfo/" + id}>
                    رزرو
                </Button>
            </div>
        </Paper>
    );
}

export default withStyles(styles)(BarberShopItem);