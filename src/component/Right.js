import React from 'react'
import  styled from 'styled-components'

const Container=styled.div`
    margin: 120px 0px 0px 140px ;
`
const CardContainer=styled.div`
   border: 1px solid black ;
   height: 200px;
   width: 200px;
   text-align: center;
   background-color:lightgray;
`

const text={fontWeight:9}
const h1Style = {textAlign:'center', fontSize:'23px', fontSize:'34px', fontWeight:'6'}
const Right = (item) => {
  return (
    <Container>
      <h1 style={h1Style}>Card</h1>
      <CardContainer>
         <h1 style={text}>{item.data.Name}</h1>
         <h5 style={text}>price: Rs {item.data.Price}</h5>
         <h3 style={text}>Item Id {item.data.id}</h3>
      </CardContainer>
    </Container>
  )
}

export default Right
