import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/style.css";

const PageNotFound = () => {
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="main-row-100">
        <div className="aside-10"></div>
        <div className="main-column-80">
          <div className="main-row">
            <h1>PAGE NOT FOUND 404</h1>
          </div>
          <Footer></Footer>
        </div>
        <div className="aside-10"></div>
      </div>
    </div>
  );
};

export default PageNotFound;
