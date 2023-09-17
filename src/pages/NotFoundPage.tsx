import { Container, Paper, Typography } from "@mui/material";
import NavBar from "../components/NavBar";

const PageNotFound = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container"}>
          <p className={"bold-text red"}>PAGE NOT FOUND 404</p>
        </div>
      </Paper>
    </Container>
  );
};

export default PageNotFound;
