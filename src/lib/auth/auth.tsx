import React from 'react'
import Router from 'next/router'
import { parseCookies } from 'nookies'
import { FAUNA_SECRET_COOKIE } from 'utils/fauna-auth'

export const AuthWrapper: React.FC<{ children?: any }> = (props) => {
  const { children } = props
  const cookies = parseCookies()
  if (!cookies[FAUNA_SECRET_COOKIE] && typeof window !== 'undefined') {
    Router.push('/login')
    return null
  } else {
    return React.Children.only(children)
  }
}