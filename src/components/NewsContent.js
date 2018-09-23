import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ spacing, mixins }) => ({
  content: {
    flexGrow: 1,
    padding: spacing.unit * 3,
    minWidth: 0
  },
  toolbar: mixins.toolbar
});

const NewsContent = ({ classes }) => {
  const { content, toolbar } = classes;

  return (
    <div className={content}>
      <div className={toolbar} />
      <p>You think water moves fast? You should see ice.</p>
    </div>
  );
}

NewsContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsContent);