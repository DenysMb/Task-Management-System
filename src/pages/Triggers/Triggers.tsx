import { useContext, useMemo } from "react";
import { styles } from "./Triggers.styles";
import { AppContext } from "../../context/AppContext";
import { Loader } from "../../components";

const Trigger = ({
  color,
  icon,
  text,
}: {
  color: string;
  icon: string;
  text: string;
}) => (
  <div css={styles.trigger.card} style={{ backgroundColor: `${color}50` }}>
    <div css={styles.trigger.icon}>{icon}</div>

    <h4 css={styles.trigger.title}>{text}</h4>
  </div>
);

const Triggers = () => {
  const { triggers } = useContext(AppContext);

  const isContentReady = useMemo(() => !!triggers, [triggers]);

  return (
    <div data-testid="triggers" css={styles.self}>
      <h1>Triggers</h1>

      <div css={styles.triggers}>
        {triggers && isContentReady ? (
          triggers.map((trigger) => (
            <Trigger
              key={trigger.id}
              color={trigger.color}
              icon={trigger.icon}
              text={trigger.title}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Triggers;
