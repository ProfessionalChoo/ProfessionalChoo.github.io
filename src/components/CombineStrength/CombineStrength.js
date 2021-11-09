import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, message, Row, Col, Modal } from 'antd';

const CombineStrengthComponent = ({ dispatch }) => {
        
    const [c1, setCohort1] = useState(0);
    const [c2, setCohort2] = useState(0);
    const [total, setTotal] = useState(0);
    const Cohort1Component = () => {
        return (
          <div>
            <h1>{c1}</h1>
            <Button onClick={() => setCohort1(c1 + 1)}>ADD</Button>
            <Button onClick={() => setCohort1(c1 - 1)}>SUBTRACT</Button>
          </div>
        );
      };

      const Cohort2Component = () => {
        return (
          <div>
            <h1>{c2}</h1>
            <Button onClick={() => setCohort2(c2 + 1)}>ADD</Button>
            <Button onClick={() => setCohort2(c2 - 1)}>SUBTRACT</Button>
          </div>
        );
      };

    const combine = async () => {
        console.log("combine", c1, c2)
        await dispatch({
          type: 'combinestrength/combine',
          payload: {
            cohort1: c1,
            cohort2: c2,
          },
          callback: response => {
            setTotal(response.total);
            console.log(response.total);
            message.success('combined');
          },
          error: () => {
            message.error('failed to combine');
          },
        });
      };
    
      return (
        <div style={{ textAlign: 'center' }}>
          <h1>Combine</h1>

          <Cohort1Component />
          <Cohort2Component />
          
          <br/>
          <h1>{total}</h1>

          <Button onClick={combine}>
          combine
          </Button>

        </div>
      );
}

export default connect(({ combinestrength }) => ({ combinestrength }))(CombineStrengthComponent);
