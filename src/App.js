import Main from './main';
import Motivation from './motivation';
import "./app.css"
import react from 'react';

function App() {
  return (
    <div className="App" style=
    {{
      display:'flex',
      flexDirection:'row',
      borderRadius:'25px',
      width : '90vw',
      margin : 'auto'
    }}>
     <div><Main /></div> 
     <div style={{
       background:"rgb(43, 46, 55)",
       borderRadius: "0px 20px 20px 0px"
    }}><Motivation /></div>
    </div>
  );
}

export default App;