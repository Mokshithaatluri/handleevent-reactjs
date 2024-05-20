import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css'

const Assign = () => {
    const initialFormData = {
        fname:'',lname:'',gender:'',age:'',selectedDate:'',email:'',pass:'',cpass:'',phoneno:'',add:'',state:'',pinc:'',hobbies:''
      };
    const [formData,setFormData] = useState(initialFormData)
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        const inputValue = type === 'checkbox' ? checked : value;
       setFormData((prevdata)=>({
            ...formData,
            [name]: inputValue,
          }));
        
      };
      const [errors, setErrors] = useState({});
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Add your validation rules here
        if (!formData.fname.trim()) {
          isValid = false;
          newErrors.fname = 'First Name is required';
        }
    
        if (!formData.lname.trim()) {
          isValid = false;
          newErrors.lname = 'Last Name is required';
        }
    
        // Add more validation rules for other fields
        if (!formData.pass.trim()) {
            isValid = false;
            newErrors.pass = 'password is required';
          }
          if (!formData.cpass.trim()) {
            isValid = false;
            newErrors.cpass = 'confirm password is required';
          }
          if (!formData.add.trim()) {
            isValid = false;
            newErrors.add = 'Address is required';
          }
          if (!formData.age.trim()) {
            isValid = false;
            newErrors.age = 'age is required';
          }
          if (!formData.email.trim()) {
            isValid = false;
            newErrors.email = 'Email is required';
          }
          if (!formData.phoneno.trim()) {
            isValid = false;
            newErrors.phoneno = 'Phone number is required';
          }
          if(!formData.gender.trim()) {
            isValid = false;
            newErrors.gender= 'Gender is required';
          }
          if(!formData.pinc.trim()) {
            isValid = false;
            newErrors.pinc = 'pin code is required';
          }
          if(!formData.state.trim()) {
            isValid = false;
            newErrors.state = 'State is required';
          }
          if(!formData.hobbies.trim()) {
            isValid = false;
            newErrors.hobbies = 'Hobbies is required';
          }
        setErrors(newErrors);
        return isValid;
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        if (validateForm()) {
            
            console.log('Form submitted:', formData);
          } else {
            console.error('Form validation failed');
          }

      };
      const handleReset = () => {
        setFormData(initialFormData);
      };
     
    
      return(
        <div align='center' className='RegForm'>
            <h1>Student Registration Form</h1>
            <form action="" onSubmit={handleSubmit} className='registration-form'>
                <div className='form-row'>
                    <label>
                    <span className='c1'>First Name:</span>
                    <input type="text"
                    name='fname'
                    placeholder='Enter first name'
                    value={formData.fname}
                    onChange={handleInputChange}
                    className='input-box'
                    style={{borderbl:'pink'}} />
                    {errors.fname && <span  className='error-message' style={{ color: 'red' }}>{errors.fname}</span>}
                    </label></div>
                <div className='form-row'><label >
                <span className='c1'>Last Name:</span>
                    <input type="text"
                    name='lname'
                    placeholder='Enter last name'
                    value={formData.lname}
                    onChange={handleInputChange}
                    className='input-box' />
                    {errors.lname && <span className='error-message'  style={{ color: 'red' }}>{errors.lname}</span>}
                </label></div>
                <div className='form-row'><label >
                    <span className='c1'>Gender</span>
                    <input type="radio"
                    name='male'
                    value={formData.gender==='male'}
                    onChange={handleInputChange}
                    className='input-box' />
                    male
                    <input type="radio"
                     name='female'
                     value={formData.gender==='female'}
                     onChange={handleInputChange}
                     className='input-box'/>
                     Female
                </label></div>
                <div className='form-row'>
                    <label>
                        <span className='c1'>Age:</span>
                        <input type="text"
                        value={formData.age}
                        placeholder='Enter your age'
                        name='age'
                        onChange={handleInputChange}
                        className='input-box' />
                    </label>
                    <div className='form-row'><label>
                    <span className='c1'>Date of Birth:</span>
                    <input type="date"
                        value={formData.selectedDate}
                        onChange={handleInputChange}
                        className='input-box' />
                    </label></div>
                    <div className='form-row'><label >
                        <span className='c1'>Email:</span>
                        <input type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Enter your email'
                        className='input-box' />
                        {errors.email && <span className='error-message'  style={{ color: 'red' }}>{errors.email}</span>}
                    </label></div>
                    <div className='form-row'>
                        <label>
                            <span className='c1'>Password:</span>
                            <input type="text"
                            name='pass'
                            value={formData.pass}
                            onChange={handleInputChange}
                            placeholder='Enter your password'
                            className='input-box' />
                            {errors.pass && <span className='error-message'  style={{ color: 'red' }}>{errors.pass}</span>}
                        </label>
                    </div>
                    <div className='form-row'>
                        <label>
                            <span className='c1'>Confirm Password:</span>
                            <input type="text"
                            value={formData.cpass}
                            name='cpass'
                            onChange={handleInputChange}
                            placeholder='Enter confirm password'
                            className='input-box' />
                            {errors.cpass && <span  className='error-message' style={{ color: 'red' }}>{errors.cpass}</span>}
                        </label>
                    </div>
                    <div className='form-row'>
                        <span className='c1'>Phone number:</span>
                        <select name="phone" value={formData.phoneno} onChange={handleInputChange}  className='input-box'>
                            <option value="+91">+91</option>
                            <option value="+(141)">+(141)</option>
                            <option value="+(257)">+(257)</option>
                            <option value="+(855)">+(855)</option>
                            <option value="+(238)">+(238)</option>
                        </ select>
                        <input type="text"
                        placeholder='Enter your phone number' />
                         {errors.phoneno && <span  className='error-message' style={{ color: 'red' }}>{errors.phoneno}</span>}
                    </div>
                    <div className='form-row'>
                        <label><span className='c1'>Address:</span>
                            <input type="text"
                            name='add'
                            value={formData.add}
                            onChange={handleInputChange}
                            className='input-box' />
                             {errors.add && <span className='error-message' style={{ color: 'red' }}>{errors.add}</span>}
                        </label>
                    </div>
                    <div className='form-row'><label ><span className='c1'>State:</span>
  `                     <select  type="text" value={formData.state} name='state' onChange={handleInputChange} placeholder="Select your state"  className='input-box'>
                        <option value="">--select your state--</option>
                        <option value="ap" >ap</option>
                        <option value="tel">Telangana</option>
                        <option value="bihar">Bihar</option>
                        <option value="assam">Assam</option>
                    </select>
                    {errors.state && <span className='error-message'  style={{ color: 'red' }}>{errors.state}</span>}</label></div>
                    <div className='form-row'>
                        <label ><span  className='c1'>Pin Code</span>
                            <input type="text" name='pinc'value={formData.pinc} placeholder='Enter your pincode'  className='input-box' />
                            {errors.pinc && <span className='error-message'  style={{ color: 'red' }}>{errors.pinc}</span>}
                        </label>
                    </div>
                    <div className='form-row'>
                        <span className='c1'>Hobbies:</span>
                        <label>
                            Music
                            <input type="checkbox" value={formData.hobbies} name='hobbies'  className='input-box'/>
                        </label>
                        <label>
                            Movies
                            <input type="checkbox" value={formData.hobbies} name='hobbies'  className='input-box'/>
                        </label>
                        <label>
                            Games
                            <input type="checkbox" value={formData.hobbies} name='hobbies'  className='input-box'/>
                        </label>
                        <label>
                            Travel
                            <input type="checkbox" value={formData.hobbies} name='hobbies'  className='input-box'/>
                        </label>
                        {errors.hobbies && <span className='error-message'  style={{ color: 'red' }}>{errors.hobbies}</span>}
                    </div>
                    <div className='form-row'>
                        <label>
                            Upload photo
                            *Max size of 100kb
                            <button type='btn'  >choose file</button>
                            No file choosen
                        </label>
                    </div>
                    <div className='form-row'>
                    <input type="checkbox"
                     />
                        I hereby declare that the above information provided is true and correct
                        
                    </div>
                    <div className='form-row-btn'>
                        <button type="submit"  className='input-box' style={{background:'purple',color:'white'}} onChange={handleInputChange}>Submit</button>
                        <button type="submit"  className='input-box'  style={{background:'purple',color:'white'}} onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </form>


        </div>
      )
};

export default Assign;
