import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const AcceptsHealthy = () => {
  const [state, setState] = React.useState({
    no: false,
    yes: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="accepts-container">
      <FormControlLabel
        control={
          <Checkbox
            checked={state.no}
            onChange={handleChange}
            name="no"
            color="primary"
          />
        }
        label="No (418)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.yes}
            onChange={handleChange}
            name="yes"
            color="primary"
          />
        }
        label="Yes (132)"
      />
    </div>
  );
};

export default AcceptsHealthy;
