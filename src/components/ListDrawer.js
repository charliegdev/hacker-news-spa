import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

const drawerWidth = 240;

const styles = ({ mixins }) => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: mixins.toolbar
});

const ListDrawer = ({ classes }) => {
  const { drawerPaper, toolbar } = classes;

  return (
    <Drawer variant="permanent" classes={{ paper: drawerPaper }}>
      <div className={toolbar} />
      <List>News One</List>
      <List>News Two</List>
      <List>News Three</List>
      <List>News Four</List>
    </Drawer>
  );
}

ListDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListDrawer);
