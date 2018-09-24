import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = { progress: { margin: "10vh auto 0 auto" }, };

const CircularIndeterminate = ({ classes }) => <CircularProgress className={classes.progress} size={100} />

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);