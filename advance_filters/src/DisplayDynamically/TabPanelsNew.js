import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#333",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.9rem",
    // backgroundColor: "red",
    // border: "1px solid black",
    fontFamily: "'Merriweather', serif",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    display: "block",
    color: "red",
    // backgroundColor: "#edfbff",
    // textTransform: "capitalize",
    fontSize: "1rem",
    fontFamily: "'Merriweather', serif",
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
    fontFamily: "'Merriweather', serif",
  },
}));

const RadioButton = ({ name, value }) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      control={<Radio />}
      value={value}
      label={name}
      style={{ display: "flex" }}
    />
  );
};

const CheckBox = ({ label }) => {
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
    <FormControlLabel
      control={
        <Checkbox
          className={classes.label}
          checked={state.telangana}
          onChange={handleChange}
          // checked={true}
          color="primary"
        />
      }
      label={label}
      style={{ fontFamily: "'Merriweather', serif" }}
    />
  );
};

const AccordionBox = ({ name, details }) => {
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.container}>
        {details.map((data) => (
          <RadioButton name={data.name} value={data.value} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
const TabPanelsNew = ({ details }) => {
  const classes = useStyles();
  // const [state, setState] = React.useState({
  //   male: false,
  //   female: false,
  //   any: false,
  //   telangana: false,
  //   maharashtra: false,
  //   delhi: false,
  // });
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  console.log(details);
  return (
    <div className={classes.root}>
      {details.map((data) => {
        if (data.details.length > 0) {
          return <AccordionBox name={data.name} details={data.details} />;
        } else {
          return <CheckBox label={data.name} />;
        }
      })}
    </div>
  );
};
export default TabPanelsNew;
