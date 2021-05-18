import './main.css';
 import MAN from "./man4.jpg"
import ROK from "./rocket.jpg"

const Main = () => {
    return ( 
      <nav className="main">
        <div className="top-container" style=
        {{
          display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
        }}>
          <div className="icon"> B </div>
          
          <div className="pics" style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            
          }}> 
          { <div className="img" ><img src={MAN} alt="Avatar" className="man-img"/></div> }
          <div className="name"><p> Anand Agarwal <br />Anand.a@bk.com </p>
                              
       </div>
          </div>
        </div>
        
        <div className="middle-container" style={{
            display:'flex',
            flexDirection:'column',
          }}>
             <div className="main-nav" id="mot"> Motivation</div>
             <div className="main-nav" id="prod" style={{
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-between',
               alignItems: 'center'
             }}> 
                <div id="prod-title">Productivity</div>
                <button className="prod-but">New</button>
              </div>
             <div className="main-nav" id="design">Design </div>
             <div className="main-nav" id="Study"> Study </div>
        </div>
        <div className="bottom-container" style=
        {{
          display:'flex',
              flexDirection:'column',
              justifyContent:'space-between'
        }}>
          <div className="bottom-box" style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
            <div><img src={ROK} className="rocket" alt="Avatar"></img></div>
            <div className="see-plan" style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-evenly'
            }}>
            <div><p className="content">Pro account is more powerful. Get 30% off.</p></div>
            <div><button className="plan"> See Plan </button></div>
            </div>
            </div>
            <div className="logout" style=
            {{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
              <div><p className="log-text">Logout</p></div>
              <div><button className="log-but"> + </button></div>
            </div>
          </div>
        
      </nav>
     );
  }
   
  export default Main;