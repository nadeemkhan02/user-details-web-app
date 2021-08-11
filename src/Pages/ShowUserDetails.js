import React from  "react";
import { connect } from "dva";
import { Card } from "antd";

const showUserDetails = () => {
  return(
    <>
      <Card title={<><span>User Deatils</span> <span>Add more</span></>}>
        <Card type="inner" title="Inner Card title" extra={<span>Edit</span>}>
          Inner Card content
        </Card>
        {/* <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner Card title"
          extra={<a href="#">More</a>}
        >
          Inner Card content
        </Card> */}
      </Card>
    </>
  )
}

export default connect(({ user }) => ({
  user,
}))(showUserDetails);
