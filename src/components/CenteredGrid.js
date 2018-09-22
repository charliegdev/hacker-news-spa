import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = ({ spacing, palette }) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: spacing.unit * 2,
    textAlign: "center",
    color: palette.text.secondary
  }
});

const CenteredGrid = ({ classes }) => {
  const { root, paper } = classes;

  return (
    <div className={root}>
      <Grid container spacing={8}>
        <Grid item xs={4}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);