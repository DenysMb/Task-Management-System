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

function App() {
  const triggers = useTriggers();
  const [tags, setTags] = useTags();

  const [tag, setTag] = useState<Tag>(TAG_TEMPLATE);
  const [isTagEditorOpened, setIsTagEditorOpened] = useState<boolean>(false);

  // I choose to user context here to make it simple.
  const contextValue = {
    triggers,
    tags,
    setTags,
    tag,
    setTag,
    isTagEditorOpened,
    setIsTagEditorOpened,
  };

  // By being a simple application, I see no need to create a complex router file to handle the routing.
  return (
    <div css={styles.self}>
      <AppContext.Provider value={contextValue}>
        <Sidebar />

        <Routes>
          <Route path={ROUTES.Home} element={<Home />} />
          <Route path={ROUTES.Tags} element={<Tags />} />
          <Route path={ROUTES.Triggers} element={<Triggers />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
