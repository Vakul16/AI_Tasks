import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PostData from "../JSONData2";
import TabPanelsNew from "./TabPanelsNew";
import TreeChecked2 from "../DisplayDynamically/TreeChecked";
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
export default function Filters() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [filterValue, setFilterValue] = React.useState({
    Level_1: PostData[0],
    Level_2: PostData[1],
    Portfolio: PostData[2],
  });
  console.log(PostData[0].details);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeState = (name, newValue) => {
    setFilterValue((prevState) => ({ ...prevState }));
  };
  console.log(filterValue);
  // console.log(PostData[0].details);
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
          {PostData.map(({ name, id }) => (
            <Tab
              classes={{
                wrapper: classes.wrapper,
                selected: classes.selected,
              }}
              label={`${name}`}
              {...a11yProps(id)}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <TabPanelsNew data={PostData[0].details} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabPanelsNew data={PostData[1].details} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabPanelsNew data={PostData[2].details} />
        </TabPanel>
      </div>
      <div className="buttons">
        <button className="btn-reset">Reset</button>
        <button className="btn-apply">Apply</button>
      </div>
    </>
  );
}
