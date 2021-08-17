import React from 'react'
import { Form, Input } from "antd";

const InputField = ({ title, extra, fieldName, placeHolder, Suffix, InitialValue }) => {
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
              message: `Please enter ${title}!`,
            },
          ]}
        >
          <Input
            autoComplete='off'
            placeholder={placeHolder}
            suffix={Suffix}
            value={InitialValue}
          />
        </Form.Item>
      </div>
    </>
  )
}

export { InputField };
