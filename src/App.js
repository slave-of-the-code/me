import React from 'react';

import Home from 'pages/home/Home';
import ListBox from 'components/listBox/ListBox';

import './App.css';

const App = () => {
  return (
    <>
      <Home title="slave of the code">
        <ListBox listBox={['who am i', 'my short experience', 'github', 'skills']} />
      </Home>
      {/* <header className="header">
        <h1 className="title">slave of the code</h1>
      </header>

      <nav>
        <ul>
          <li>
            <div>
              <label for="wmi">who am i</label>
              <input type="checkbox" id="wmi"></input>
            </div>
          </li>
          <li>
            <div>
              <label for="mse">my short experience</label>
              <input type="checkbox" id="mse"></input>
            </div>
          </li>
        </ul>
      </nav>

      <section className="section">
        <article>
          <button className="button">examples</button>
          <br />
          <input placeholder="enter here..." type="text" className="input" />
        </article>
        <article>
          <button className="button">examples</button>
          <br />
          <pre>this is an example...</pre>
        </article>
      </section>

      <footer className="footer">
        <p>
          design by <strong>Me</strong>
        </p>
      </footer> */}
    </>
  );
};

export default App;
