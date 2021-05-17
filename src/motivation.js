import './motivation.css'; 

const Motivation = () => {
    return ( 
       <nav className="motivation">
           <div className="top-container">
           <div className="up" style=
           {{
            display:'flex',
            flexDirection:'row',
            justifyContent:"space-between"
           }}>
               <div><p className="motivation-title"> Motivation </p></div>
               <div className="side" style=
               {{
                   display:'flex',
                   flexDirection:'row',
                   justifyContent:"space-evenly"
               }}>
               <div><img src="mot-4" className="pic1" alt="Avatar"></img>
               <img src="mot-1.jpg" className="pic2" alt="Avatar"></img>
               <img src="mot-2.jpg" className="pic3" alt="Avatar"></img>
               <img src="mot-3.jpg" className="pic4" alt="Avatar"></img>

               </div>
               <div><button className="add">+</button></div>
               </div>
               
           </div>
           <div className="down" style=
           {{
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-around'

           }}>
               <div className="All"> All </div>
               <div className="Article"> Article </div>
               <div className="Podcast"> Podcast </div>
               <div className="Video">Video</div>
               <div className="Downloads"> Downloads </div>
               <div className="playall"><button className="playall-but">Play all</button></div>
           </div>
           </div>

           <div className="mid-container">
               <div className="all1"><p>Your 
                                        limitation
                                        it's only
                                        your
                                        imagination</p></div>
               <div className="all2"><p>Great things 
                                          never come from
                                          comfort zones.</p> </div>
                <div className="all3"><p>Dream it.
                                          Wish it.
                                          Do it.</p> </div>
                <div className="all4" style={{
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'space-around'
                }}><p>Stay focused.</p>
                                       <button className="all4-but">Read Articles </button> </div>
           </div>
           
       </nav> 
     );
}
 
export default Motivation;