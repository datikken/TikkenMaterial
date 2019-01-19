import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    lists: {
        display: 'flex',
        justifyContent: 'space-around',
    }
});

function paperAboutItem(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h5" component="h5">
                    Что могу:
                 </Typography>
                <div className={classes.lists}>
                    <List>
                        <Typography variant="h6" component="h6">
                            JavaScript
                         </Typography>
                        <Typography variant="p" component="p">
                            ES6<br />
                            React / Redux / Saga<br />
                            JSS<br />
                            Styled Components
                        </Typography>
                    </List>
                    <List>
                        <Typography variant="h6" component="h6">
                            CSS
                         </Typography>
                        <Typography variant="p" component="p">
                            CSS3<br />
                            SASS<br />
                            Post-CSS<br />
                            Modules
                        </Typography>
                    </List>
                    <List>
                        <Typography variant="h6" component="h6">
                            Tools
                         </Typography>
                        <Typography variant="p" component="p">
                            Github<br />
                            Gitlab<br />
                            Confluence<br />
                        </Typography>
                    </List>
                </div>
            </Paper>
        </div>
    );
}

paperAboutItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(paperAboutItem);