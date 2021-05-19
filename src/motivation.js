import './motivation.css'; 
import man1 from './mot-1.jpg';
import man2 from './mot-2.jpg';
import man3 from './mot-3.jpg';
import man4 from './mot-4.jpg';
import but from './arrow1.png';
import { useState } from 'react';

const Motivation = () => {

    const[active, setactive]=useState("inactive");

    const HandleClick=()=>
    {
        setactive("active");
    }
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
                   justifyContent:"space-evenly",
                   alignItems : 'center'
               }}>
               <div><img src={man1} className="pic1" alt="Avatar"></img>
               <img src={man2} className="pic2" alt="Avatar"></img>
               <img src={man3} className="pic3" alt="Avatar"></img>
               <img src={man4} className="pic4" alt="Avatar"></img>
               

               </div>
               <div><button className="add">+</button></div>
               </div>
               
           </div>
           <div className="down" style=
           {{
               width: "80%",
               display:'flex',
               flexDirection:'row',
               justifyContent:'space-around',
               alignItems : 'center'

           }}>
               <div className="All" Onclick={HandleClick}> All </div>
               <div className="Article" Onclick={HandleClick}> Article </div>
               <div className="Podcast" Onclick={HandleClick}> Podcast </div>
               <div className="Video" Onclick={HandleClick}>Video</div>
               <div className="Downloads" Onclick={HandleClick}> Downloads </div>
               <div className="playall" Onclick={HandleClick}><button className="playall-but">Play all</button></div>
           </div>
           </div>

           <div className="mid-container">
               <div className="all1" style={{
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'space-around'
                }}><p>Your 
                                        limitation 
                                        it's only 
                                        your 
                                        imagination</p>
                                        <div className="all1-but"><svg className="all1-img" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white"/>
<path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#E475A2"/>
</svg></div></div>
               <div className="all2" style={{
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'space-around'
                }}><p>Great things 
                                          never come from 
                                          comfort zones.</p> 
                                          <div className="all2-but"><svg className="all2-img" width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 16.5V7.5L16 12L10 16.5Z" fill="white"/>
<path d="M10 16.5L16 12L10 7.5V16.5Z" fill="#E475A2"/>
</svg></div></div>
                <div className="all3"><p>Dream it. 
                                          Wish it. 
                                          Do it.</p> </div>
                <div className="all4" style={{
                   display:'flex',
                   flexDirection:'column',
                   justifyContent:'space-around'
                }}><p>Stay focused.</p>
                                       <button className="all4-but">Read Articles </button> </div>

                 <div className="all5"><p> Be creative </p></div>                
                 <div className="all6"></div>      
           </div>
           
       </nav> 
     );
}
 
export default Motivation;