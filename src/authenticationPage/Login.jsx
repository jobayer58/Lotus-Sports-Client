import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {

    const { userSignin, setUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const signIn = { email, password }
        console.log(signIn);
        userSignin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                error.message
            })
    }

    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // navigate('/')
                const user = result.user
                setUser(user)


            })
            .catch(err => {
                // 
                err.code
            })
    }

    return (
        <div>
            <div className="hero bg-[#EEF9FF]  md:h-[800px]">
                <div className="hero-content flex-col md:flex-row-reverse gap-0 ">
                    <div className="text-center lg:text-left">
                        <img className='md:h-[480px]' src='' alt="" />
                    </div>
                    <div className="card bg-base-100 md:w-[400px] md:h-[480px] rounded-none  shrink-0 ">
                        <form onSubmit={handleLogin} className="card-body justify-center items-center space-y-2">
                            <h1 className='text-2xl text-center font-semibold text-[#43aae2]'>Login your <span className='text-[#4DC879]'>Account</span></h1>
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered border-[#4DC879] md:w-76" required />
                            </div>
                            <div className="form-control grid relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" className="input input-bordered border-[#4DC879] md:w-76" required />

                                <button onClick={() => setShowPassword(!showPassword)} className=' text-xl absolute right-2 top-8'>
                                    {
                                        showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                    }
                                </button>
                                <label className="label">
                                    <NavLink to='/forget' className="label-text-alt link link-hover">Forgot password?</NavLink>
                                </label>
                            </div>
                            <p>OR</p>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className="form-control  ">
                                <button className="btn bg-[#43aae2] text-xl text-[#FFF9EB] md:w-76">Login</button>
                            </div>
                        </form>
                        <p className='text-center pb-6'>Don't Have An Account ? <NavLink to='/resister'><span className='text-[#f44848]'>Register</span></NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;