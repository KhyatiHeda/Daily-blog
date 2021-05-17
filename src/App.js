import Main from './main';
import Motivation from './motivation';
import react from 'react';

function App() {
  return (
    <div className="App" style=
    {{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: 'rgba(0, 0, 0, 0.568)'
    }}>
     <div><Main /></div> 
     <div><Motivation /></div>
    </div>
  );
}

export default App;
