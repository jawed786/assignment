import { useState } from "react";
import Left from "./component/Left";
import Right from "./component/Right";
import { styled } from "styled-components";


const MainContainer=styled.div`
   display: flex;
   
`
function App() {

   const [data,setData]=useState({"id":3,"Name":"Shirt 3","Price":150});
 
  
  return (
    <MainContainer>
      <Left setData={setData}/>
      <Right data={data}/>
    </MainContainer>
  );
}

export default App;
