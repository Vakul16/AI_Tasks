import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const SPONSERS_DATA = [
  {
    id: "1",
    name: "University of Florida",
    label: "University of Florida (12)",
  },
  {
    id: "2",
    name: "VA Office of Research and Development",
    label: "VA Office of Research and Development (11)",
  },
  {
    id: "3",
    name: "National Institute of Neurological Disorders and Stroke (NINDS)",
    label:
      "National Institute of Neurological Disorders and Stroke (NINDS) (9)",
  },
  {
    id: "4",
    name: "University of Alabama at Birmingham",
    label: "University of Alabama at Birmingham (7)",
  },
  {
    id: "5",
    name: "University of Colorado, Denver",
    label: "University of Colorado, Denver (7))",
  },
  {
    id: "6",
    name: "Vanderbilt University Medical Center",
    label: "Vanderbilt University Medical Center (7)",
  },
  {
    id: "7",
    name: "Washington University School of Medicine",
    label: "Washington University School of Medicine (7)",
  },
  {
    id: "8",
    name: "Xiangya Hospital of Central South University",
    label: "Xiangya Hospital of Central South University (7)",
  },
  {
    id: "9",
    name: "Rennes University Hospital (6)",
    label: "Rennes University Hospital (6)",
  },
  {
    id: "10",
    name: "Boston Scientific Corporation (5)",
    label: "Boston Scientific Corporation (5)",
  },
  {
    id: "11",
    name: "Cerevel Therapeutics, LLC (5)",
    label: "Cerevel Therapeutics, LLC (5)",
  },
  {
    id: "12",
    name: "Second Affiliated Hospital, School of Medicine, Zhejiang University (5)",
    label:
      "Second Affiliated Hospital, School of Medicine, Zhejiang University (5)",
  },
];
const Sponsers = () => {
  const [state, setState] = React.useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="sponsers-container">
      {SPONSERS_DATA.map((ele, index) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={state[index]}
              onChange={handleChange}
              name={`${ele.name}`}
              color="#0180a6"
            />
          }
          label={`${ele.label}`}
        />
      ))}
    </div>
  );
};

export default Sponsers;
