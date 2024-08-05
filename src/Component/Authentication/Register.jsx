import { Box, Button, FormControl, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../Firebase/FirebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; // Add Firestore imports

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handeleRegister = async (e) => {
        e.preventDefault();
        try {
            const { user } = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            await updateProfile(user, {
                displayName: name,
            });
            // Save additional user information in Firestore
            await setDoc(doc(FIRESTORE_DB, "users", user.uid), {
                name: name,
                email: email,
                phone: phone,
            });
            console.log("User registered successfully:", user);
            alert("User registered successfully"); 
            navigate("/login-signup");
        } catch (error) {
            console.log("error", error);
            alert(`Error: ${error.message}`); 
        }
    };

    const navigate = useNavigate();
   

    return (
        <div className='-z-10 flex items-center justify-center mt-3'>
            <div className='flex items-center justify-center shadow lg:w-96 border-r-4 bg-gray-200 rounded-lg'>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 5 }}>
                    <p className='mt-2 mb-2 text-2xl font-bold'>Sign Up Form</p>
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <OutlinedInput
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            label="Name"
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            label="Email"
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="phone">Phone</InputLabel>
                        <OutlinedInput
                            id="phone"
                            name="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }}
                            label="Phone"
                            required
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
                            required
                        />
                    </FormControl>
                    <FormControl fullWidth required variant="outlined">
                        <InputLabel htmlFor="confpass">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="confpass"
                            name="confpass"
                            type="password"
                            label="Confirm Password"
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <Button type='submit' variant='contained' onClick={(e) => { handeleRegister(e) }}>Register</Button>
                    </FormControl>
                    <p className='text-left'>Already have an account? <Link to={"/login"} className='pl-3 text-blue-500' sx={{ textDecoration: 'none', cursor: "pointer" }}>Sign in</Link></p>
                </Box>
            </div>
        </div>
    );
};

export default Register;
