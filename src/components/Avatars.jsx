
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select } from 'antd';

const { Option } = Select;



const App  = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

return (
  <>

  <Space size={16} wrap>
    <Avatar onClick={showDrawer} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </Space>
   <Drawer
   title="Update your profile"
   width={720}
   onClose={onClose}
   open={open}
   styles={{
     body: {
       paddingBottom: 80,
     },
   }}
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
     <Row gutter={16}>
       <Col span={12}>
         <Form.Item
           name="education"
           label="Education"
           rules={[{ required: true, message: 'Please select an education' }]}
         >
           <Select placeholder="Please select an education">
             <Option value="xiao">10th</Option>
             <Option value="mao">Intermediate</Option>
              <Option value="mao">Graduation</Option>
                <Option value="mao">Post Graduation</Option>
                  <Option value="mao">Phd</Option>
           </Select>
         </Form.Item>
       </Col>
       <Col span={12}>
         <Form.Item
           name="type"
           label="Type"
           rules={[{ required: true, message: 'Please choose the type' }]}
         >
           <Select placeholder="Please choose the type">
             <Option value="private">Student</Option>
             <Option value="public">Techer</Option>
             <Option value="protected">Company</Option>

           </Select>
         </Form.Item>
       </Col>
     </Row>
     <Row gutter={16}>
       <Col span={12}>
         <Form.Item
           name="approver"
           label="Approver"
           rules={[{ required: true, message: 'Please choose the approver' }]}
         >
           <Select placeholder="Please choose the approver">
             <Option value="jack">Jack Ma</Option>
             <Option value="tom">Tom Liu</Option>
           </Select>
         </Form.Item>
       </Col>
       <Col span={12}>
         <Form.Item
           name="dateTime"
           label="DateTime"
           rules={[{ required: true, message: 'Please choose the dateTime' }]}
         >
           <DatePicker.RangePicker
             style={{ width: '100%' }}
             getPopupContainer={(trigger) => trigger.parentElement || document.body}
           />
         </Form.Item>
       </Col>
     </Row>
     <Row gutter={16}>
       <Col span={24}>
         <Form.Item
           name="description"
           label="Description"
           rules={[
             {
               required: true,
               message: 'please enter url description',
             },
           ]}
         >
           <Input.TextArea rows={4} placeholder="please enter url description" />
         </Form.Item>
       </Col>
     </Row>
   </Form>
 </Drawer>
 </>
)
};

export default App;