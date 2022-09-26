import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "../Home";
import Navigation from "../NavigationBar";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import theme from "../theme";

function App() {
  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
