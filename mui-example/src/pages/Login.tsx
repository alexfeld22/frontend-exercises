import { Box, Container, Typography, TextField, Button } from "@mui/material";

export default function Login() {
    return (


        <Container sx={{ border: 2, my: "20px", p: "20px", width: "300px" }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography> Login Form </Typography>
            <TextField
              required
              id="login"
              label="Login"
              helperText="type login"
              sx={{ m: "20px" }}
            />
            <TextField
              required
              id="password"
              label="Password"
              helperText="type password"
              sx={{ m: "20px" }}
            />
  
            <Button variant="contained" sx={{ p: "5px" }}>
              <Typography>Submit</Typography>
            </Button>
          </Box>
        </Container>
    );
  }