import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import * as userAction from 'actions/user'

const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
}
const tailLayout = {
  // wrapperCol: {
  //   offset: 8,
  //   span: 16,
  // },
}

const Login = () => {
  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    dispatch(userAction.login(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
