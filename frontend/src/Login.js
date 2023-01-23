import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { TextField, Button } from "@mui/material";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "./api/axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        employe.ease
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login(props) {
  const { setAuth } = useAuth();
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      setAuth({ email, password, accessToken });
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing email or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  return (
    <>
      <div style={{ margin: 30, textAlign: "center" }}>
        <Typography variant="h3" fontFamily="sans-serif" color="#1070E7">
          employ.ease
        </Typography>
        <Typography variant="h5" color="#444444">
          Find your next Career move in minutes, not hours.
        </Typography>
        <Typography color="#444444" fontSize="18">
          Our easy to use application system makes <br />
          your job search stress-free and efficient
        </Typography>
      </div>
      {success ? (
        navigate("/dashboard")
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Typography sx={{ textAlign: "center" }}>
                  By Clicking Agree & Join, you agree to the
                  <strong> employ.ease</strong>
                  <span style={{ color: "#3781DB" }}>
                    {" "}
                    User Agreement, Privacy
                  </span>
                  , and
                  <span style={{ color: "#3781DB" }}> Cookie Plicy</span>
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Agree and Join
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <button
                      onClick={() => props.onFormSwitch("register")}
                      style={{
                        background: "none",
                        fontSize: "15px",
                        color: "#3781DB",
                        border: "none",
                      }}
                    >
                      "Don't have an account? Sign Up"
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
      <img
        src={require("./image/image.png")}
        alt="people"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "20px",
          width: '80%'
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingLeft: '30px',
          }}
        >
          <span style={{fontFamily:"sans-serif", color:"#1070E7", fontSize: '30px'}} >
            employ.ease
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 2,
            justifyContent: 'center',
            alignItems: 'start',
            paddingLeft: '170px'
          }}
        >
          <Copyright  />
        </div>
      </div>
    </>
  );
}
