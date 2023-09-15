import { Container, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

const PageNotFound = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <Typography>PAGE NOT FOUND 404</Typography>
      </Paper>
    </Container>
  );
};

export default PageNotFound;
