import React from 'react';
import { Row, Col, Button, Typography, Form, Input, Select } from 'antd';

import aboutUsBg from '../../assets/aboutUsBg.png';
// import aboutUs1 from '../../assets/aboutUs1.png';
import home3 from '../../assets/home3.png';
const { Option } = Select;
const { Paragraph } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AboutUs() {
  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  return (
    <section
      className='header-shape'
      style={{
        background: 'white',
      }}>
      <Row justify={'end'}>
        <Col span={12}>
          <Typography.Title
            level={1}
            style={{
              color: 'black',
              marginTop: '160px',
              marginRight: '80px',
            }}>
            Orderitto Helps You Build <br />A Successful Online Store
          </Typography.Title>
        </Col>
        <Col span={12}>
          {' '}
          <div
            style={
              {
                // background: 'white',
              }
            }>
            <img
              src={aboutUsBg}
              style={{
                width: '95%',
              }}
              alt='aboutUsBg'
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default AboutUs;
