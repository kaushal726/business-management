import React, { useState } from 'react'
import './HomeScreen.css'
function HomeScreen() {
    const [formData, setFormData] = useState({
        name: '',
        quantity: '',
        rate: '',
        date: '',
    });
    let dataHandler = (e) => {
        e.preventDefault();
        console.log(formData)
        setFormData({
            name: '',
            quantity: '',
            rate: '',
            date: '',
        });
    }
    let handleChange = (e, type) => {
        switch (type) {
            case "Name":
                setFormData({ ...formData, name: e.target.value });
                break;
            case "Quantity":
                setFormData({ ...formData, quantity: Number(e.target.value) });
                break;
            case "Rate":
                setFormData({ ...formData, rate: Number(e.target.value) });
                break;
            case "Date":
                setFormData({ ...formData, date: e.target.value });
                break;
            default:
                break;
        }
    }
    return (
        <div className='flex flex-wrap m-5 p-7'>
            <form className='flex flex-col justify-center w-full' onSubmit={dataHandler}>
                <div>
                    <label>
                        Enter Name :
                        <input type='text' value={formData.name} onChange={(e) => { handleChange(e, "Name") }}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Enter Quantity :
                        <input type='number' value={formData.quantity} onChange={(e) => { handleChange(e, "Quantity") }}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Enter Rate :
                        <input type='number' value={formData.rate} onChange={(e) => { handleChange(e, "Rate") }}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Enter Date :
                        <input type='date' value={formData.date} onChange={(e) => { handleChange(e, "Date") }}></input>
                    </label>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='glowing-btn'><span className='glowing-txt'>SU<span className='faulty-letter'>BM</span>IT</span></button>
                </div>
            </form>
        </div>
    )
}

export default HomeScreen