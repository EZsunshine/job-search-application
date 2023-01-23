import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "./api/axios";
import Login from "./Login";

const NAME_REGEX = /^[a-zA-Z]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
        employ.ease
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register(props) {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const email = data.get("email");
    const password = data.get("password");
    const v1 = NAME_REGEX.test(firstname);
    const v2 = NAME_REGEX.test(lastname);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(password);
    console.log(v1, v2, v3, v4);
    if (!v1 || !v2 || !v3 || !v4) {
      console.log("Invalid Entry");
      return;
    }
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    try {
      const response = await axios.post(
        "/register",
        JSON.stringify({ firstname, lastname, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      console.log(JSON.stringify(response?.data));

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 409) {
        console.log("Username Taken");
      } else {
        console.log("Registration Failed");
      }
    }
  };

  return (
    <>
      
      {success ? (
        <Login />
      ) : (
        <ThemeProvider theme={theme}>
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
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstname"
                      required
                      fullWidth
                      id="firstname"
                      label="First Name"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      name="lastname"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirm"
                      label="Confirm"
                      type="password"
                      id="confirm_password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <button
                      type="button"
                      onClick={() => props.onFormSwitch("login")}
                      style={{
                        background: "none",
                        fontSize: "15px",
                    color: "#3781DB",
                        border: "none",
                      }}
                    >
                      Already have an account? Sign in
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            
          </Container>
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
        </ThemeProvider>
      )}
      
    </>
  );
}
