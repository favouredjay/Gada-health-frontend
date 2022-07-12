import React, { useState, useEffect } from 'react'
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
// import {cookieClient} from 'react-cookie'

// let cookie = cookieClient.load('auth-token')
// if(cookie === undefined){
//     axios.get("http://gadahealth-app.herokuapp.com/auth/login/").then(response => {
//       if(response.status === 201){
//         cookieClient.save('auth-token', response.data.token, {path:'/'})
//   }
// })
// }


const PatientLogIn = () => {
  
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
  const [showPasswordErrorText, setShowPasswordErrorText] = useState(false);

  const [state, setState] = useState({
    email_or_phone: "",
    password: "",
    type: ""
  });


  const [error, setError] = useState({
    email_or_phone: false,
    password: false,
    type: false
  })

  const handlePhoneNumberError = () => {
    if (state.email_or_phone.length < 1 && state.email_or_phone !== ""){
        setError({...error, email_or_phone: true});
        setShowPhoneNumberError(true);

    }else {
      setError({...error, email_or_phone: false});
      setShowPhoneNumberError(false);
    }
  }

  const handlePasswordError = () => {
   if (state.password.length < 1 && state.password !== ""){
      setError({...error, password: true});
      setShowPasswordErrorText(true);
     
    } else {
      setError({...error, password: false});
      setShowPasswordErrorText(false);
    }
  }

  useEffect(() => {
    const { email_or_phone, password, type } = state;
    if (email_or_phone === "" || password === "" || password.length < 1){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  },[state, error]);


  const handleSubmit = async(e) => {
     e.preventDefault();

     try{
      const response = await axios.post("http://gadahealth-app.herokuapp.com/auth/login/", state,
      {
        header:{ "Content-Type": "application/json"}    
      },
    )

      if (response.status === 201){
          navigate("/Patient/Dashboard");
        }
      }catch(error){
        throw error;
      }finally{}
    };

  <Navbar/>
  return (
    <Grid container lg={12} minHeight= "100vh" minWidth="100vw" justifyContent="center" alignItems='center'>
      <Grid height="524px" width="476px" backgroundColor="grey" justifyContent="center" alignItems='center' textAlign="center">
        <Box height="88px" width="344px" justifyContent="center" alignItems="center"> 
            {/* <Typography color="black" fontSize="30px"> LOG IN</Typography> */}
        </Box>

        <Box height="250px" width="344px" justifyContent="center" alignItems="center"> 
        <Box height=" 40px" width="340px" marginBottom='50px'>  
              <TextField
                id="standard-required"
                label="Email or Phonenumber"
                type="email"
                variant="standard"
                value={state.email_or_phone}
                onChange={(e) => setState({...state, email_or_phone: e.target.value})}
                onBlur={handlePhoneNumberError}
                onFocus={() => setShowPhoneNumberError(false)}
              />
              <Typography color={'red'} sx={{ fontWeight: '400', fontSize: '15px' }}>
                {showPhoneNumberError && "Enter a valid phone number"}
              </Typography>
            </Box>
            
            <Box height=" 40px" width="340px" marginBottom='50px'>
              <TextField
                required
                id="standard-required"
                label="Password"
                type="password"
                variant="standard"
                value={state.password}
                onChange={(e) => setState({...state, password: e.target.value})}
                onBlur={handlePasswordError}
                onFocus={() => setShowPasswordErrorText(false)}
              />
              <Typography color={'red'} sx={{ fontWeight: '400', fontSize: '15px' }}>
                    {showPasswordErrorText && "please enter a correct password"}
              </Typography>
            </Box>

            <Box>  
              <TextField
                id="standard-required"
                label="type"
                type="hidden"
                variant="standard"
                value= 'patient'
                onChange={(e) => setState({...state, type: e.target.value})}
              />
            </Box>

            <Typography> Do you have account ?
              <Link to='/Patient/Signup'>
                 sign up   
              </Link>

           </Typography>

              <Button disabled={disabled} onClick={(e) => handleSubmit(e)} height="40px" width="330px" padding="10px" variant="contained">
                  <Typography color="black">
                    Login
                  </Typography>
                
              </Button>
        </Box>
        
      </Grid>
    </Grid>
  )
 
}
export default PatientLogIn;
