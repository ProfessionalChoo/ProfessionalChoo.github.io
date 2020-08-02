import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

export const TodoComponent = () => {
  const [items, setItems] = useState([]);

  const onFinish = values => {
    console.log('Success:', values);
    const newItems = items.concat(values.task);
    setItems(newItems);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <ul>
        {items.map((item, i) => (
          <li>{item}</li>
        ))}
      </ul>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} name="basic" onFinish={onFinish}>
        <Form.Item label="Tasks" name="task">
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
