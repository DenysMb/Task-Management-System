import { styles } from "./Loader.styles";

const Loader = () => {
  return (
    <div data-testid="loader" css={styles.self}>
      <div css={styles.spinner} />
    </div>
  );
};

export default Loader;
