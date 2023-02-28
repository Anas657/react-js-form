import { useEffect } from "react";

function UseEffect() { 
  
const LoadData = (n, a, userinfo) => {
  console.log('name:----->', n);
  console.log('age:----->', a);
  
  console.log('userinfo:----->', userinfo);


}


  useEffect(() => {

const name = "Anas";
const age = 13;


const data = {
name: name,
age: age,
};

LoadData(name, age, data);

}, [])  

  return (
    <main>
     <h1>Test 2</h1>
      <h4>This is my Test 2 page</h4>    
    </main>
  );
  
};
export default UseEffect;