import React from 'react';
import { Row, Col, Button, Typography, Form, Input, Select } from 'antd';
import { useMediaQuery } from 'react-responsive';

import contactUsBg from '../../assets/contactUsBg.png';
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

function ContactUs({ darkMode }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  if (darkMode) {
    return (
      <>
        {isTabletOrMobile ? (
          <section
            style={{
              background: 'white',
            }}>
            <Row justify={'center'}>
              <img
                src={contactUsBg}
                style={{
                  width: '300px',
                  marginTop: '90px',
                }}
                alt='contactUsBg'
              />
            </Row>
            <Row justify={'center'}>
              {' '}
              <Typography.Title
                level={2}
                style={{
                  color: 'black',
                  marginTop: '30px',
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
                    <label>Name</label>
                  </Row>
                  <Row>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Row>
                </Form.Item>
                <Form.Item name='phone-number'>
                  <Row>
                    <label>Phone Number</label>
                  </Row>
                  <Row>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Row>
                </Form.Item>
                <Form.Item name='store-name'>
                  <Row>
                    <label>Store Name</label>
                  </Row>
                  <Row>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Row>
                </Form.Item>
                <Form.Item name='category'>
                  <Row>
                    <label>Category</label>
                  </Row>
                  <Row>
                    {' '}
                    <Input size='large' style={{ width: '280px' }} />
                  </Row>
                </Form.Item>
                <Row justify={'center'}>
                  {' '}
                  <Form.Item>
                    <Button type='primary' htmlType='submit' size='large'>
                      GET IN TOUCH
                    </Button>
                  </Form.Item>
                </Row>
              </Form>
            </Row>
          </section>
        ) : (
          <section className='header-shape'>
            <Row>
              <Col span={10}>
                <Row justify={'center'}>
                  <Typography.Title
                    level={1}
                    style={{
                      color: 'white',
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
                          <label style={{ color: 'white' }}>Name</label>
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
                          <label style={{ color: 'white' }}>Phone Number</label>
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
                          <label style={{ color: 'white' }}>Store Name</label>
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
                          <label style={{ color: 'white' }}>Category</label>
                        </Col>
                        <Col>
                          {' '}
                          <Input size='large' style={{ width: '280px' }} />
                        </Col>
                      </Row>
                    </Form.Item>
                    <Row justify={'start'}>
                      {' '}
                      <Form.Item>
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
                <div>
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
        )}
      </>
    );
  }
  return (
    <>
      {isTabletOrMobile ? (
        <section
          style={{
            background: 'white',
          }}>
          <Row justify={'center'}>
            <img
              src={contactUsBg}
              style={{
                width: '300px',
                marginTop: '90px',
              }}
              alt='contactUsBg'
            />
          </Row>
          <Row justify={'center'}>
            {' '}
            <Typography.Title
              level={2}
              style={{
                color: 'black',
                marginTop: '30px',
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
                  <label>Name</label>
                </Row>
                <Row>
                  {' '}
                  <Input size='large' style={{ width: '280px' }} />
                </Row>
              </Form.Item>
              <Form.Item name='phone-number'>
                <Row>
                  <label>Phone Number</label>
                </Row>
                <Row>
                  {' '}
                  <Input size='large' style={{ width: '280px' }} />
                </Row>
              </Form.Item>
              <Form.Item name='store-name'>
                <Row>
                  <label>Store Name</label>
                </Row>
                <Row>
                  {' '}
                  <Input size='large' style={{ width: '280px' }} />
                </Row>
              </Form.Item>
              <Form.Item name='category'>
                <Row>
                  <label>Category</label>
                </Row>
                <Row>
                  {' '}
                  <Input size='large' style={{ width: '280px' }} />
                </Row>
              </Form.Item>
              <Row justify={'center'}>
                {' '}
                <Form.Item>
                  <Button type='primary' htmlType='submit' size='large'>
                    GET IN TOUCH
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </Row>
        </section>
      ) : (
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
                    <Form.Item>
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
      )}
    </>
  );
}

export default ContactUs;
