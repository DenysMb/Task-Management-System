import { useContext, useMemo } from "react";
import { styles } from "./Tags.styles";
import { TagEditor, Loader } from "../../components";
import { Tag, Trigger } from "../../models";
import { useTypes } from "../../hooks";
import { TagType } from "../../shared/constants";
import { capitalizeEveryWord } from "../../shared/utils";
import { AppContext } from "../../context/AppContext";

const TagElement = ({
  tag,
  type,
  trigger,
}: {
  tag: Tag;
  type?: TagType;
  trigger?: Trigger;
}) => {
  const { setTag, setIsTagEditorOpened } = useContext(AppContext);

  const openTagEditor = () => {
    if (setTag && setIsTagEditorOpened) {
      setTag(tag);
      setIsTagEditorOpened(true);
    }
  };

  return (
    <div data-testid="tag" css={styles.tag.card}>
      <div
        title={capitalizeEveryWord(trigger?.title || "No Trigger")}
        css={{ ...styles.tag.icon }}
        style={{ backgroundColor: `${trigger?.color}50` }}
      >
        {trigger?.icon}
      </div>
      <div css={styles.tag.info}>
        <h4 css={styles.tag.title}>{tag.title}</h4>
        <small title={type?.title} css={styles.tag.type}>
          {type?.title || "No Type"}
        </small>
      </div>
      <button css={styles.tag.button} onClick={openTagEditor}>
        Edit
      </button>
    </div>
  );
};

const Tags = () => {
  const { tags, triggers, setIsTagEditorOpened } = useContext(AppContext);

  const types = useTypes();

  const isContentReady = useMemo(() => !!tags && !!triggers, [tags, triggers]);

  const openTagEditor = () => {
    if (setIsTagEditorOpened) setIsTagEditorOpened(true);
  };

  return (
    <div data-testid="tags" css={styles.self}>
      <div css={styles.topbar.self}>
        <h1>Tags</h1>
        <button css={styles.topbar.button} onClick={openTagEditor}>
          New Tag
        </button>
      </div>

      <div css={styles.tags}>
        {tags && triggers && isContentReady ? (
          tags.map((tag) => (
            <TagElement
              key={tag.id}
              tag={tag}
              type={types.find((type) => type.id === tag.type)}
              trigger={triggers.find((trigger) => trigger.id === tag.trigger)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>

      <TagEditor />
    </div>
  );
};

export default Tags;
