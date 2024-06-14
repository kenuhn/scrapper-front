/* eslint-disable react/prop-types */
import { FormControl } from "@mui/base/FormControl";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../App";
import { UserApi } from "../../service/userApi";

const LoginForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const authState = useContext(authContext);
  const passwordRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const nameRef = useRef(null);
  const userApi = new UserApi();
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handlenameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async () => {
    if (nameRef.current !== null && passwordRef.current !== null) {
      const name = nameRef.current.value;
      const password = passwordRef.current.value;
      const user = await userApi.login({ username: name, password: password });
      if (!user) {
        return alert("name ou mot de passe incorrect");
      }
      authState.setIsAuth(true);
      console.log(user.access);
      localStorage.setItem("token", JSON.stringify(user.access));
      setIsConnected(true);
    }
  };

  useEffect(() => {
    if (isConnected) {
      navigate("/homePage");
    }
  }, [isConnected, navigate]);
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: "600px",
            height: "400px",
            gap: "1px",
            backgroundColor: "white",
            color: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            gutterBottom
            sx={{ fontSize: "40px", fontWeight: "bold" }}
          >
            Sign In
          </Typography>
          <FormControl>
            <TextField
              placeholder="Write your name"
              inputRef={nameRef}
              value={name}
              onChange={handlenameChange}
              margin="normal"
              sx={{
                width: "500px",
              }}
            />
            <TextField
              placeholder="password"
              inputRef={passwordRef}
              value={password}
              onChange={handlePassword}
              margin="normal"
              sx={{
                width: "500px",
              }}
            />

            <Button
              onClick={handleSubmit}
              sx={{
                width: "500px",
              }}
            >
              login
            </Button>
            <Button
              onClick={onSwitch}
              sx={{
                width: "500px",
                height: "50px",
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              sign up
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginForm;
