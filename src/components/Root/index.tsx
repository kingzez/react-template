import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'components/Layout'
import Login from 'pages/Login'

const Root = () => {
  const isAuthed = useSelector((state: any) => state.user.isAuthed)
  console.log('isAuthed', isAuthed)

  return isAuthed ? <Layout /> : <Login />
}

export default Root
