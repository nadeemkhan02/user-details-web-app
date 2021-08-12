import React from "react";
import { connect } from "dva";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const showUserDetails = (props) => {
  const { user: { allUser }, dispatch, history } = props;

  const handleDelete = (user_id) => {
    const AllUser = [...allUser]
    const allUserDetails = AllUser.filter((item)=>item.id !== user_id)
    dispatch({
      type: "user/setState",
      payload: {
        allUser: allUserDetails,
      }
    })
  }
  return (
    <>
      <Card title={<><span>User Deatils</span><Link style={{ float: "right" }} to="add-user">Add User</Link></>}>
        {
          allUser.length === 0 ? <h1>No data</h1> : (
            allUser.map((item) => (
              <Card style={{ marginBottom: "20px" }} type="inner" title={item.name} extra={<span>Edit</span>}>
                <p>Card Content</p>
                <Button onClick = {()=>handleDelete(item.id)} style={{float:"right"}} danger>Delete User</Button>
              </Card>
            ))
          )
        }
      </Card>
    </>
  )
}

export default connect(({ user }) => ({
  user,
}))(showUserDetails);
