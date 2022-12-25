import { useState } from 'react'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/userSlice'
import { useNavigate } from 'react-router-dom'

const LoginInput = ({ type, value, onChange }) => (
  <input
    className='h-10 my-4 border border-gray-400 rounded p-4 text-gray-600'
    type={type}
    value={value}
    onChange={onChange}
  />
)

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(login({
      username,
      password
    }))
    
    navigate('/')
    setUsername('')
    setPassword('')
  }

  return (
    <main className='font-merriweather bg-white w-3/5 lg:w-2/5 2xl:w-[600px] mx-auto my-32 rounded p-10 shadow-md'>
      <h2 className='text-center font-semibold mb-10'>Log in</h2>
      <form className='flex flex-col' onSubmit={handleLogin}>
        <label>Username</label>
        <LoginInput type='text' value={username} onChange={({ target }) => setUsername(target.value)} />
        <label>Password</label>
        <LoginInput type='password' value={password} onChange={({ target }) => setPassword(target.value)} />
        <Button type='submit'>Login</Button>
      </form>
    </main>

  )
}

export default Login