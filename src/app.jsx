import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import MenuBar from "./components/menuBar.jsx"
import ContentContainer from "./components/contentContainer.jsx"

class App extends React.Component {	
  render() {
    return (
      <>
      <MenuBar/> hello
      
      <ContentContainer/> FUCK
     
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
