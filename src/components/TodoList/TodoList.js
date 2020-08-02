import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

export const TodoComponent = () => {
  //const [items, setItems] = useState([]);

  const onFinish = values => {
    console.log('Success:', values);
  };

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} name="basic" onSubmit={onFinish}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
