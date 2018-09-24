import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const styles = ({ breakpoints, shape, palette, spacing, transitions }) => {
  const { unit } = spacing;
  const white = palette.common.white;

  return {
    root: { flexGrow: 1 },
    grow: { flexGrow: 1 },
    title: {
      display: "none",
      [breakpoints.up("sm")]: { display: "block" }
    },
    search: {
      position: "relative",
      borderRadius: shape.borderRadius,
      backgroundColor: fade(white, 0.15),
      "&:hover": { backgroundColor: fade(white, 0.25) },
      marginRight: unit * 2,
      marginLeft: 0,
      width: "100%",
      [breakpoints.up("sm")]: {
        marginLeft: unit,
        width: "auto"
      }
    },
    searchIcon: {
      width: unit * 9,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      // There must be a better way than doing this 4 times...
      paddingTop: unit,
      paddingRight: unit,
      paddingBottom: unit,
      paddingLeft: unit * 10,
      transition: transitions.create("width"),
      width: "100%",
      [breakpoints.up("md")]: { 
        width: 180,
        "&:focus": { width: 230 } 
      }
    }
  };
};

const SearchAppBar = ({ classes, currentInput, onInputChange, onTopicSet }) => {
  const { root, grow, search, searchIcon, inputRoot, inputInput } = classes;
  return (
    <div className={root}>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit" className={grow}>Hacker News SPA</Typography>
          <div className={search}>
            <div className={searchIcon}><SearchIcon /></div>
            <form onSubmit={onTopicSet}>
              <Input
                placeholder="Search a Topic..."
                disableUnderline
                classes={{ root: inputRoot, input: inputInput }}
                onChange={onInputChange}
                value={currentInput}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  currentInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTopicSet: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchAppBar);