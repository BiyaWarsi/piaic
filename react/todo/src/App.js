import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ParentComponent } from './ParentChild';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div className="App" style={{background: "green"}}>
        <h1 style={{marginTop: '5%'}}>App Component</h1>
        <ParentComponent h1={"Parent Heading From App"} childHeading={"1st Child Heading"}/>
        <ParentComponent h1={"Parent 2"} childHeading={"2ndddddddd"}/>
        <ParentComponent h1={"Parent 3"} childHeading={"33333333333333333rd"}/>
      </div>
    )
  }

}

export default App;
