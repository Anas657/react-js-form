import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner";
import Header from "../Header";
import Topbar from "../topbar";

function About() {

// const [orderTotal, setOrderTotal] = useState(50 + 100 + 100);
  
  
  // const ChangeStateHandler = () => {
    
  //   setOrderTotal(1000 + 250 + 140);
    
  //   };
            
        
  // const fetchDataHandler = (index, name) => {
  //     console.log("function triggered");
    
  // };
    
      // axios
      // .get('https://dummy.restapiexample.com/api/v1/employees')
      // .then((response) => {
      //   console.log("data:", response);  
      
      //         })
            
              // .catch((err) => {
                //     console.log(err);  
              
                //   });
              
              // };
              
  //             const testUsers = [
  //                 {
  //     "frist name": "Joy",
  //     "last name": "Mick",
  //     "full name": "Joy Mick",
  //     "age": "24",
  //     "study_in": "BS",
  //     "total_no_of_friends": "1500",
  //     "father_name": "John Johnson",
  //   },
  //   {
  //       "frist name": "John",
  //       "last name": "Doe",
  //     "full name": "John Doe",
  //     "age": "24",
  //     "study_in": "BS",
  //     "total_no_of_friends": "1500",
  //     "father_name": "John Johnson",
  //   },
  // ];
  
  // const [orderTotal, setOrderTotal] = useState(50 + 100 + 100);
  
  // const [activeTab, setActiveTab] = useState(1);
  
  // const [name, setName ] = useState("");
  // const changeTabHandler = (index, name) => {
  //   setName(name);
  //   setActiveTab(index);
  // };
  
  return (
    <main>
     <h1>This is About</h1>
    <Link to={'/'}>Visit Home</Link>
     {/* <h2>About</h2>
     <Banner title={"This is my About Page"} total={orderTotal}/>
     <Topbar/>
     <Header/> */}

      {/* <h1>Welcome {testUsers["frist name"]}</h1> */}
      
      {/* {testUsers.map((User) => {
        return <div>
          <h4>{User["frist name"]} {User["last name"]}</h4>
          <p>age: {User.age} </p> <p>study in: {User.study_in} </p>

          <hr />
        </div>

      })} */}

       {/* <h1>About {name}</h1> */}

      {/* <div className={"Tablist"}>
        <ul>
          <li>
            <button onClick={() => changeTabHandler(1, "Anas")}>Tab 1</button>
          </li>
          <li>
            <button onClick={() => changeTabHandler(2, "owais")}>Tab 2</button>
          </li>
          <li> 
            <button onClick={() => changeTabHandler(3, "rehman")}>Tab 3</button>
          </li>

          <li> 
            <button onClick={() => changeTabHandler(4, "ali")}>Tab 4</button>
          </li>
        
        </ul>
      </div> */}
        {/* <div className={"Tabcontent"}>
          {activeTab === 1 ? (
            <h4>Tab 1</h4>
            ) : activeTab === 2 ? (
              <h4>Tab 2</h4>
            ) : activeTab === 3 ? (
              <div className={"Tab Tab3"}>           
              <h4>Tab 3</h4>
              </div>
            ) : activeTab === 4 ? (
              <div className={"Tab Tab4"}>
              <h4>Tab 4</h4>
          </div>

           ) : (
            
            <h3>Tab 1 is not selected</h3>      
          )}
        
        </div> */}



       {/* <button onClick={fetchDataHandler}>Fetch Data</button> */}
      <hr />
      
      {/* <button onClick={ChangeStateHandler}>Change State</button> */}

      
      {/* <Banner title={"This is my about page"} total={orderTotal} /> */}
      
    </main>
  );
};
export default About;