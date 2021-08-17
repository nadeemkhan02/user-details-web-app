import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const UserCard = ({ AllUser, HandleDelete }) => {
  return (
    <>
      {
        AllUser.map((item) => (
          <Card key={item.id} style={{ marginBottom: "20px" }} type="inner" title={item.name} extra={<Link exact to={`/add-user/${item.id}`}>Edit</Link>}>
            <div className="card-details"><span><b>Date Of Birth:</b>{item.dateOfBirth}</span><span className="gender"><b>Gender:</b>&nbsp;{item.gender}</span></div>
            <div className="card-details"><span><b>Address:</b>&nbsp;{item.address}</span></div>
            <div className="card-details"><span><b>College Name:</b>&nbsp;{item.collegeName}</span></div>
            <div className="card-details"><b>Hobbies:</b>
              {item.hobbies.filter((value) => value !== "Other").map((val) => (
                <span>{val}{item.hobbies.length !== (item.hobbies.indexOf(val) + 1) && <span>,</span>}</span>
              ))
              }
              {item.otherHobbies && <spa>,{item.otherHobbies}</spa>}
              <Button onClick={() => HandleDelete(item.id)} style={{ float: "right" }} danger>Delete User</Button>
            </div>
          </Card>
        ))
      }
    </>
  )
}

export default UserCard;
