import "antd/dist/antd.css";
import { Card, Col, Row, Button, Input } from "antd";
import { useState,useEffect } from "react";
import "./Card.css";


const UiCard = () => {
    const [inputtext,setinputtext]=useState(Number);
    const [amount,setamount]=useState(Number);
    const [showcard,setshowcard]=useState(false);

    useEffect(() => {
        if(Number(inputtext)<=0)
        {
            setshowcard(false)
        }
    }, [inputtext])
    const calculateHandler=()=>{   
        if(inputtext<=100)
        {
            let amt =inputtext*2.25;
            setamount(amt)
            setshowcard(true)
        }
        else if(inputtext<=150)
        {
            let amt =(100*2.25)+(inputtext-100)*2.75
            setamount(amt)
            setshowcard(true)
        }
        else if(inputtext<=200)
        {
            let amt= (100 *2.25) +
               (50 * 2.75) +
               (inputtext - 150) * 3.61;
               setamount(amt)
               setshowcard(true)
        }
        else if(inputtext<=500)
        {
            let amt= (100 *2.25) +
               (50 * 2.75) +
               (50 *3.61) +(inputtext-200)*6.67;
               setamount(amt)
               setshowcard(true)
        }
        else
        {
            let amt= (100 *2.25) +
               (50 * 2.75) +
               (50*3.61) * (300*6.67)+(inputtext-500)*7.71;
               setamount(amt)
               setshowcard(true)
        }
    }
    // console.log(amount);
    // console.log(amount);
    return(
  <div>
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Enter the number of units consumed" bordered={false}>
          <Input.Group compact>
            <Input onChange={(e)=>{setamount(0);setinputtext(0);setinputtext(Number(e.target.value))}}
              style={{
                width: "calc(100% - 200px)",
              }}
            />
            <Button onClick={()=>{setamount(0);calculateHandler()}} type="primary">Calculate</Button>
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
