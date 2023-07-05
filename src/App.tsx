import { Route, Routes } from "react-router-dom";
import { Home, Tags, Triggers } from "./pages";
import { styles } from "./App.styles";
import { Sidebar } from "./components";
import { AppContext } from "./context/AppContext";
import { Tag } from "./models";
import { useState } from "react";
import { TAG_TEMPLATE } from "./shared/constants";
import { useTags, useTriggers } from "./hooks";
import { ROUTES } from "./shared/routes";

// Exporting the routes here just to not need to mock a new one for tests
export const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.Home} element={<Home />} />
    <Route path={ROUTES.Tags} element={<Tags />} />
    <Route path={ROUTES.Triggers} element={<Triggers />} />
  </Routes>
);

function App() {
  const triggers = useTriggers();
  const [tags, setTags] = useTags();

  const [tag, setTag] = useState<Tag>(TAG_TEMPLATE);
  const [isTagEditorOpened, setIsTagEditorOpened] = useState<boolean>(false);

  const contextValue = {
    triggers,
    tags,
    setTags,
    tag,
    setTag,
    isTagEditorOpened,
    setIsTagEditorOpened,
  };

  return (
    <div css={styles.self}>
      <AppContext.Provider value={contextValue}>
        <Sidebar />

        <AppRoutes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
