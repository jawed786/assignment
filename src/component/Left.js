import React from 'react'
import Items from './Items'
import  styled  from 'styled-components'
import Data from "../data";

const Heading=styled.h3`
   margin-left: 40px;
   margin-top:40px;
   font-weight:7;
  
`
const Ul=styled.ul`
   overflow: hidden;
   list-style-type: none;
   
   
`
const Left = ({setData}) => {

  return (
    <div>
      <Heading>list of items</Heading>
      <Ul>
        {Data.map((data) => <Items item={data} key={data.id} setData={setData} />)}
      </Ul>
    </div>
    )
  }

export default Left
