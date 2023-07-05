import { styles } from "./Sidebar.styles";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../shared/constants";

const Sidebar = () => {
  return (
    <div css={styles.self}>
      <h4 css={styles.title}>Tag Management System</h4>

      <ul css={styles.menu}>
        {MENU_ITEMS.map((item) => (
          <li css={styles.menuItem} key={item.name}>
            <Link to={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
