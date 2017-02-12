import React from 'react';
import ReactDOM from 'react-dom';
import { Years } from './Years';
import songLyrics from '../songLyrics';
// const style = require('./styles.css')


class App extends React.Component {
  render() {
    return(
    <div>
      <div className="column column-12">
          <ul>
            <li>
              <img src="http://mnmpresents.com/wp-content/uploads/2010/07/bpLogo.jpg" />
            </li>
          </ul>
      </div>

      <Years />

        <div className="column column-12 footnote">
          <a href="mailto:MostafaSHabib@gmail.com">Questions and Site Issues can be sent to MostafaSHabib@gmail.com</a>
          <p>{ songLyrics[Math.floor(Math.random() * songLyrics.length)] }</p>
        </div>
    </div>
    )
  }
}
export { App };
