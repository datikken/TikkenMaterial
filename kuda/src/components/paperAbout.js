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

const styles = theme => ({
    paperWrapper: {
        paddingTop: 15,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    aboutWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: 10
    },
    socialIcons: {
        justifyContent: 'space-around'
    }
});

function PaperSheet(props) {
    const { classes } = props;
    return (
        <div className={classes.paperWrapper}>
            <Paper className={classes.root} elevation={1}>
                <div className={classes.aboutWrapper}>
                    <div className="listWrapper">
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
                            <ListItem className={classes.socialIcons}>
                                <i class="fab fa-facebook fa-2x"></i>
                                <i class="fab fa-instagram fa-2x"></i>
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