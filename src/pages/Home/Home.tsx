import { useContext } from "react";
import { styles } from "./Home.styles";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../shared/routes";

const Home = () => {
  const { tags, triggers } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div css={styles.self}>
      <h1>Home</h1>

      <div css={styles.content}>
        <div
          css={styles.card}
          onClick={() => {
            console.log("TAGS WAS CLICKED");

            navigate(ROUTES.Tags);
          }}
        >
          <h2>Total Tags</h2>
          <h1>{tags?.length ?? "..."}</h1>
        </div>

        <div css={styles.card} onClick={() => navigate(ROUTES.Triggers)}>
          <h2>Total Triggers</h2>
          <h1>{triggers?.length ?? "..."}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
