import React from 'react';
import logo from './logo.svg';
import './App.css';

function App () {
  const testApi = () => {
    fetch('http://localhost:4000/api/test', { method: 'POST' })//此处的localhost需更换成具体的云服务器公网IP
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={testApi}>测试接口</button>
      </header>
    </div>
  );
}

export default App;