import React from 'react'
import background from "../assets/HomeLanding4.jpg"; 
import Navbar from '../pages/Navbar';
import styles from "./compStyles/Background.module.css"

export default function LandingPage() {
    return(
        <div className='container'>
        
            <article
              className={styles.article}
              style={{ backgroundImage: `url(${background})` }}
            >
                {/* <Navbar expand="lg"/> */}
              <p className={styles.header}>Engineering Agriculture for Evergreen Revolution</p>
            </article>
            </div>
          );
}



// import styles from "./Background.module.css"; 
// import background from "../../assets/img/background.png"; 



// const Background () =>{
//   return(
//     <article
//       className={styles.article}
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <h1 className={styles.header}>React Is Awesome</h1>
//     </article>
//   );
// };
// export default Background;