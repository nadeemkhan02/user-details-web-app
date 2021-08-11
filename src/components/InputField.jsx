import React from 'react'
import { Form, Input, Radio, Button, Checkbox } from "antd";

const InputField = ({ title, width, extra, fieldName, placeHolder, Suffix, Style }) => {
  return (
    <>
      {/* <div>
        <p><b>{title}</b></p> */}
      <Form.Item
        label={title}
        extra={extra}
        style={{ width: width ? width : "70%", ...Style }}
        name={fieldName}

        rules={[
          {
            required: true,
            message: `Please input ${title}!`,
          },
        ]}
      >
        <Input
          autoComplete='off'
          placeholder={placeHolder}
          suffix={Suffix}
        />
      </Form.Item>
      {/* </div> */}
    </>
  )
}

// const RadioInputField = ({ title, subTitle, fieldName, radioChange }) => {
//   return (
//     <>
//       <div style={{ width: "88%", margin: "auto", marginTop: "50px" }}>
//         <div className={styles.sub_heading}>
//           <p><b>{title}</b></p>
//           <p style={{ color: "#7285A8", fontSize: "14px" }}>{subTitle}</p>
//         </div>
//         <Form.Item
//           name={fieldName}
//           rules={[
//             {
//               required: true,
//               message: `Please input ${title}!`,
//             },
//           ]}
//         >
//           <Radio.Group onChange={radioChange}>
//             <Radio value={true}>Yes</Radio>
//             <Radio value={false}>No</Radio>
//           </Radio.Group>
//         </Form.Item>
//       </div>
//     </>
//   )
// }


export { InputField };
