import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#333",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    // backgroundColor: "red",
    // border: "1px solid black",
    fontFamily: "'Merriweather' !important",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  body1: {
    fontFamily: "'Merriweather' !important",
  },
  label: {
    color: "#333",
    borderRadius: 0,
    fontFamily: "'Merriweather'",
  },
}));

const Gender = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    male: false,
    female: false,
    any: false,
    telangana: false,
    maharashtra: false,
    delhi: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="gender-container">
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.body1}>States</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.container}>
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.label}
                  checked={state.telangana}
                  onChange={handleChange}
                  name="telangana"
                  color="primary"
                />
              }
              label="Telangana"
              style={{ fontFamily: "'Merriweather', serif" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.label}
                  checked={state.maharashtra}
                  onChange={handleChange}
                  name="maharashtra"
                  color="primary"
                  // style={{ color: "#0180a6" }}
                />
              }
              label="Maharashtra"
            />
            <FormControlLabel
              control={
                <Checkbox
                  className={classes.label}
                  checked={state.delhi}
                  onChange={handleChange}
                  name="delhi"
                  color="primary"
                />
              }
              classes={{ label: classes.label }}
              label="Delhi"
            />
          </AccordionDetails>
        </Accordion>

        <FormControlLabel
          control={
            <Checkbox
              className={classes.label}
              checked={state.male}
              onChange={handleChange}
              name="male"
              color="primary"
            />
          }
          label="Male only (2)"
          style={{ fontFamily: "'Merriweather', serif" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={classes.label}
              checked={state.female}
              onChange={handleChange}
              name="female"
              color="primary"
              // style={{ color: "#0180a6" }}
            />
          }
          label="Female only (3)"
        />
        <FormControlLabel
          control={
            <Checkbox
              className={classes.label}
              checked={state.any}
              onChange={handleChange}
              name="any"
              color="primary"
            />
          }
          label="Any (544)"
        />
      </div>
    </div>
  );
};

export default Gender;
