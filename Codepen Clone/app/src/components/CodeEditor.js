import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled } from "react-codemirror2";
import "./CodeEditor.css";
import { FaExpandAlt } from "react-icons/fa"

export default function CodeEditor({
  language,
  displayName,
  value,
  onChange,
  id,
}) {
  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <>
      <div className="editor-container" id={id}>
        <div className="top-bar">
          <p>{displayName}</p>
          <button
            className="expand-button"
            onClick={() => {
                const editor = document.getElementById(id);
                if (editor.classList.contains("collapsed")) {
                    editor.classList.remove("collapsed");
                } else {
                    editor.classList.add("collapsed");
                }
            }}
          >
            <FaExpandAlt />
          </button>
        </div>
        <Controlled
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "dracula",
          }}
        />
      </div>
    </>
  );
}
