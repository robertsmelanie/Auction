
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/Components.css';
import Calc from '../components/Calc';
import FooterButtons from '../components/Footerbutton';
import BarnCatsImage from '../components/BarnCatsImage';

function Catcalc() {
    return (
        <>

            <main>
               {/* <div> */}
  <div className="title">
    <h1>
      Barn Cat Calculator - The Mighty Mouser
    </h1>
                    </div>
                    
  
    <div className="container">
      <div className="container1">
        <br />
        <div className="containertext">
            <div className="containerleft">
                <br />
                {/*<h1>Cat Age Calculator</h1>
          
                 </div>  */}
                <br />
                <Calc />
                
                            
                </div>
                <BarnCatsImage />
                {/* <BarnCatsImage className="size-cat-image" />               */}
        
      </div>
    </div></div>

               
            </main>


        </>




   
                        )
}

                        export default Catcalc;