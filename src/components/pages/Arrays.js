
function Arrays() { 

const userData = [
  {
    first_name: "M Anas",
    last_name: "Ahmed",
    Field: "Working in front_End_Development",
    Company: "ILMYST.com",
  },

  {
    first_name: "M Anas",
    last_name: "Ahmed",
    Field: "Working in front_End_Development",
    Company: "ILMYST.com",
  },

  {
    first_name: "M Anas",
    last_name: "Ahmed",
    Field: "Working in front_End_Development",
    Company: "ILMYST.com",
  },
];    



const activeuser = {
  first_name: "M Anas",
  last_name: "Ahmed",
  Field: "Working in front_End_Development",
  Company: "ILMYST.com",

};

/* updating object */

activeuser ["Field"] = "Hello this is an Awesome"

console.log("activeuser:", activeuser);




/* updating Arrays */

console.log("01 userData:", userData);

userData[1] ['Company'] = "updated websites value";

console.log("02 userData:", userData);
  


return (
    <main>
     <h1>Arrays</h1>
    
    </main>
  );
  
};
export default Arrays;