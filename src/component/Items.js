import React from 'react'
import styled from 'styled-components'

const Li=styled.li`
   text-align: center;
   border-top:1px solid black;
   border-left:1px solid black;
   border-right:1px solid black;
   font-weight: 5;
   `

   const Button=styled.button`
        border:none;
        background: none;
	      color: inherit;
        cursor: pointer;
   `
const Items = ({item,setData}) => {
   
  return (
    <div>
      <Li><Button onClick={(e)=>{setData(item)}}>{item.Name} </Button></Li>
    </div>
  )
}

export default Items
