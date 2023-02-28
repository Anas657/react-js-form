import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../Banner";
import Header from "../Header";
import Topbar from "../topbar";

function Product() {

const params = useParams();
console.log("params: ", params);


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
              
  
  
  // const [orderTotal, setOrderTotal] = useState(50 + 100 + 100);
  
  // const [activeTab, setActiveTab] = useState(1);
  
  // const [name, setName ] = useState("");
  // const changeTabHandler = (index, name) => {
  //   setName(name);
  //   setActiveTab(index);
  // };
  
  return (
    <main>
     <h1>product</h1>
      <h4>This is my product page</h4>    
     <p>
      you are viewing product <strong>{params.productName}</strong>
      </p>   
    </main>
  );
};
export default Product;