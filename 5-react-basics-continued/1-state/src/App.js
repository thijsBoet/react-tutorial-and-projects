// state, this.setState = hold/access/change data of components
// props = read only

// named and default import/export
// only one default export per file
import React, {Component} from 'react';
// imported selected variables and object
import {name, age, person} from './data';
// default import can be named anything
import Banner from './components/Header/Banner'
// imported wildcard must use data.name data.job
import * as data from './data'

// functional component use when state is NOT needed

// const App = () => (
//   <section>
//     <Banner/>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//     <p>{person.age}</p>
//   </section>
// )

// class based component use when state is needed

// class App extends Component {
//   render() {
//     return (
//       <section>
//         <h1>APP</h1>
//       </section>
//     );
//   }
// }

import Booklist from './Booklist';

const App = () => (
  <section>
    <Booklist/>
  </section>
);

export default App;