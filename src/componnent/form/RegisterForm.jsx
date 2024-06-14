/* eslint-disable react/prop-types */
import { FormControl } from "@mui/base/FormControl";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useRef, useState } from "react";
import { UserApi } from "../../service/userApi";
const RegisterForm = ({ onSwitch }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const userApi = new UserApi();

  const [isSamePassword, setIsSamePassword] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const ref = useRef(null);

  const handleSubmit = async () => {
    if (
      nameRef.current !== null &&
      emailRef.current !== null &&
      passwordRef.current !== null &&
      confirmPasswordRef.current !== null
    ) {
      if (passwordRef.current.value == confirmPasswordRef.current.value) {
        setFormData({
          username: nameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
        });
        setIsSamePassword(true);
      } else {
        setIsSamePassword(false);
        alert("erreur le password est différent: ", isSamePassword);
      }
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  useEffect(() => {
    if (isSamePassword) {
      console.log("formData", formData);
      userApi.register(formData);
    }
  }, [isSamePassword, formData]);

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
            height: "450px",
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
            Sign Up
          </Typography>
          <FormControl ref={ref}>
            <TextField
              placeholder="Write your name"
              inputRef={nameRef}
              value={name}
              onChange={handleName}
              sx={{
                width: "500px",
              }}
            />
            <TextField
              placeholder="Write your email"
              inputRef={emailRef}
              value={email}
              onChange={handleEmail}
              sx={{
                width: "500px",
                margin: "10px 0px 10px 0px",
              }}
            />
            <TextField
              placeholder="password"
              inputRef={passwordRef}
              value={password}
              onChange={handlePassword}
              sx={{
                width: "500px",
                margin: "0 0px 10px 0px",
              }}
            />
            <TextField
              placeholder="confirm password"
              inputRef={confirmPasswordRef}
              value={confirmPassword}
              onChange={handleConfirmPassword}
              sx={{
                width: "500px",
                margin: "0 0px 10px 0px",
              }}
            />

            <Button
              onClick={handleSubmit}
              sx={{
                width: "500px",
                height: "50px",
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              Sign Up
            </Button>
            <Button
              onClick={onSwitch}
              sx={{
                width: "500px",
              }}
            >
              Sign In
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Container>
  );
};

export default RegisterForm;
