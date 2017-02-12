import React from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';
import songLyrics from './songLyrics';
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






class Years extends React.Component {

  constructor() {
    super();
  }


  pickYear(year, row) {

    // we HAVE to handle requests on the back end because of CORS
    fetch(`./years?year=${year}`)
    .then(response => response.json()).then(json => {
      console.log(json);
    });

    // fetch('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ 2001 +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ 15 +'&page=1&output=json')
    // .then(function(response) {
    //   console.log(response); // "opaque"
    //   })

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ 2001 +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ 15 +'&page=1&output=json');
    // xhr.responseType = 'json';
    //
    // xhr.onload = function() {
    //   console.log(xhr.response);
    // };
    //
    // xhr.onerror = function() {
    //   console.log("Booo");
    // };
    //
    // xhr.send();

  }

  //     const request = new Request('https://archive.org/advancedsearch.php?q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK', {
  //     	method: 'GET',
  //     	mode: 'no-cors',
  //     	redirect: 'follow',
  //     	headers: new Headers({
  //     		'Content-Type': 'application/json'
  //     	})
  //     });
  //
  // fetch(request).then(function(response) {
  //   console.log(response);
  // });


        // method: "GET",
        // mode: "no-cors",
        // headers: {
        //   'Access-Control-Allow-Origin': 'https://archive.org/advancedsearch.php'
        // }
        // ,
        // body: 'q=BrothersPast,%20year:'+ year +'&fl%5B%5D=year&fl%5B%5D=date&fl%5B%5D=identifier,title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows='+ row +'&page=1&output=json&callback=JSONP_CALLBACK'
      // ).then(response => {
      //   console.log(response);
      // })



      // ((res: Response) => {
      //   // subscribe also allows us to change observable to JSON
      //   this.shows = res.json();
      //   console.log(this.shows);
      //   // grabs and attaches filtered data correct
      //   this.showList = this.shows.response.docs
      //   console.log(this.showList)
      //
      // })

  render() {
    return (
      <div>
        <div className="column column-12">
          <div className="yearButtons">
          <p>Select Year</p>
            <a href="#/">
                <button onClick={ this.pickYear.bind(this, 2001, 15) } >2001</button>
                <button onClick={ this.pickYear } >2002</button>
                <button>2003</button>
                <button>2004</button>
                <button>2005</button>
                <button>2006</button>
                <button>2007</button>
                <button>2008</button>
                <button>2009</button>
                <button>2010</button>
                <button>2011</button>
                <button>2012</button>
                <button>2013</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export { Years }
