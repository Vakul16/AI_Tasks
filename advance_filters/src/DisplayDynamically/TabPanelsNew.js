import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Tree } from "react-rainbow-components";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const CheckBox = ({ label, value, handleChange }) => {
  const classes = useStyles();

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <FormControlLabel
      control={
        <Checkbox
          className={classes.label}
          checked={value}
          onChange={() => handleChange(label, value)}
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
// const TabPanelsNew = ({ data = [] }) => {
//   // const [childVisible, setChildVisiblity] = useState(false);
//   // const hasChild = (data) => (data.children ? true : false);
//   console.log(data);
//   return (
//     <div>
//       <ul>
//         {data.map((tree) => (
//           <TreeNode node={tree} />
//         ))}
//       </ul>
//     </div>
//   );
// };
const TabPanelsNew = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode node={tree} />
        ))}
      </ul>
    </div>
  );
};
const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.children ? true : false;
  console.log(node);
  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        )}

        <div className="col d-tree-head">
          <i className={`mr-1 ${node.icon}`}> </i>
          <input type="checkbox"></input>
          {node.label}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <TabPanelsNew data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default TabPanelsNew;
