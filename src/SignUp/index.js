import { Box } from "@mui/system";
import HttpsIcon from "@mui/icons-material/Https";
import { Typography, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[600], mb: 1 }}>
          <HttpsIcon />
        </Avatar>
        <Typography>Sign Up</Typography>
      </Box>
      <Box
        sx={{ width: ["60%", "50%", "40%", "30%"], justifyContent: "center" }}
      >
        <SignUpForm />
      </Box>
    </Box>
  );
};

export default SignUp;
