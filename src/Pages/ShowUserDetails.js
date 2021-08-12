import React from "react";
import { connect } from "dva";
import { Card, Button, Empty } from "antd";
import { Link } from "react-router-dom";
import "./ShowUserDetails.css";

const showUserDetails = (props) => {
  const { user: { allUser }, dispatch} = props;

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
        {
          allUser.length === 0 ? <Empty /> : (
            allUser.map((item) => (
              <Card style={{ marginBottom: "20px" }} type="inner" title={item.name} extra={<span>Edit</span>}>
                <div className="card-details"><span><b>Date Of Birth:</b>{item.dateOfBirth}</span><span className="gender"><b>Gender:</b>&nbsp;{item.gender}</span></div>
                <div className="card-details"><span><b>Address:</b>&nbsp;{item.address}</span></div>
                <div className="card-details"><span><b>College Name:</b>&nbsp;{item.collegeName}</span></div>
                <div className="card-details"><b>Hobbies:</b>
                  {item.hobbies.filter((value) => value !== "Other").map((val) => (
                    <span>{val}{item.hobbies.length !== (item.hobbies.indexOf(val) + 1) && <span>,</span>}</span>
                  ))
                  }
                  {item.otherHobbies && <spa>,{item.otherHobbies}</spa>}
                  <Button onClick={() => handleDelete(item.id)} style={{ float: "right" }} danger>Delete User</Button>
                </div>
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
