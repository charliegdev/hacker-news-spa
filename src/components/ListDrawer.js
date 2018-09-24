import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ProgressSpinner from "./ProgressSpinner";

const drawerWidth = 480;

const styles = ({ mixins }) => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: mixins.toolbar
});

const ListDrawer = ({ classes, isFetching }) => {
  const { drawerPaper, toolbar } = classes;

  return (
    <Drawer variant="permanent" classes={{ paper: drawerPaper }}>
      <div className={toolbar} />
      {isFetching ? 
        <ProgressSpinner /> :
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => <ListItem key={index} button>{`Tesla News ${index}`}</ListItem>)}
        </List>
      }
    </Drawer>
  );
}

ListDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool
};

export default withStyles(styles)(ListDrawer);
