import { useState, useCallback } from 'react';
import logo from './logo.png';
import { HeartFilled } from '@ant-design/icons';
import { Input } from 'antd';
import './App.css';

function App() {
  const { TextArea } = Input;
  const [text, setText] = useState('Escribe algo!');
  const onChange = useCallback((event) => {
    setText(event.target.value.replace(/[aeiou]/gi, 'i'));
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: '3rem' }}>
          Traductor Mimimi
        </p>
        <div className="App-container">
          <div style={{ height: '50%', wordBreak: 'break-word' }}>
            <p>{text}</p>
          </div>
          <TextArea onChange={onChange} placeholder="Escribe algo!" style={{ borderRadius: 8, fontSize: '1.2rem' }} rows={6} />
        </div>
      </div>
      <footer className="App-footer">
        <p>
          Made with
        </p>
        <HeartFilled style={{ color: 'red', marginLeft: '2px', marginRight: '2px', fontSize: '1.2rem' }} />
        <p>and lots of ☕</p>
      </footer>
    </div>
  );
}

export default App;
