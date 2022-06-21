import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar';
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

   
  const EmployeeSignUp = () => {

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [showNameErrorText, setShowNameErrorText] = useState(false);
  const [showPhoneNumberError, setShowPhoneNumberError] = useState(false);
  const [showEmailErrorText, setShowEmailErrorText] = useState(false);
  const [showPasswordErrorText, setShowPasswordErrorText] = useState(false);

  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });


  const [error, setError] = useState({
    name: false,
    phone: false,
    email: false,
    password: false
  })


  const handleNameError = () => {
    var nameformat = /^[a-zA-Z\s]*$/;
    if (!state.name.match(nameformat) && state.name !== ""){
        setError({...error, name: true});
        setShowNameErrorText(true);

    }else {
      setError({...error, email: false});
      setShowNameErrorText(false);
    }
  }


  const handlePhoneNumberError = () => {
    var phoneformat = /^[0-9]+$/; 
    if (!state.phone.match(phoneformat) && state.phone !== ""){
        setError({...error, phone: true});
        setShowPhoneNumberError(true);

    }else {
      setError({...error, phone: false});
      setShowPhoneNumberError(false);
    }
  }


  const handleEmailError = () => {
    var mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (!state.email.match(mailformat) && state.email !== ""){
        setError({...error, email: true});
        setShowEmailErrorText(true);

    }else {
      setError({...error, email: false});
      setShowEmailErrorText(false);
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
    const { name, phone, email, password } = state;
    if ( name === "" || phone === ""|| email === "" || password === "" || password.length < 1){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  },[state]);



  const handleSubmit = async(e) => {
    console.log(e)
     e.preventDefault();

      try{
        const response = await axios.post("http://gadahealth-app.herokuapp.com/auth/employee/register/", state,
        {
          header:{ "content-type": "application/json"}     
        },
      )

        if (response.status === 201){
          navigate("/Employee/LogIn");
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
            {/* <Typography color="black" fontSize="40px"> LOG IN</Typography> */}
        </Box>
        <Box height="250px" width="344px" justifyContent="center" alignItems="center"> 
            
            <Box height=" 40px" width="340px" marginBottom='50px'>
              <TextField
                required
                id="standard-required"
                label="Name"
                variant="standard"
                value={state.name}
                onChange={(e) => setState({...state, name: e.target.value})}
                onBlur={handleNameError}
                onFocus={() => setShowNameErrorText(false)}
              />
              <Typography color={'red'} sx={{ fontWeight: '400', fontSize: '15px' }}>
                {showNameErrorText && "Enter your first and last name"}
              </Typography>
            </Box>
            
        
            <Box height=" 40px" width="340px" marginBottom='50px'>  
              <TextField
                id="standard-required"
                label="Phonenumber"
                type="Phonenumber"
                variant="standard"
                value={state.phone}
                onChange={(e) => setState({...state, phone: e.target.value})}
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
                label="Email"
                variant="standard"
                value={state.email}
                onChange={(e) => setState({...state, email: e.target.value})}
                onBlur={handleEmailError}
                onFocus={() => setShowEmailErrorText(false)}
              />
              <Typography color={'red'} sx={{ fontWeight: '400', fontSize: '15px' }}>
                {showEmailErrorText && "please enter a valid email"}
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

            <Typography> 

              Already a member ?
              <Link to='/Employee/LogIn'>
                 Log In  
              </Link>

            </Typography>
            
            <Button disabled={disabled} onClick={(e) => handleSubmit(e)} height="40px" width="330px" padding="10px" variant="contained">
              
                  Sign Up
                
            </Button>
        </Box>
        
       
      </Grid>
    </Grid>
  )
}

export default EmployeeSignUp