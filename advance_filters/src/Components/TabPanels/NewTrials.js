import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const NewTrials = () => {
  const [state, setState] = React.useState({
    updated: false,
    new: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="accepts-container">
      <FormControlLabel
        control={
          <Checkbox
            checked={state.updated}
            onChange={handleChange}
            name="updated"
            color="primary"
          />
        }
        label="Updated trials (41)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.new}
            onChange={handleChange}
            name="new"
            color="primary"
          />
        }
        label="New trials (17)"
      />
    </div>
  );
};

export default NewTrials;
