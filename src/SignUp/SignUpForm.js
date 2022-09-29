import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserDocument,
  createUserWithEmailPassword,
} from "../utils/firebase/firebase";

// const listInput = [
//   {
//     id: "fname",
//     label: "First Name",
//   },
//   {
//     id: "lname",
//     label: "Last Name",
//   },
//   {
//     id: "email",
//     label: "Email *",
//   },
//   {
//     id: "pass",
//     label: "Password *",
//   },
// ];

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(defaultFormValues);
  const { displayName, email, password } = formValues;
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { user } = await createUserWithEmailPassword(email, password);
      await createUserDocument(user, { displayName });
      setFormValues(defaultFormValues);
      navigate("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        "& input": {
          p: 1,
        },
      }}
    >
      {/* {listInput.map(({ id, label }) => (
        <TextField size="small" sx={{ m: 1 }} key={id} label={label} />
      ))} */}
      <TextField
        size="small"
        sx={{ m: 1 }}
        label="Full Name"
        type="text"
        name="displayName"
        onChange={handleChange}
        value={displayName}
      />
      <TextField
        size="small"
        sx={{ m: 1 }}
        label="Email"
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <TextField
        size="small"
        sx={{ m: 1 }}
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
      />

      <FormControlLabel
        sx={{ m: 0 }}
        control={<Checkbox defaultChecked />}
        label="I want to receive inspiration, marketing promotions and updates via email."
      />
      <LoadingButton
        loading={loading}
        sx={{ mt: 2 }}
        variant="contained"
        onClick={handleSubmit}
      >
        SIGN UP
      </LoadingButton>
    </Box>
  );
};

export default SignUpForm;
