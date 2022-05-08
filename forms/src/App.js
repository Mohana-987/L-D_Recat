//import logo from './logo.svg';
import React from 'react'
import { useState, useEffect} from 'react';
import './App.css';

function App() {

  const [form,setForm]=useState({
    name:'',
    email:'',
    address:'',
    course:'',
    agree:false,
    gender:'',
    dob:'',
    file:''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  const onChangeEvent=(e)=>{
    const {value,name,type,checked}=e.target;
    setForm((state)=>({
      ...state,
      [name]: type==='checkbox' ? checked : value
    }));
  }
  /*const showDataEvent = () =>{
    console.log("Form:",form);
  }*/
  const onSubmitEvent = (e) =>{
    //showDataEvent();
    setFormErrors(validate(e,form));
    setIsSubmit(true);
  }
  useEffect(()=>{
    //console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(form);
    }
  },[formErrors]);

  const validate = (e,values)=>{
    const errors={}
    const emailregex= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const nameregex = /^[A-Za-z][A-Za-z]{5,30}$/;

    if(!values.name){
      errors.name= "Name is required!";
      e.preventDefault();
    }else if(!nameregex.test(values.name)){
      errors.name="Name should only contain Alphabets and length>4"
      e.preventDefault();
    }
    else{
      errors.name="";
    }
    if(!values.email){
      errors.email= "Email is required!";
      e.preventDefault();
    }
    else if(!emailregex.test(values.email)){
      errors.email="This not a valid email!"
      e.preventDefault();
    }
    else{
      errors.email="";
    }
    if(!values.address){
      errors.address= "Address is required!";
      e.preventDefault();
    }
    else{
      errors.address="";
    }
    if(!values.course){
      errors.course= "Course is required!";
      e.preventDefault();
    }
    else{
      errors.course="";
    }
    if(!values.agree){
      errors.agree= "Agree is required!";
      e.preventDefault();
    }
    else{
      errors.agree="";
    }
    if(!values.gender){
      errors.gender= "Gender is required!";
      e.preventDefault();
    }
    else{
      errors.gender="";
    }
    if(!values.dob){
      errors.dob= "DOB is required!";
    }
    else{
      errors.dob="";
    }
    if(!values.file){
      errors.file= "File is required!";
      e.preventDefault();
    }
    else{
      errors.file="";
    }
    return errors;
  }

  return(
    <div >
      <form onSubmit={onSubmitEvent}>
        <fieldset className='form1'>
        <div className='head'>
          <h2>
            Course Registration!
          </h2>
        </div>
        <div className="mt-1 mb-1">
          <label>Enter Name </label>
          <input onChange={onChangeEvent} type="text" placeholder="Enter Name"  name="name" value={form.name} />
          <span>{formErrors.name}</span>
        </div>
        <div className="mb-1">
          <label>Enter Email</label>
          <input onChange={onChangeEvent} type="text" placeholder="Enter email"  name="email" value={form.email} />
          <span>{formErrors.email}</span>
        </div>
        <div className="mb-1 add">
          <label>Enter Address </label>
          <textarea onChange={onChangeEvent} name="address" value={form.address}></textarea>
          <span>{formErrors.address}</span>
        </div>
        <div className="mb-1">
          <label>Choose Gender</label>
            <input onChange={onChangeEvent} type="radio" value="Male" name="gender"/>  Male
            <input  className="female" onChange={onChangeEvent} type="radio" value="Female" name="gender"/>  Female
          <span>{formErrors.gender}</span>
        </div>
        <div className="mb-1">
          <label> Select the course</label>
            <select defaultValue="--select--"onChange={onChangeEvent} name="course">
              <option value="--select--" disabled>--Select--</option>
              <option value="React JS">React JS</option>
              <option value="React Native">React Native</option>
              <option value="Angular JS">Angular JS</option>
              <option value="Vue">Vue</option>
            </select>
          <span>{formErrors.course}</span>
        </div>
        <div className="mb-1">
          <label>Date of birth</label>
              <input type="date" onChange={onChangeEvent} name="dob" value={form.dob}/>
          <span>{formErrors.dob}</span>
        </div>
        <div className="mb-1">
          <label>Choose the CV </label>
            <input type="file" onChange={onChangeEvent} name="file" value={form.file}/>
          <p>{formErrors.file}</p>
        </div>
        <div className="mb-1">
          <label>Agree T & C</label>
            <input type="checkbox" onChange={onChangeEvent} name="agree" value={form.agree}/>
          <span>{formErrors.agree}</span>
        </div>
        <div class="text-center">
          <button className='btn btn-success'>Submit</button>
        </div>
        </fieldset>
      </form>
    </div>)
}

export default App;
