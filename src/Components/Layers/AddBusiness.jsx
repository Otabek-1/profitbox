import React, { useEffect, useState } from 'react'
import CreateBusinessForShop from './CreatingBusiness/CreateBusinessForShop'
import CreateLandingPage from './CreatingBusiness/CreateLandingPage'
import CreateEducational from './CreatingBusiness/CreateEducational'
import axios from 'axios';

export default function AddBusiness() {
    const [business, setBusiness] = useState("shop");
    const [business_name, setBusiness_name] = useState("");
    return (
        <div className='w-full h-full bg-slate-600 p-5'>
            <h2 className='text-white' style={{ fontSize: "35px", userSelect: "none" }}>Add New business cluster</h2>

            <div className="flex m-5" style={{ flexDirection: "column", gap: "10px" }}>
                <label htmlFor="name" className='text-white'>Enter name of your cluster</label>
                <input onChange={(e) => setBusiness_name(e.target.value)} type="text" name="name" id="name" className='w-1/3 p-3 rounded-lg bg-slate-300 border-2 border-slate-800 outline-none text-slate-950' />
            </div>

            <div className="flex my-10 mx-5 items-center" style={{ gap: "10px" }}>
                <label htmlFor="name" className='text-white'>Choose type of your cluster:</label>
                <select name="" id="" className='p-2 outline-none rounded-md bg-slate-400 border-2 border-slate-800' onChange={(e) => setBusiness(e.target.value)}>
                    <option value="shop">Shop store</option>
                    <option value="education">Education center</option>
                    <option value="land">Business | Landing page</option>
                </select>
            </div>

            <div className="flex w-full p-5 bg-slate-900 my-10 rounded-md" style={{ gap: "10px" }}>
                {business === "shop" ? <CreateBusinessForShop name={[business_name]} /> : business === "education" ? <CreateEducational  name={[business_name]} /> : business === "land" ? <CreateLandingPage /> : null}
            </div>
        </div>
    )
}
