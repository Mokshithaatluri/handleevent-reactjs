import React, { useState } from 'react';
import './Form.css'
const RegForm = () => {
    const [formData,setFormData] = useState({uname:'',email:'',phoneno:'',gender:'',age:'',nationality:''})
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
    
        setFormData((prevdata)=>({
          ...formData,
          [name]: inputValue,
        }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);

      };
    
      return (
        <div className='RegF'>
            <h1 align="center"><b>Registration Form</b></h1>
            <form  className="RegForm"onSubmit={handleSubmit} align="center">
                <div className='form-row'><label>
                    Email:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </label></div>
            
                
                <div className='form-row'><label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    />
                </label></div>

                <div className='form-row'><label>
                    Phone Number:
                    <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    />
                </label></div>

                <div className='form-row'><label>
                    Gender:
                    <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                    />
                    Male
                </label></div>
                <div className='form-row'><label>
                    <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    />
                    Female
                </label></div>
            
                <div className='form-row'><label>
                    Age:
                    <select name="age" value={formData.age} onChange={handleInputChange}>
                    <option value="0-10">10-20</option>
                    <option value="0-10">21-30</option>
                    <option value="0-10">31-40</option>
                    <option value="30-10">41-50</option>
                    <option value="0-10">above 50</option>
                    </ select>
                </label></div>

                <div className='form-row'><label>
                    Weight:
                    <select name="weight" value={formData.weight} onChange={handleInputChange}>
                    <option value="uweight">below 30</option>
                    <option value="uweight">30-40</option>
                    <option value="uweight">40-50</option>
                    <option value="uweight">50-60</option>
                    <option value="uweight">60-70</option>
                    <option value="uweight">70-80</option>
                    <option value="uweight">80-90</option>
                    <option value="uweight">above 90</option>
                    
                    </select>
                </label></div>
            
            
                <div className='form-row'><label>
                    Nationality:
                    <select name="nationality" value={formData.nationality} onChange={handleInputChange}>
                    <option value="india">Indian</option>
                    <option value="American">American</option>
                    <option value="nepali">Nepalian</option>
                    </select>
                </label></div>
                <div className='form-row'><button type="submit"  align="center">Submit</button></div>
                </form>
        </div>
      );
    }
    export default RegForm;