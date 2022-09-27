import { LoadingButton } from "@mui/lab";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";

const listInput = [
  {
    id: "fname",
    label: "First Name",
  },
  {
    id: "lname",
    label: "Last Name",
  },
  {
    id: "email",
    label: "Email *",
  },
  {
    id: "pass",
    label: "Password *",
  },
];

const SignUpForm = () => {
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
      {listInput.map(({ id, label }) => (
        <TextField size="small" sx={{ m: 1 }} key={id} label={label} />
      ))}
      <FormControlLabel
        sx={{ m: 0 }}
        control={<Checkbox defaultChecked />}
        label="I want to receive inspiration, marketing promotions and updates via email."
      />
      <LoadingButton sx={{ mt: 2 }} variant="contained">
        SIGN UP
      </LoadingButton>
    </Box>
  );
};

export default SignUpForm;
