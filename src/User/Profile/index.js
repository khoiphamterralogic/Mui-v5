import { Chip, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CompTextInfo = ({ title, info }) => {
  return (
    <Box sx={{ display: "flex", py: 1 }}>
      <Typography sx={{ fontWeight: "bold", mr: 1 }}>{title}</Typography>
      <Typography>{info}</Typography>
    </Box>
  );
};

const UserProfile = () => {
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
    </Box>
  );
};

export default UserProfile;
