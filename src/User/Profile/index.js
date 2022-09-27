import { Chip, Divider, Paper, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

//Icon MUI
import LockIcon from "@mui/icons-material/Lock";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const CompTextInfo = ({ title, info }) => {
  return (
    <Box sx={{ display: "flex", py: 1 }}>
      <Typography sx={{ fontWeight: "bold", mr: 1 }}>{title}</Typography>
      <Typography>{info}</Typography>
    </Box>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//ex table

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const UserProfile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Box sx={{ width: ["30%"] }}>
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 1,
            px: 2,
          }}
        >
          <Box sx={{ py: 2 }}>
            <img
              alt="avatar"
              src="https://demos.themeselection.com/marketplace/materio-mui-react-nextjs-admin-template/demo-1/images/avatars/3.png"
            />
          </Box>
          <Typography variant="h6">Seth Hallam</Typography>
          <Chip color="secondary" label="Subscriber" />
          <Box sx={{ width: "100%" }}>
            <Typography variant="h6">Details</Typography>
            <Divider />
            <CompTextInfo title="Username:" info="@shallamb" />
            <CompTextInfo
              title="Billing Email:"
              info="shallamb@hugedomains.com"
            />
            <CompTextInfo title="Status:" info="Pending" />
            <CompTextInfo title="Role:" info="Subscriber" />
            <CompTextInfo title="Tax ID:" info="Tax-8894" />
            <CompTextInfo title="Contact:" info="+1 (234) 464-0600" />
            <CompTextInfo title="Language:" info="English" />
            <CompTextInfo title="Country:" info="Peru" />
          </Box>
        </Paper>
      </Box>
      <Box sx={{ width: "70%", px: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              "& button": {
                width: "25%",
                display: "flex",
                flexDirection: "row",
              },
              "& svg": {
                mr: 1,
                mt: 0.5,
              },
            }}
          >
            <Tab
              icon={<PersonOutlineIcon />}
              label="OVERVIEW"
              {...a11yProps(0)}
            />
            <Tab icon={<LockIcon />} label="SERCURITY" {...a11yProps(1)} />
            <Tab
              icon={<NotificationsNoneIcon />}
              label="NOTIFICATION"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <BasicTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
};

export default UserProfile;
