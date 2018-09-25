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

const ListDrawer = ({ classes, isFetching, newsItems }) => {
  const { drawerPaper, toolbar } = classes;

  return (
    <Drawer variant="permanent" classes={{ paper: drawerPaper }}>
      <div className={toolbar} />
      {isFetching ? 
        <ProgressSpinner /> :
        <List>
          {newsItems && newsItems.map(item => <ListItem key={item.objectID} button>{item.title}</ListItem>)}
        </List>
      }
    </Drawer>
  );
}

ListDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  newsItems: PropTypes.array
};

export default withStyles(styles)(ListDrawer);
