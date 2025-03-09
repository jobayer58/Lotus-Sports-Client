import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        if (name.length < 5) {
            setError({ ...error, name: 'must be more the 5 character long' })
            return
        }
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d@$!%*?&]{6,}$/;
        if (!regex.test(password)) {
            setError({...error, password: 'must uppercase,lowercase, number'})
            return
        }
        const resister = { name, photo, email, password }
        console.log(resister);
        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => {
                        err.code
                    })
            })
            .catch(err => {
                err.code
            })
    }

    const provider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
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
            <div className="hero bg-[#EEF9FF]  py-12">
                <div className="hero-content flex-col md:flex-row-reverse  gap-0 ">
                    {/* <div className="text-center lg:text-left">
                        <img className='md:h-[580px]  md:w-[600px]  object-cover' src='' alt="" />
                    </div> */}
                    <div className="card bg-base-100 md:w-[400px]  rounded-none  shrink-0 ">
                        <form onSubmit={handleRegister} className="card-body justify-center items-center ">
                            <h1 className='text-2xl text-center font-semibold text-[#43aae2]'>Register your <span className='text-[#4DC879]'>Account</span></h1>
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered border-[#4DC879] md:w-76 w-64" required />
                            </div>
                            {
                                error.name && (
                                    <label className="label text-sm text-red-600">
                                        {error.name}
                                    </label>
                                )
                            }

                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-[#4DC879] md:w-76  w-64" required />
                            </div>
                            <div className="form-control grid mt-5">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered border-[#4DC879] md:w-76 w-64" required />
                            </div>
                            <div className="form-control grid relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? 'text' : 'password'} name='password' placeholder="Password" className="input input-bordered border-[#4DC879] md:w-76  w-64" required />
                                {
                                    error.password && (
                                        <label className="label text-sm text-red-600">
                                            {error.password}
                                        </label>
                                    )
                                }

                                <button onClick={() => setShowPassword(!showPassword)} className=' text-xl absolute right-2 top-8'>
                                    {
                                        showPassword ? <AiOutlineEye></AiOutlineEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                    }
                                </button>
                            </div>
                            <p className=''>OR</p>
                            <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className="form-control  ">
                                <button className="btn bg-[#43aae2] text-xl text-[#FFF9EB] md:w-76">Register</button>
                            </div>
                        </form>
                        <p className='text-center pb-6'>All ready Have An Account ? <NavLink to='/login'><span className='text-[#f44848]'>Login</span></NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;