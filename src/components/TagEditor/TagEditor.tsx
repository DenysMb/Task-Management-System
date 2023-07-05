import React, { useContext, useMemo, useState } from "react";
import { styles } from "./TagEditor.styles";
import { useTypes } from "../../hooks";
import { AppContext } from "../../context/AppContext";
import { deleteTag, fetchTags, patchTag, postTag } from "../../api";
import { TAG_TEMPLATE } from "../../shared/constants";
import { Loader } from "../index";

const TagEditor = () => {
  const {
    triggers,
    setTags,
    tag,
    setTag,
    isTagEditorOpened,
    setIsTagEditorOpened,
  } = useContext(AppContext);

  const types = useTypes();

  const isEdit = useMemo(() => !!tag?.id, [isTagEditorOpened]); // eslint-disable-line react-hooks/exhaustive-deps

  const [isContentReady, setIsContentReady] = useState<boolean>(true);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    if (setTag && tag)
      setTag({ ...tag, [event.target.name]: event.target.value });
  };

  const createOrEditTag = async () => {
    if (tag) {
      if (isEdit) {
        await patchTag(tag);
      } else {
        await postTag(tag);
      }
    }

    fetchCloseAndClearTag();
  };

  const fetchCloseAndClearTag = async (noChangeWasMade?: boolean) => {
    if (!noChangeWasMade) {
      await getTags();
    }
    if (setTag && setIsTagEditorOpened) {
      setIsTagEditorOpened(false);
      setTag(TAG_TEMPLATE);
    }
  };

  const removeTag = async () => {
    if (tag) await deleteTag(tag);
    fetchCloseAndClearTag();
  };

  const getTags = async () => {
    setIsContentReady(false);

    await fetchTags().then((data) => {
      if (setTags) setTags(data || []);
    });

    setIsContentReady(true);
  };

  return isTagEditorOpened ? (
    <div data-testid="tag-editor" css={styles.self}>
      <div css={styles.card}>
        {isContentReady ? (
          <>
            <div css={styles.topbar.self}>
              <h1>{isEdit ? "Edit" : "Create"} Tag</h1>

              <div css={styles.topbar.buttons}>
                {isEdit && (
                  <button css={styles.topbar.button} onClick={removeTag}>
                    Remove
                  </button>
                )}

                <button
                  css={styles.topbar.button}
                  onClick={() => fetchCloseAndClearTag(true)}
                >
                  Close
                </button>
              </div>
            </div>

            <div>
              <small>Tag name:</small>
              <input
                type="text"
                name="title"
                aria-label="title"
                css={styles.input}
                value={tag?.title || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <small>Tag trigger:</small>
              <select
                css={styles.select}
                value={tag?.trigger || "1"}
                name="trigger"
                aria-label="trigger"
                onChange={handleChange}
              >
                {triggers?.map((trigger) => (
                  <option
                    key={trigger.id}
                    value={trigger.id}
                    css={styles.option}
                  >
                    {trigger.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <small>Tag type:</small>
              <select
                css={styles.input}
                value={tag?.type || "1"}
                name="type"
                aria-label="type"
                onChange={handleChange}
              >
                {types.map((type) => (
                  <option key={type.id} value={type.id} css={styles.option}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>

            <div css={styles.textareaSection}>
              <small>Tag content:</small>
              <textarea
                css={styles.textarea}
                value={tag?.content || ""}
                name="content"
                aria-label="content"
                onChange={handleChange}
              />
            </div>

            <button css={styles.button} onClick={createOrEditTag}>
              {isEdit ? "Edit" : "Create"}
            </button>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  ) : null;
};

export default TagEditor;
