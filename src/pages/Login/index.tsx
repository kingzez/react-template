import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import * as userAction from 'actions/user'
import style from './Login.module.scss'

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
    <div className={style.login}>
      <div className={style.card}>
        <div className={style.header}>
          <span>欢迎登录</span>
        </div>
        <div className={style.body}>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input prefix={<UserOutlined />} placeholder="用户名" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}>
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
