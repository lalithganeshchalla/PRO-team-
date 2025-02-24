import React from 'react';
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd';


const ProfileUpdation = ({ open, onClose }) => {
  return (
    <Drawer
      title="Update your profile"
      width={720}
      onClose={onClose}
      open={open}
      extra={
        <Space>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onClose} type='primary'>
            Ok
          </Button>
        </Space>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please enter user name' }]}
            >
              <Input placeholder="Please enter user name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, message: 'Please enter Email' }]}
            >
              <Input
                style={{ width: '100%' }}
                addonAfter="gmail.com"
                placeholder="Please enter Email"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default ProfileUpdation;
