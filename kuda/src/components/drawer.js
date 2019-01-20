import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu'
import About from '../Pages/about'
import { Link } from 'react-router-dom'

const styles = {
    list: {
        width: 250,
        fontFamily: 'Roboto'
    },
    listItem: {
        color: 'inherit',
        paddingLeft: '25px',
        textDecoration: 'none',
    },
    listHeader: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        textDecoration: 'none',
        color: 'black'
    }
};

class TemporaryDrawer extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem>
                        <div>
                            <Link to="/About" className={classes.listHeader}>Tikken</Link>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem>
                        <div>
                            <Link to="/About" className={classes.listItem}>Обо мне</Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <Link to="/Projects" className={classes.listItem}>Проекты</Link>
                        </div>
                    </ListItem>
                    <ListItem>
                        <a href="https://docs.google.com/document/d/16u6f9S8C-E6Ysl2i1H94Ir5VecAksFzCsPXqEyMNSt0/edit#" target="blank" className={classes.listItem}>CV.doc</a>
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);