import './main.css';

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
            justifyContent:'space-between'
          }}> 
          <div className="img"><img src="man1.jpg" alt="Avatar" /></div>
          <div className="name"><p> Anand Agarwal </p>
                                <p> Anand.a@bk.com
            </p></div>
          </div>
        </div>
        <div className="middle-container" style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
          }}>
             <div className="mot"> Motivation</div>
             <div className="prod" style={{
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-between'
             }}> 
             <div className="prod-title">Productivity</div>
             <div ><button className="prod-but">New</button></div>
              </div>
             <div className="design">Design </div>
             <div className="Study"> Study </div>
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
            <div><img src="rocket.jpg" className="rocket" alt="Avatar"></img></div>
            <div className="see-plan" style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'space-around'
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