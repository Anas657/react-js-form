import Banner from "../Banner";
import Header from "../Header";
import Topbar from "../topbar";
import { Link } from "react-router-dom";

function Home() {
    return(

        <main>
        <h2>Home</h2>
        <Link to={'/About'}>Visit About</Link>
        <Topbar />    
        <Header/>
        <Banner title={"This is my Home Page"}/>    
        
        {/* <div className={"menubar"}>This is my Menu Bar</div> */}
          {/* <div id={"content"}>
          
             <div id={"category_menu"}></div>
             <div id={"banners_area"}></div>
         
         </div> */}
        </main>
         
    );
}

export default Home;