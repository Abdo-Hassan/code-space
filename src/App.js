import React, { useState, useEffect, Fragment } from 'react';
import Editor from './components/Editor';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [html, setHtml] = useLocalStorage(
    'html',
    `<link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
  
  <div class='container'>
    <h1>Code Space</h1>
    <h2>Online Code Editor</h2>
  </div>`
  );
  const [css, setCss] = useLocalStorage(
    'css',
    `body{
  font-family: 'Nunito', sans-serif;
  background-color : #222831;
}

.container{
  text-align : center;
  color  : #fff;
  font-size : 23px
}
    `
  );
  const [javascript, setJavascript] = useLocalStorage(
    'javascript',
    `//write your javasceipt here`
  );
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
        `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <Fragment>
      <div className='pane top-pane'>
        <Editor
          language='xml'
          displayName='HTML'
          value={html}
          onChange={setHtml}
        />
        <Editor
          language='css'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='javascript'
          displayName='Javascript'
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </Fragment>
  );
}

export default App;
