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

const styles = {
    list: {
        width: 250,
    },
    listItem: {
        color: 'inherit',
        paddingLeft: '25px',
        textDecoration: 'none'
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
                        <a href="#" className={classes.listItem}>Обо мне</a>
                    </ListItem>
                    <ListItem>
                        <a href="#" className={classes.listItem}>Работы</a>
                    </ListItem>
                    <ListItem>
                        <a href="#" className={classes.listItem}>Контакты</a>
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