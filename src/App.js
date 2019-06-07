import React from 'react';
import YearContainer from './components/YearComponent';
import SongContainer from './components/SongComponent';
import ShowContainer from './components/ShowComponent';
import songLyrics from './songLyrics';

// Changed this to a presentational/stateless component since is has no state or lifecycle hooks
// YearContainer will render its "connected" component
const App = () => (
  <div>
    <div className="column column-12">
      <ul>
        <li>
          <img src="http://mnmpresents.com/wp-content/uploads/2010/07/bpLogo.jpg" alt="Brothers Past Logo" />
        </li>
      </ul>
    </div>

    <div className="column column-12">
      <YearContainer />
      <SongContainer />
      <ShowContainer />
    </div>

    <div
      className="column column-12"
      style={{
        fontFamily: '"Arial Black", Gadget, sans-serif',
        fontSize: '15px',
        fontWeight: 'bold',
        padding: '10px',
      }}
    >
      <a href="mailto:MostafaSHabib@gmail.com">
        Questions and Site Issues can be sent to MostafaSHabib@gmail.com
      </a>
    </div>


    <p className="column column-12 BiscoLyrics">
      { songLyrics[Math.floor(Math.random() * songLyrics.length)] }
    </p>

  </div>
);

export default App;