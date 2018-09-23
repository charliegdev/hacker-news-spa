import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = ({ palette, spacing, mixins }) => ({
  content: {
    flexGrow: 1,
    backgroundColor: palette.background.default,
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
      <Typography noWrap>You think water moves fast? You should see ice.</Typography> 
    </div>
  );
}

NewsContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewsContent);