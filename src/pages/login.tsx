import { NextPage } from "next"
import { useEffect } from "react"

const signin = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })

    if (response.status !== 200) {
        throw new Error(await response.text())
    }
}

const LoginPage: NextPage = () => {
    useEffect(() => {
        signin('hugomn@gmail.com', 'Wedd27022021')
      }, [])
    return <div>Test</div>
}

export default LoginPage