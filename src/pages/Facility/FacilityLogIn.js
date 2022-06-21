import React, {useState, useEffect} from 'react'
import { Grid, Typography, Box, TextField, Button } from '@mui/material';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const FacilityLogIn = () => {

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [showEmailErrorText, setShowEmailErrorText] = useState(false);
  const [showPasswordErrorText, setShowPasswordErrorText] = useState(false);

  const [state, setState] = useState({
    email: "",
    password: ""
  });


  const [error, setError] = useState({
    email: false,
    password: false
  })


  const handleEmailError = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    const { email, password } = state;
    if (email === "" || password === "" || password.length < 1 || error.email){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  },[state, error]);



  const handleSubmit = async(e) => {
     e.preventDefault();

      try{
        const response = await axios.post("https://gadahealth-app.herokuapp.com/auth/login", state,
        {
          header:{ "Content-Type": "application/json"}    
        },
      )

        if (response.status === 200){
          navigate("/Facility/Dashboard");
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

            <Typography> Do you have account ?
              <Link to='/Facility/Signup'>
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
export default FacilityLogIn;
