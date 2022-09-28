import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  // signInWithGooglePopup,
  createUserDocument,
  // signInWithGoogleRedirect,
} from "../utils/firebase/firebase";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

//MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = () => {
  useEffect(() => {
    const response = getRedirectResult(auth);
    if (response) {
      const userDocRef = createUserDocument(response.user);
      console.log({ userDocRef });
    }
  }, []);

  // const logInGooglePopUp = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocument(user);
  //   console.log({ userDocRef });
  // };

  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center", py: 2 }}
    >
      <Paper
        sx={{
          width: ["90%", "80%", "60%", "40%"],
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          px: 5,
          "& .MuiTextField-root": {
            my: 1,
          },
          "& a": {
            textDecoration: "none",
            color: "rgb(145 85 253)",
          },
        }}
      >
        <Typography variant="h5">Welcome to Materio! 👋🏻</Typography>
        <Typography sx={{ pb: 3 }}>
          Please sign-in to your account and start the adventure
        </Typography>
        <TextField size="small" fullWidth label="Email" />
        <TextField size="small" fullWidth label="Password" type="password" />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            pb: 3,
          }}
        >
          <FormControlLabel
            sx={{ m: 0, "& span": { p: 0 } }}
            control={<Checkbox color="secondary" defaultChecked />}
            label="Remember me"
          />
          <Link>Forgot Password?</Link>
        </Box>
        <Button sx={{ mb: 3 }} variant="contained" fullWidth color="secondary">
          LOGIN
        </Button>
        <Typography>
          New on our platform? <Link to="/sign-up">Create an account</Link>
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            pb: 3,
            alignItems: "center",
            pt: 1,
          }}
        >
          <Divider sx={{ width: "45%" }} /> or
          <Divider sx={{ width: "45%" }} />
        </Box>
        <Box>
          <IconButton>
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton>
            <TwitterIcon color="primary" />
          </IconButton>
          <IconButton>
            <GitHubIcon color="inherit" />
          </IconButton>
          <IconButton>
            <GoogleIcon color="warning" />
          </IconButton>
        </Box>
        {/* <button onClick={logInGooglePopUp}>Sigin Google</button>
        <button onClick={signInWithGoogleRedirect}>Sigin Google</button> */}
      </Paper>
    </Box>
  );
};

export default SignIn;
