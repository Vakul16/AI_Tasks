import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

export default function Phase() {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Gender</FormLabel> */}
      <RadioGroup
        // aria-label="gender"
        // name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="phase1"
          control={<Radio color="primary" />}
          label="Phase 1 (23)"
        />
        <FormControlLabel
          value="phase2"
          control={<Radio color="primary" />}
          label="Phase 2 (51)"
        />
        <FormControlLabel
          value="phase3"
          control={<Radio color="primary" />}
          label="Phase 3 (23)"
        />
        <FormControlLabel
          value="phase4"
          control={<Radio color="primary" />}
          label="Phase 4 (12)"
        />
        <FormControlLabel
          value="phase1/2"
          control={<Radio color="primary" />}
          label="Phase 1/2 (10)"
        />
        <FormControlLabel
          value="phase2/3"
          control={<Radio color="primary" />}
          label="Phase 2/3 (8)"
        />
        <FormControlLabel
          value="unknown"
          control={<Radio color="primary" />}
          label="Unknown (423)"
        />
      </RadioGroup>
    </FormControl>
  );
}
