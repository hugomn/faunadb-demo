import { NextPage } from "next"
import { useEffect } from "react"
import Router from "next/router"

const logout = async () => {
    await fetch('/api/logout')
    Router.push('/login')
}

const LogoutPage: NextPage = () => {
    useEffect(() => {
        logout()
      }, [])
    return <div>Signing out...</div>
}

export default LogoutPage