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
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    width: "70%",
    // fontSize: "1rem",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "fit-content",
  },
  wrapper: {
    textAlign: "left",
    display: "block",
    color: "#333",
    backgroundColor: "#edfbff",
    textTransform: "capitalize",
    fontSize: "1rem",
  },
}));

export default function AdvanceFilters() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
              backgroundColor: "#0180a6",
            },
          }}
        >
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="Gender"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="Phase"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="Study Type"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="Sponsors"
            {...a11yProps(3)}
          />
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="Accepts healthy volunteers"
            {...a11yProps(4)}
          />
          <Tab
            classes={{ wrapper: classes.wrapper }}
            label="New/Updated Trails"
            {...a11yProps(5)}
          />
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
      <div className="buttons">
        <button className="btn-reset">Reset</button>
        <button className="btn-apply">Apply</button>
      </div>
    </>
  );
}
