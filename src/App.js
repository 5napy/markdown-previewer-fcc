import React, { useEffect } from "react";

import { marked } from "marked";
import "./App.css";

import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

import "prismjs/themes/prism-okaidia.css";



marked.setOptions({ // this is to highlight code in the preview (idk what it does)
  langPrefix: "language-",
    breaks: true

});


function App() {
  const [text, setText] = React.useState(`# Welcome to the Markdown Previewer (H1)

## Subheading example (H2)

This is a [link to example.com](https://example.com) — click it!

Here is some inline code: \`const pi = 3.14;\`

\`\`\`javascript
// Code block (JavaScript)
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("freeCodeCamp");
\`\`\`

- List item one
- List item two
  - Nested list item

> This is a blockquote.

![Placeholder](https://images.unsplash.com/photo-1650741917348-e20527aed703?q=80&w=1564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
You can also emphasize text — **this is bolded text**.`);


  useEffect(() => {
    Prism.highlightAll(); // highlight prism code after render
  }, [text]);

  return (
    <div className="container">
    <header className="header">
        <h1>Markdown Previewer</h1>
        <h3>By Gustavo B.</h3>
      </header>
      <div className="pane-container">
      <div className="pane">
        <h2 className="editor-title">Editor</h2>
        <textarea
          id="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="pane">
        <h2 className="pane-title">Preview</h2>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
        />
      </div>
      </div>
    </div>
  );
}

export default App;