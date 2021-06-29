import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const StudyType = () => {
  const [state, setState] = React.useState({
    interventional: false,
    observational: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="study-container">
      <FormControlLabel
        control={
          <Checkbox
            checked={state.interventional}
            onChange={handleChange}
            name="interventional"
            color="primary"
          />
        }
        label="Interventional (364)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.observational}
            onChange={handleChange}
            name="observational"
            color="primary"
          />
        }
        label="Observational (158)"
      />
    </div>
  );
};

export default StudyType;
