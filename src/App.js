import React from 'react';
import './App.css';
import Element from './Component/Element';
import ContextJson from './Component/context';
function App() {
  console.log(ContextJson)
  const Elements = ContextJson;
  const ComponetElement=()=>{
    return (
      ContextJson.map((element,index)=>{
          console.log(element);
            return(Element(element));
        })
      )
  }
ComponetElement().map((element)=>(console.log(element)));

const title = React.createElement('h1', {}, 'My First React Code');
  return (
    <React.Fragment>
      {ComponetElement().map((element)=>(element))}
    </React.Fragment>
  );
}

export default App;
