import React from 'react'
import { useSelector } from 'react-redux'
import Layout from 'containers/Layout'
import Login from 'containers/Login'

const Main = () => {
  const isAuthed = useSelector((state: any) => state.user.isAuthed)
  console.log('isAuthed', isAuthed)

  return isAuthed ? <Layout /> : <Login />
}

export default Main
