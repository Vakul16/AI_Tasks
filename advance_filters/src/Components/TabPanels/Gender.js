import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Gender = () => {
  const [state, setState] = React.useState({
    male: false,
    female: false,
    any: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="gender-container">
      <FormControlLabel
        control={
          <Checkbox
            checked={state.male}
            onChange={handleChange}
            name="male"
            color="primary"
          />
        }
        label="Male only (2)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.female}
            onChange={handleChange}
            name="female"
            color="primary"
          />
        }
        label="Female only (3)"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.any}
            onChange={handleChange}
            name="any"
            color="primary"
          />
        }
        label="Any (544)"
      />
    </div>
  );
};

export default Gender;
