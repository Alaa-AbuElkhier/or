import React from 'react';
import { Row, Col, Button, Typography, Form, Input, Select } from 'antd';

import contactUsBg from '../../assets/contactUsBg.png';
import contactUs1 from '../../assets/contactUs1.png';
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

function ContactUs() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <section
      className='header-shape'
      style={{
        background: 'white',
      }}>
      <Row>
        <Col span={10}>
          <Row justify={'center'}>
            <Typography.Title
              level={1}
              style={{
                color: 'black',
                marginTop: '160px',
                marginRight: '80px',
              }}>
              Let's get in touch
            </Typography.Title>
          </Row>

          <Row justify={'center'}>
            {' '}
            <Form
              {...layout}
              form={form}
              name='control-hooks'
              onFinish={onFinish}>
              <Form.Item name='name'>
                <Row>
                  <Col>
                    {' '}
                    <label>Name</label>
                  </Col>
                  <Col>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item name='phone-number'>
                <Row>
                  <Col>
                    {' '}
                    <label>Phone Number</label>
                  </Col>
                  <Col>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item name='store-name'>
                <Row>
                  <Col>
                    {' '}
                    <label>Store Name</label>
                  </Col>
                  <Col>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item name='category'>
                <Row>
                  <Col>
                    {' '}
                    <label>Category</label>
                  </Col>
                  <Col>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Col>
                </Row>
              </Form.Item>
              <Row justify={'start'}>
                {' '}
                <Form.Item {...tailLayout}>
                  <Button
                    type='primary'
                    htmlType='submit'
                    size='large'
                    style={{
                      marginRight: '-125px',
                    }}>
                    GET IN TOUCH
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Row>
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
              src={contactUsBg}
              style={{
                width: '95%',
              }}
              alt='contactUsBg'
            />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default ContactUs;
