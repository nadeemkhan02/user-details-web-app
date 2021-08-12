import React from 'react'
import { Form, Input } from "antd";

const InputField = ({ title, extra, fieldName, placeHolder, Suffix }) => {
  return (
    <>
      <div>
        <p style={{ marginBottom: "2px" }}><b>{title}</b></p>
        <Form.Item
          extra={extra}
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
      </div>
    </>
  )
}

export { InputField };
