import React, { useEffect } from "react";
import { InputField } from "../components/InputField";
import { Form, Input, Button, Checkbox, DatePicker } from 'antd';
import { connect } from "dva";
import { Select } from 'antd';
import "./UserDetails.css";
const { Option } = Select;

const UserDetails = (props) => {
  console.log(props)
  const { user } = props
  const { colleges = []} = user;
  const onSearch = (e) => {
    console.log("hello",e)
    const { dispatch } = props;
    dispatch({
      type: 'user/getUserCollege',
      payload: {
        searchKey: e
      }
    })
  }
  return (
    <>
    <div className="userDetails">
        <Form onFinish={(data) => { console.log({ ...data, 'date-picker':data['date-picker'].format('YYYY-MM-DD')})}}>
          <InputField
            title="Full Name:"
            fieldName="name"
           />
          <InputField
            title="Address:"
            fieldName="address"
           />
          <Input.Group compact>
        <Form.Item
            label="College:"
            name="collegeName"
            rules={[{ required: true }]}
        >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a college"
              optionFilterProp="children"
              // onChange={onChange}
              // onFocus={onFocus}
              // onBlur={onBlur}
              onSearch={onSearch}
            // filterOption={(input, option) =>
            //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            // }
            >
              {
                colleges.map((item) => (
                  <Option key={item.name} value={item.name}>{item.name}</Option>
                ))
              }
            </Select>
          </Form.Item>
              <Form.Item name="date-picker" label="Date of Birth:">
                <DatePicker />
              </Form.Item>
            </Input.Group>
          <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
    </>
  )
}

export default connect(({ user }) => ({
  user,
}))(UserDetails);










// git remote add origin https://github.com/nadeemkhan02/user-details.git
// git branch - M main
// git push - u origin main