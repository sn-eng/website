import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../services/firebaseConfig'

const Login = () => {
    const [error, setError] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loader, setLoader] = React.useState(false)

    const navigate = useNavigate()

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoader(true)

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/royalty/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='mb-4 pt-32 px-8 max-w-screen-sm'>
                <div className='content-center text-center mb-4'>
                    <h2 className='font-sans text-3xl font-bold tracking-tight text-gray-900'>
                        Please Enter Your Login Details
                    </h2>
                </div>
                {error && (
                    <span
                        style={{
                            marginTop: '15px',
                            color: 'red',
                            fontSize: '20px',
                        }}
                    >
                        Incorrect email/password!{' '}
                    </span>
                )}
                <form onSubmit={handleLogin}>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='block text-xs text-dark'
                        >
                            Email*
                        </label>
                        <input
                            required
                            type='email'
                            name='email'
                            placeholder='example@gmail.com'
                            onChange={e => setEmail(e.target.value)}
                            className='w-full border-0 border-b border-[#000] py-4 focus:border-primary focus:outline-none'
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='email'
                            className='block text-xs text-dark'
                        >
                            Password
                        </label>
                        <input
                            required
                            type='password'
                            name='password'
                            placeholder='password'
                            onChange={e => setPassword(e.target.value)}
                            className='w-full border-0 border-b border-[#000] py-4 focus:border-primary focus:outline-none'
                        />
                    </div>
                    <div className='flex items-center space-x-3 justify-center'>
                        <button
                            type='submit'
                            className={`inline-flex items-center  ${
                                loader ? 'bg-[#f2fcf4]' : 'bg-[#10a65c]'
                            } justify-center rounded py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
