import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#333",
    fontFamily: "'Merriweather', serif;",
  },
}));
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
    name: "Rennes University Hospital",
    label: "Rennes University Hospital (6)",
  },
  {
    id: "10",
    name: "Boston Scientific Corporation",
    label: "Boston Scientific Corporation (5)",
  },
  {
    id: "11",
    name: "Cerevel Therapeutics, LLC",
    label: "Cerevel Therapeutics, LLC (5)",
  },
  {
    id: "12",
    name: "Second Affiliated Hospital, School of Medicine, Zhejiang University",
    label:
      "Second Affiliated Hospital, School of Medicine, Zhejiang University (5)",
  },
  {
    id: "13",
    name: "The Cleveland Clinic",
    label: "The Cleveland Clinic (5)",
  },
  {
    id: "14",
    name: "University Hospital, Grenoble",
    label: "University Hospital, Grenoble (5)",
  },
  {
    id: "15",
    name: "Chinese University of Hong Kong",
    label: "Chinese University of Hong Kong (4)",
  },
  {
    id: "16",
    name: "University Hospital, Lille",
    label: "University Hospital, Lille (4)",
  },
  {
    id: "17",
    name: "University of California, San Francisco",
    label: "University of California, San Francisco (4)",
  },
  {
    id: "18",
    name: "Ain Shams University",
    label: "Ain Shams University (3)",
  },
  {
    id: "19",
    name: "Chang Gung Memorial Hospital",
    label: "Chang Gung Memorial Hospital (3)",
  },
  {
    id: "20",
    name: "Charite University, Berlin, Germany",
    label: "Charite University, Berlin, Germany (3)",
  },
  {
    id: "21",
    name: "Fondazione Don Carlo Gnocchi Onlus",
    label: "Fondazione Don Carlo Gnocchi Onlus (3)",
  },
  {
    id: "22",
    name: "InSightec",
    label: "InSightec (3)",
  },
  {
    id: "23",
    name: "Institut National de la Santé Et de la Recherche Médicale, France",
    label:
      "Institut National de la Santé Et de la Recherche Médicale, France (3)",
  },
  {
    id: "24",
    name: "KU Leuven",
    label: "KU Leuven (3)",
  },
  {
    id: "25",
    name: "Massachusetts General Hospital",
    label: "Massachusetts General Hospital (3)",
  },
  {
    id: "26",
    name: "NYU Langone Health",
    label: "NYU Langone Health (3)",
  },
  {
    id: "27",
    name: "Neuromed IRCCS",
    label: "Neuromed IRCCS (3)",
  },
  {
    id: "28",
    name: "Northwestern University",
    label: "Northwestern University (3)",
  },
  {
    id: "29",
    name: "Pacific Parkinson's Research Centre",
    label: "Pacific Parkinson's Research Centre (3)",
  },
  {
    id: "30",
    name: "Rutgers, The State University of New Jersey",
    label: "Rutgers, The State University of New Jersey (3)",
  },
  {
    id: "31",
    name: "Seoul National University Hospital",
    label: "Seoul National University Hospital (3)",
  },
  {
    id: "32",
    name: "Stony Brook University",
    label: "Stony Brook University (3)",
  },
  {
    id: "33",
    name: "University College, London",
    label: "University College, London (3)",
  },
  {
    id: "34",
    name: "University Hospital Inselspital, Berne",
    label: "University Hospital Inselspital, Berne (3)",
  },
  {
    id: "35",
    name: "University Hospital, Strasbourg, France",
    label: "University Hospital, Strasbourg, France (3)",
  },
  {
    id: "36",
    name: "University of Delaware",
    label: "University of Delaware (3)",
  },
  {
    id: "37",
    name: "University of Nebraska",
    label: "University of Nebraska (3)",
  },
  {
    id: "38",
    name: "University of Oxford",
    label: "University of Oxford (3)",
  },
  {
    id: "39",
    name: "University of Pennsylvania",
    label: "University of Pennsylvania (3)",
  },
  {
    id: "40",
    name: "University of Texas Southwestern Medical Center",
    label: "University of Texas Southwestern Medical Center (3)",
  },
  {
    id: "41",
    name: "ACADIA Pharmaceuticals Inc.",
    label: "ACADIA Pharmaceuticals Inc. (2)",
  },
  {
    id: "42",
    name: "AbbVie",
    label: "AbbVie (2)",
  },
  {
    id: "43",
    name: "Abbott Medical Devices",
    label: "Abbott Medical Devices (2)",
  },
  {
    id: "44",
    name: "Boston University Charles River Campus",
    label: "Boston University Charles River Campus (2)",
  },
  {
    id: "45",
    name: "Centre Hospitalier Régional d'Orléans",
    label: "Centre Hospitalier Régional d'Orléans (2)",
  },
  {
    id: "46",
    name: "China Medical University Hospital",
    label: "China Medical University Hospital (2)",
  },
  {
    id: "47",
    name: "Columbia University",
    label: "Columbia University (2)",
  },
  {
    id: "48",
    name: "Enterin Inc.",
    label: "Enterin Inc. (2)",
  },
  {
    id: "49",
    name: "Fondation Ophtalmologique Adolphe de Rothschild",
    label: "Fondation Ophtalmologique Adolphe de Rothschild (2)",
  },
  {
    id: "50",
    name: "Gazi University",
    label: "Gazi University (2)",
  },
  {
    id: "51",
    name: "Georgetown University",
    label: "Georgetown University (2)",
  },
  {
    id: "52",
    name: "Guangdong Provincial People's Hospital",
    label: "Guangdong Provincial People's Hospital (2)",
  },
  {
    id: "53",
    name: "H. Lundbeck A/S",
    label: "H. Lundbeck A/S (2)",
  },
  {
    id: "54",
    name: "Hospices Civils de Lyon",
    label: "Hospices Civils de Lyon (2)",
  },
  {
    id: "55",
    name: "Icahn School of Medicine at Mount Sinai",
    label: "Icahn School of Medicine at Mount Sinai (2)",
  },
  {
    id: "56",
    name: "Johns Hopkins University",
    label: "Johns Hopkins University (2)",
  },
  {
    id: "57",
    name: "Luye Pharma Group Ltd.",
    label: "Luye Pharma Group Ltd. (2)",
  },
  {
    id: "58",
    name: "Mahidol University",
    label: "Mahidol University (2)",
  },
  {
    id: "59",
    name: "McGill University Health Centre/Research Institute of the McGill University Health Centre",
    label:
      "McGill University Health Centre/Research Institute of the McGill University Health Centre (2)",
  },
  {
    id: "60",
    name: "Michael J. Fox Foundation for Parkinson's Research",
    label: "Michael J. Fox Foundation for Parkinson's Research (2)",
  },
  {
    id: "61",
    name: "National Taiwan University Hospital",
    label: "National Taiwan University Hospital (2)",
  },
  {
    id: "62",
    name: "National Yang Ming University",
    label: "National Yang Ming University (2)",
  },
  {
    id: "63",
    name: "Northwell Health",
    label: "Northwell Health (2)",
  },
  {
    id: "64",
    name: "Ohio State University",
    label: "Ohio State University (2)",
  },
  {
    id: "65",
    name: "Olaf Blanke",
    label: "Olaf Blanke (2)",
  },
  {
    id: "66",
    name: "Oregon Health and Science University",
    label: "Oregon Health and Science University (2)",
  },
  {
    id: "67",
    name: "Professor Lu Neurological Clinic",
    label: "Professor Lu Neurological Clinic (2)",
  },
  {
    id: "68",
    name: "Radboud University",
    label: "Radboud University (2)",
  },
  {
    id: "69",
    name: "Rigshospitalet, Denmark",
    label: "Rigshospitalet, Denmark (2)",
  },
  {
    id: "70",
    name: "Rush University Medical Center",
    label: "Rush University Medical Center (2)",
  },
  {
    id: "71",
    name: "Sheba Medical Center",
    label: "Sheba Medical Center (2)",
  },
  {
    id: "72",
    name: "Sunnybrook Health Sciences Centre",
    label: "Sunnybrook Health Sciences Centre (2)",
  },
  {
    id: "73",
    name: "Sunovion",
    label: "Sunovion (2)",
  },
  {
    id: "74",
    name: "Taipei Medical University Shuang Ho Hospital",
    label: "Taipei Medical University Shuang Ho Hospital (2)",
  },
  {
    id: "75",
    name: "Tel-Aviv Sourasky Medical Center",
    label: "Tel-Aviv Sourasky Medical Center (2)",
  },
  {
    id: "76",
    name: "The University of Texas Health Science Center, Houston",
    label: "The University of Texas Health Science Center, Houston (2)",
  },
  {
    id: "77",
    name: "UCB Biopharma SRL",
    label: "UCB Biopharma SRL (2)",
  },
  {
    id: "78",
    name: "University Health Network, Toronto",
    label: "University Health Network, Toronto (2)",
  },
  {
    id: "79",
    name: "University Hospital, Bordeaux",
    label: "University Hospital, Bordeaux (2)",
  },
  {
    id: "80",
    name: "University Hospital, Clermont-Ferrand",
    label: "University Hospital, Clermont-Ferrand (2)",
  },
  {
    id: "81",
    name: "University Hospital, Ghent",
    label: "University Hospital, Ghent (2)",
  },
  {
    id: "82",
    name: "University Hospital, Toulouse",
    label: "University Hospital, Toulouse (2)",
  },
  {
    id: "83",
    name: "University of Aarhus",
    label: "University of Aarhus (2)",
  },
  {
    id: "84",
    name: "University of Calgary",
    label: "University of Calgary (2)",
  },
  {
    id: "85",
    name: "University of Miami",
    label: "University of Miami (2)",
  },
  {
    id: "86",
    name: "University of Michigan",
    label: "University of Michigan (2)",
  },
  {
    id: "87",
    name: "University of Minnesota",
    label: "University of Minnesota (2)",
  },
  {
    id: "88",
    name: "University of Sao Paulo General Hospital",
    label: "University of Sao Paulo General Hospital (2)",
  },
  {
    id: "89",
    name: "University of Washington",
    label: "University of Washington (2)",
  },
  {
    id: "90",
    name: "Universitätsklinik für Neurologie, Innsbruck",
    label: "Universitätsklinik für Neurologie, Innsbruck (2)",
  },
  {
    id: "91",
    name: "Wake Forest University Health Sciences",
    label: "Wake Forest University Health Sciences (2)",
  },
  {
    id: "92",
    name: "Western University, Canada",
    label: "Western University, Canada (2)",
  },
  {
    id: "93",
    name: "Yonsei University",
    label: "Yonsei University (2)",
  },
  {
    id: "94",
    name: "zhangyuqing",
    label: "zhangyuqing (2)",
  },
  {
    id: "95",
    name: "AGIR à Dom",
    label: "AGIR à Dom (1)",
  },
  {
    id: "96",
    name: "Aarhus University Hospital",
    label: "Aarhus University Hospital (1)",
  },
  {
    id: "97",
    name: "Academisch Medisch Centrum - Universiteit van Amsterdam (AMC-UvA)",
    label:
      "Academisch Medisch Centrum - Universiteit van Amsterdam (AMC-UvA) (1)",
  },
  {
    id: "98",
    name: "Aleva Neurotherapeutics SA",
    label: "Aleva Neurotherapeutics SA (1)",
  },
  {
    id: "99",
    name: "Alzheimer's Light LLC",
    label: "Alzheimer's Light LLC (1)",
  },
  {
    id: "100",
    name: "Amoneta Diagnostics SAS",
    label: "Amoneta Diagnostics SAS (1)",
  },
];

const Sponsers = () => {
  const classes = useStyles();
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
      <div className={classes.root}>
        {SPONSERS_DATA.map((ele, index) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={state[index]}
                onChange={handleChange}
                name={`${ele.name}`}
                color="primary"
              />
            }
            label={`${ele.label}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
