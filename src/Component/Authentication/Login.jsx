import { Box, Button,  FormControl,  InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FIREBASE_AUTH} from '../../Firebase/FirebaseConfig';
import {signInWithEmailAndPassword } from 'firebase/auth';



const Login = () => {



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handeleLogin = async (e) => {
      e.preventDefault();
     
      try {
          const { user } = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
          
          console.log(user);
          alert("User logedin successfully"); 
          navigate("/");
      } catch (error) {
          console.log("error", error);
          alert(`Error: ${error.message}`); 
      }
  };

  

  return (
<div className=' flex items-center justify-center mt-3'>
<div className=' flex items-center justify-center shadow lg:w-96 bg-gray-200 rounded-lg'>
<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 ,width:300 ,margin:5}}>
    <p className='mt-2 mb-2 text-2xl font-bold'>Login Form</p>
      
        <FormControl fullWidth required variant="outlined">
        <InputLabel htmlFor="email">Email</InputLabel>
          <OutlinedInput
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            label="Email"
          />
        </FormControl>
        
        <FormControl fullWidth required variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            label="Password"
          />
        </FormControl>
        <FormControl>
           <Button type='submit' variant='contained' onClick={(e)=>{handeleLogin(e)}}>Login</Button>
        </FormControl>
        <p className='text-right mt-3 text-violet-600'><Link  color="primary"
        sx={{ textDecoration: 'none' ,cursor:"pointer" }}>forget password?</Link></p>
        <p className='text-left'>Don't have account! <Link to ={"/register"} className='pl-3  text-blue-500'  color="primary"
        sx={{ textDecoration: 'none',cursor:"pointer" }}>Sign up</Link></p>

        </Box>

        
</div>
      
    </div>
  )
}

export default Login;
