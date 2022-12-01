import React from "react";
import  {useState} from 'react';
import { Row, Col} from 'react-bootstrap'  
function CounterPage() {
let [countNum, setCount] = useState(0);
let increaseValaue = () => {
setCount((countNum += 1)); 
};
let decreaseValue = () => {
if (countNum === 0) {
alert("Let's stay positive, shall we?");
} else {
setCount((countNum -= 1)); 
}
};
let resetValue = () => {
setCount(0); 
};
return (  <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',backgroundColor: "grey",height: '100vh',

}} >
  <Col>
        <Row><button onClick={decreaseValue} style={{}}>-</button>
</Row>
        <Row><h1> {countNum} </h1>
</Row>
        <Row><button  onClick={increaseValaue}>+</button> 
</Row>
      </Col>

  </div>




)
}
export default CounterPage
