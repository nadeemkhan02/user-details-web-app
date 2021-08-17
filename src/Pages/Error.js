//Error page for wrong url path / 404 page
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
const Error = () => {
  return(
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
    />
  )
}

export default Error;
