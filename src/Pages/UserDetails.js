import React, { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Form, Input, Button, Checkbox, DatePicker, Radio, Col, Row } from 'antd';
import { connect } from "dva";
import { Select } from 'antd';
import "./UserDetails.css";
import { Link } from "react-router-dom";
const { Option } = Select;

const UserDetails = (props) => {
  const [isOtherHobbies, setIsOtherHobbies] = useState(false)
  const { user } = props
  const { colleges = [] } = user;
  const onSearch = (e) => {
    const { dispatch } = props;
    dispatch({
      type: 'user/getUserCollege',
      payload: {
        searchKey: e
      }
    })
  }
  const handleSubmit = (data) => {
    const { user: { allUser }, dispatch, history } = props;
    const newUserId = allUser.length + 1
    const userDetails = { ...data, id: newUserId, 'dateOfBirth': data['dateOfBirth'].format('YYYY-MM-DD') }
    const allUserDetails = [...allUser]
    allUserDetails.push(userDetails)
    dispatch({
      type: "user/setState",
      payload: {
        allUser: allUserDetails,
      }
    }).then(() => {
      history.push("/")
    })
  }

  return (
    <>
      <div className="topBar"><Link to="/">&nbsp;&nbsp;<span>Go Back</span></Link></div>
      <div className="userDetails">
        <Form onFinish={handleSubmit}>
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
              style={{ width: "46%" }}
              label={<b>College</b>}
              name="collegeName"
              rules={[{ required: true, message: 'please select College' }]}
            >
              <Select
                showSearch
                placeholder="Select a college"
                optionFilterProp="children"
                onSearch={onSearch}
              >
                {
                  colleges.map((item) => (
                    <Option key={item.name} value={item.name}>{item.name}</Option>
                  ))
                }
              </Select>
            </Form.Item>
            <Form.Item style={{ marginLeft: "8%", width: "46%" }} name="dateOfBirth" label={<b>Date of Birth</b>} rules={[{ required: true, message: 'please enter Date of Birth' }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Input.Group>
          <Form.Item name="gender" label={<b>Gender</b>} rules={[{
            required: true, message: 'Please enter gender!'
          }]}>
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="hobbies" label={<b>Hobbies</b>} rules={[{
            required: true, message: 'Please enter Hobbies!'
          }]}>
            <Checkbox.Group>
              <Row>
                <Col span={8}>
                  <Checkbox value="Reading" style={{ lineHeight: '32px' }}>
                    Reading
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Gaming" style={{ lineHeight: '32px' }}>
                    Gaming
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Traveling" style={{ lineHeight: '32px' }}>
                    Traveling
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="Drawing" style={{ lineHeight: '32px' }}>
                    Drawing
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox onChange={(e) => { setIsOtherHobbies(e.target.checked) }} value="Other" style={{ lineHeight: '32px' }}>
                    Other
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          {isOtherHobbies &&
            <>
              <p style={{ marginBottom: "2px" }}><b>Other Hobbies</b></p>
              <Form.Item name="otherHobbies" rules={[{ required: true, message: 'please enter Other Hobbies' }]}>
                <Input.TextArea />
              </Form.Item>
            </>
          }
          <Button type="primary" htmlType="submit">+&nbsp;ADD USER</Button>
        </Form>
      </div>
    </>
  )
}
export default connect(({ user }) => ({
  user,
}))(UserDetails);










