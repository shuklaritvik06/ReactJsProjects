import React, { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

export default function App() {
  const [html, setHtml] = useLocalStorage("html","");
  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(` 
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
        `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js, srcDoc]);
  return (
    <>
      <div className="area coding_area">
        <CodeEditor
          language="xml"
          displayName="HTML"
          onChange={setHtml}
          value={html}
          id="html"
        />
        <CodeEditor
          language="css"
          displayName="CSS"
          onChange={setCss}
          value={css}
          id="css"
        />
        <CodeEditor
          language="javascript"
          displayName="JS"
          onChange={setJs}
          value={js}
          id="js"
        />
      </div>
      <div className="area">
        <iframe
          title="output"
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          className="output-screen"
          id="iframe"
        />
      </div>
    </>
  );
}
