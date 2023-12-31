import "../style/style.css";
import "../style/mobile.css";
import "../style/tablet.css";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import { skills } from "../utils/data";

const SkillsPage = () => {
  return (
    <section id="Skills" className="main-container">
      <h1 className={"bold-text"}>
        Mina <span className="color-blue">Erfarenheter</span>
      </h1>

      <section className="box-column-50">
        <section>
          <h6>Utbildningar</h6>

          <p>Borås Yrkeshögskola</p>
          <p className="italic">Frontendutvecklare, React - Nuvarande</p>
          <p className="italic">Systemutvecklare .Net - Examen 06/23</p>
        </section>
        <section>
          <h6>Stack</h6>
          <Stack spacing={0.5} direction="row" useFlexGap flexWrap="wrap">
            {skills.map((x) => (
              <Chip
                label={x}
                variant="outlined"
                sx={{ marginInline: "0.5em", color: "rgb(236, 228, 228)" }}
              ></Chip>
            ))}
          </Stack>
        </section>
      </section>
    </section>
  );
};

export default SkillsPage;
