import "antd/dist/antd.css";
import { Card, Col, Row, Button, Input } from "antd";
import { useState,useEffect } from "react";
import "./Card.css";


const UiCard = () => {
    const [inputtext,setinputtext]=useState(String);
    const [amount,setamount]=useState(Number);
    const [showcard,setshowcard]=useState(false);

    useEffect(() => {
        if(Number(inputtext)<=0)
        {
            setshowcard(false)
        }
    }, [inputtext])
    const calculateHandler=()=>{
        let val=Number(inputtext);
        if(val>=0 && val<=100)
        {
            setamount(Number(2.25*val))
        }
        else if(val>=100 && val<=149)
        {
            setamount(Number(2.75*val))
        }
        else if(val>=150 && val<=199)
        {
            setamount(Number(3.61*val))
        }
        else if(val>=200 && val<=499)
        {
            setamount(Number(6.67*val))
        }
        else
        {
            setamount(Number(7.71*val))
        }
        setshowcard(true);
        
    }
    console.log(inputtext);
    
    return(
  <div>
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Enter the number of units consumed" bordered={false}>
          <Input.Group compact>
            <Input onChange={(e)=>setinputtext(e.target.value)}
              style={{
                width: "calc(100% - 200px)",
              }}
            />
            <Button onClick={calculateHandler} type="primary">Calculate</Button>
          </Input.Group>
        </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
  </div>
  {showcard?(
     <div className="site-card-wrapper">
     <Row gutter={16}>
       <Col span={8}>
         <Card title="The amount that is to be paid is :" bordered={false}>
          {amount}
         </Card>
       </Col>
     </Row>
   </div>
  ):(
    null
  )}
  
  </div>
)};

export default UiCard;
