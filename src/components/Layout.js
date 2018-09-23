import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ zIndex, palette, spacing, mixins })  => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: zIndex.drawer + 1,
  }
});

const Layout = ({ classes, top, left, center }) => {
  const { root, appBar } = classes;

  return (
    <div className={root}>
      <nav position="absolute" className={appBar}>{top}</nav>
      <aside>{left}</aside>
      <main>{center}</main>
    </div>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  top: PropTypes.node.isRequired,
  left: PropTypes.node.isRequired,
  center: PropTypes.node.isRequired
};

export default withStyles(styles)(Layout);