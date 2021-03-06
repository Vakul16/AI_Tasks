import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Gender from "./TabPanels/Gender";
import Phase from "./TabPanels/Phase";
import StudyType from "./TabPanels/StudyType";
import Sponsers from "./TabPanels/Sponsers";
import AcceptsHealthy from "./TabPanels/AcceptsHealthy";
import NewTrials from "./TabPanels/NewTrials";
import PostData from "../JSONData";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: "70%",
    color: "#333",
    fontFamily: "'Merriweather', serif",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginTop: "40px",
    marginBottom: "40px",
    // backgroundColor: "green",
    height: "fit-content",
  },
  wrapper: {
    textAlign: "left",
    display: "block",
    color: "#333",
    // backgroundColor: "#edfbff",
    textTransform: "capitalize",
    fontSize: "1rem",
    fontFamily: "'Merriweather', serif",
  },
  selected: {
    backgroundColor: "#edfbff",
  },
}));

const TAB_DATA = [
  { id: 0, label: "Gender" },
  { id: 1, label: "Phase" },
  { id: 2, label: "Study Type" },
  { id: 3, label: "Sponsors" },
  { id: 4, label: "Accepts healthy volunteers" },
  { id: 5, label: "New/Updated Trials" },
];

export default function AdvanceFilters() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <h3 className="heading">Advance Filters</h3> */}
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{
            style: {
              left: 0,
              transition: "none",
              borderLeft: " 1px solid #0180a6",
              backgroundColor: "#0180a6",
            },
          }}
        >
          {TAB_DATA.map(({ label, id }) => (
            <Tab
              classes={{
                wrapper: classes.wrapper,
                selected: classes.selected,
              }}
              label={`${label}`}
              {...a11yProps(id)}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <Gender />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Phase />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StudyType />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Sponsers />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <AcceptsHealthy />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <NewTrials />
        </TabPanel>
      </div>
      {/* {PostData.map((data, index) => {
            return <h1>{data.name}</h1>;
          })} */}
      <div className="buttons">
        <button className="btn-reset">Reset</button>
        <button className="btn-apply">Apply</button>
      </div>
    </>
  );
}
