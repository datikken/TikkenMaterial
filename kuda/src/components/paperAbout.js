import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PaperAboutItem from './paperAboutItem'
import Card from './card'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Link from 'react-dom'

const styles = theme => ({
    paperWrapper: {
        paddingTop: 15,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        fontFamily: 'Roboto'
    },
    aboutWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: 10
    },
    socialIcons: {
        justifyContent: 'space-around',
        textDecoration: 'none',
        paddingRight: 55
    },
    tel: {
        textDecoration: 'none',
        color: 'black'
    }
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div className={classes.paperWrapper}>
            <Paper className={classes.root} elevation={1}>
                <div className={classes.aboutWrapper}>
                    <div>
                        <Typography variant="h5" component="h5">
                            Обо мне:
                        </Typography>
                        <List>
                            <ListItem>
                                Frontend developer
                            </ListItem>
                            <ListItem>
                                Никита Шадыбеков, 26 лет
                            </ListItem>
                            <ListItem>
                                г. Санкт-Петербург
                            </ListItem>
                            <ListItem>
                                <a className={classes.tel} href="tel:+89005679748"> 8 (900) 567-97-48</a>
                            </ListItem>
                            <ListItem className={classes.socialIcons}>
                                <a href="https://www.facebook.com/tikken.tikken.3" target='blank'><i class="fab fa-facebook fa-2x"></i></a>
                                <a href="https://vk.com/datikken" target='blank'><i class="fab fa-vk fa-2x"></i></a>
                            </ListItem>

                            <ListItem className={classes.socialIcons}>
                                <a href="https://github.com/tikken" target='blank'><i class="fab fa-github fa-2x"></i></a>
                                <a href='tg://resolve?domain=tikken23'><i class="fab fa-telegram fa-2x"></i></a>
                            </ListItem>

                        </List>
                    </div>
                    <Card />
                </div>
                <PaperAboutItem />
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);