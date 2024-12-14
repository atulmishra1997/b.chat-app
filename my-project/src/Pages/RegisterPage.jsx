import React from 'react'
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import uploadFile from '../helpers/uploadFiles';
import axios from 'axios';

const RegisterPage = () => {

    const [data, setData] = useState({
        name : '',
        email : '',
        password : '',
        profile_pic : ''
    })

    const [ uploadPhoto, setUploadPhoto ] = useState("")

    const handleOnChange = (e) => {
        const { name, value} = e.target;

        setData((preVal) => {
            return{
                ...preVal,
                [name] : value
            }
        })
    }

    const handleUploadPhoto = async(e) => {
        const file = e.target.files[0];
        const uploadPhoto = await uploadFile(file)
        // console.log("uploadPhoto",uploadPhoto)
        setUploadPhoto(file);

        setData((preVal)=> {
            return{
                ...preVal,
                profile_pic: uploadPhoto?.url
            }
        })
    }

    const handleClearImage = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setUploadPhoto(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const URL = `https://localhost:1996/api/register`;

        try {
            const response = await axios.post(URL, data);
            console.log('response', response)
        } catch (error) {
            console.log('error', error)
        }
        
        console.log("data",data)
    }

    return (
        <div className='mt-28'>
            <div className='w-full max-w-md mx-auto overflow-hidden bg-slate-300 p-4 rounded'>
                <h3>Welcome to <span className='text-[#646497] font-bold'>B.Chat!</span></h3>

                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name'>Name<span className='text-red-600'>*</span> :</label>
                        <input type='text' id='name' name='name' required placeholder='Your name here' className='px-2 py-1 focus:outline-[#646497] rounded' value={data.name} onChange={handleOnChange} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>Email<span className='text-red-600'>*</span> :</label>
                        <input type='email' id='email' name='email' required placeholder='Your email here' className='px-2 py-1 focus:outline-[#646497] rounded' value={data.email} onChange={handleOnChange} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>Password<span className='text-red-600'>*</span> :</label>
                        <input type='password' id='password' name='password' required placeholder='Your password here' className='px-2 py-1 focus:outline-[#646497] rounded' value={data.password} onChange={handleOnChange} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='profile_pic'>Photo <span className=' text-gray-400'>(Optional)</span>:
                            <div className='h-14 bg-slate-100 flex justify-center border hover:border-[#646497] items-center rounded cursor-pointer'>
                                <p className='text-sm text-gray-400 max-w-[300px] text-ellipsis line-clamp-1'>{ uploadPhoto?.name ? uploadPhoto?.name : "Profile Photo"}</p>
                                {
                                    uploadPhoto?.name && (
                                        <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearImage}><IoClose /></button>
                                    )
                                }
                            </div>
                        </label>
                        <input type='file' id='profile_pic' name='profile_pic' className='px-2 py-1 hidden'  onChange={handleUploadPhoto} />
                    </div>

                    <button className='bg-[#323250] text-white text-lg px-4 py-2 rounded hover:bg-[#646497] mt-3 font-bold tracking-wider'>Register</button>
                </form>
                <p className='my-3 text-center'>Already Have An Account? <Link to={"/email"} className=' hover:text-[#646497] font-semibold'>Login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage
