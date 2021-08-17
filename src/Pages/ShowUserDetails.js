import React from "react";
import { connect } from "dva";
import { Card, Empty } from "antd";
import { Link } from "react-router-dom";
import "./ShowUserDetails.css";
import UserCard from "../components/UserCard";

const showUserDetails = (props) => {
  const { user: { allUser }, dispatch } = props;

  const handleDelete = (user_id) => {
    const AllUser = [...allUser]
    const allUserDetails = AllUser.filter((item) => item.id !== user_id)
    dispatch({
      type: "user/setState",
      payload: {
        allUser: allUserDetails,
      }
    })
  }

  return (
    <>
      <Card className="Card" title={<><span>User Deatils</span><Link style={{ float: "right" }} to="add-user">Add User</Link></>}>
        {allUser.length === 0 ? <Empty /> : <UserCard AllUser={allUser} HandleDelete={handleDelete} />}
      </Card>
    </>
  )
}

export default connect(({ user }) => ({
  user,
}))(showUserDetails);

