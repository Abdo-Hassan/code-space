import React, { useState, Fragment } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [javascript, setJavascript] = useState('');
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
          language='xml'
          displayName='CSS'
          value={css}
          onChange={setCss}
        />
        <Editor
          language='xml'
          displayName='Javascript'
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className='pane'>
        <iframe
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
