import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Button, message, Row, Col, Modal, Form, Input, Checkbox} from 'antd';

const CombineStrengthComponent = ({ dispatch }) => {

  const [combinedStrength, setCombinedStrength] = useState("")
  const [c1Str, setC1Str] = useState("")
  const [c2Str, setC2Str] = useState("")
  const [loading, setLoading] = useState(false);
  
  const combStr = async() =>{
    await dispatch({
      type: 'combinestrength/combine',
      payload: {
        cohort1: c1Str,
        cohort2: c2Str,
      },
      callback: response => {
        message.success("congrats");
        console.log(response);
        setCombinedStrength(response["report"])
        setLoading(false);
      },

      error: () => {
        message.error('failed');
      },
    });
  };
  
  useEffect(()=> {
    console.log(c1Str, c2Str)
    
  }, [c1Str,c2Str])

  const comb = () =>{
    console.log("test", c1Str, c2Str)
    setLoading(true)
    combStr()
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    setC1Str(values["str"]["C1"])
    setC2Str(values["str"]["C2"])
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    
    <div class="formWrapper">
      <div class="formTest">
      <Form
      name="message"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item name={['str', 'C1']} label="Cohort 1 Strength">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={['str', 'C2']} label="Cohort 2 Strength">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit Str
        </Button>
      </Form.Item>
    </Form>
      </div>
      <div>
      <Button onClick={ () => comb()} loading={loading}>
          Combine
        </Button>
        <h1>C1: {c1Str}</h1>
        <h1>C2: {c2Str}</h1>
        <h1>Combined: {combinedStrength}</h1>
      </div>
    </div>
    
  );
}

export default connect(({ combinestrength }) => ({ combinestrength }))(CombineStrengthComponent);
