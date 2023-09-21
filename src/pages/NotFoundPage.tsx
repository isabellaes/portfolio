import { Container, Paper } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const PageNotFound = () => {
  return (
    <Container>
      <Paper elevation={16}>
        <NavBar></NavBar>
        <div className={"container"}>
          <p className={"bold-text red"}>PAGE NOT FOUND 404</p>
        </div>
        <Footer></Footer>
      </Paper>
    </Container>
  );
};

export default PageNotFound;
