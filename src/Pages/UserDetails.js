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
  const [editUser, setEditUser] = useState({ name: "", address: "" })
  const { user } = props;
  const { allUser } = user;
  const userId = props.match.params.id;

  useEffect(() => {
    if (userId) {
      const selectedUser = allUser.filter((item) => item.id == userId);
      setEditUser(selectedUser[0])
    }
  }, [])

  const { colleges = [] } = user;
  const onSearch = (e) => {                           //onChange function for College input field
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
    if (userId) {                                     //for editing the user details
      const editedUserId = userId;
      const editedUser = [{ ...data, id: editedUserId, 'dateOfBirth': data['dateOfBirth'].format('YYYY-MM-DD') }]
      console.log(editedUser)
      console.log(allUser)
      const editedUserDeatils = allUser.map(item => editedUser.find(val => val.id == item.id) || item);
      dispatch({
        type: "user/setState",
        payload: {
          allUser: editedUserDeatils,
        }
      }).then(() => {
        history.push("/")
      })
    } else {                                            //for adding new user details
      const newUserId = allUser.length + 1
      const userDetails = { ...data, id: newUserId, 'dateOfBirth': data['dateOfBirth'].format('YYYY-MM-DD') }
      const allUserDetails = [...allUser]
      allUserDetails.unshift(userDetails)
      dispatch({
        type: "user/setState",
        payload: {
          allUser: allUserDetails,
        }
      }).then(() => {
        history.push("/")
      })
    }
  }

  return (
    <>
      <div className="topBar"><Link to="/">&nbsp;&nbsp;<span>Go Back</span></Link></div>
      <div style={{ backgroundColor: userId ? "#e5edf1" : "#FCFAED"}} className="userDetails">
        {userId ? <h3 className="edit">Hello {editUser.name}, Edit Your User Details...</h3> : null}
        <Form onFinish={handleSubmit}>
          <InputField
            title="Full Name:"
            fieldName="name"
            InitialValue={editUser.name}
          />
          <InputField
            title="Address:"
            fieldName="address"
            InitialValue={editUser.address}
          />
          <Input.Group compact>
            <Form.Item
              style={{ width: "46%" }}
              label={<b>College</b>}
              name="collegeName"
              rules={[{ required: true, message: 'please select College' }]}
              initialValue={editUser.college}
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
          <Button type="primary" htmlType="submit">{userId ? <span>Edit User</span> : <span>+&nbsp;ADD USER</span>}</Button>
        </Form>
      </div>
    </>
  )
}

export default connect(({ user }) => ({
  user,
}))(UserDetails);










