import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { skills } from "../utils/data";

const SkillsPage = () => {
  return (
    <section
      id="Skills"
      className="main-container background-light border-blue"
    >
      <h1 className={"bold-text"}>Erfarenheter</h1>

      <section className="box-column-50">
        <section>
          <h6>Utbildningar</h6>

          <p>Borås Yrkeshögskola</p>
          <p className="italic">Frontendutvecklare, React - Nuvarande</p>
          <p className="italic">Systemutvecklare .Net - Examen 06/23</p>
        </section>
        <section>
          <h6>Stack</h6>
          <Stack direction="row" spacing={2}>
            {skills.map((x) => (
              <Chip label={x} variant="outlined" color="info"></Chip>
            ))}
          </Stack>
        </section>
      </section>
    </section>
  );
};

export default SkillsPage;
