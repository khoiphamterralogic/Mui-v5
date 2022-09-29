import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserDocument,
  // signInWithGoogleRedirect,
  signInWithEmailPassword,
  signInWithGooglePopup,
} from "../utils/firebase/firebase";

//MUI Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { LoadingButton } from "@mui/lab";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { email, password } = formValues;
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await signInWithEmailPassword(email, password);
      setFormValues(defaultFormValues);
      if (res) {
        navigate("/");
      }
      console.log({ res });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case "auth/wrong-password": {
          setErr("Password is not correct!");
          break;
        }
        default: {
          console.log({ error });
        }
      }
    }
  };

  const logInGooglePopUp = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
    navigate("/");
  };

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
        <TextField
          size="small"
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          size="small"
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {err.length !== 0 && <Typography color="red">{err}</Typography>}
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
        <LoadingButton
          loading={loading}
          sx={{ mb: 3 }}
          variant="contained"
          fullWidth
          color="secondary"
          onClick={handleSubmit}
        >
          LOGIN
        </LoadingButton>
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
          <Divider sx={{ width: "45%" }} />
          or
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
          <IconButton onClick={logInGooglePopUp}>
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
