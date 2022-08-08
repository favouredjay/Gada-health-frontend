import React, {useState, useEffect} from 'react';
import { Grid, Typography, Box, TextField, Button, MenuItem } from '@mui/material';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



const FacilityType = [
    {
      value: 'hospital',
      label: 'Hospital',
    },

    {
      value: 'laboratory',
      label: 'Laboratory',
    },

    {
      value: 'pharmacy',
      label: 'Pharmacy',
    },

    {
      value: 'home Care',
      label: 'Home Care',
    },

    {
        value: 'x-ray',
        label: 'X-ray',

    },
    {
        value: 'others',
        label: 'Others',

    },
  ];


  const  FacilitySignUp = () => {

  //   const [type, setType] = React.useState('Hospital');

  // const handleChange = (event) => {
  //   setType(event.target.value);
  // };

  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [showNameErrorText, setShowNameErrorText] = useState(false);
  const [showEmailErrorText, setShowEmailErrorText] = useState(false);
  const [showPasswordErrorText, setShowPasswordErrorText] = useState(false);
  const [showFacilityTypeError, setShowFacilityTypeError] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    type: false,
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

  const handleFacilityTypeError = () => {
    var facilityTypeformat = /^[a-zA-Z\s]*$/;
    if (!state.facilityType.match(facilityTypeformat) && state.facilityType !== ""){
        setError({...error, facilityType: true});
        setShowFacilityTypeError(true);
    }else {
      setError({...error, facilityType: false});
      setShowFacilityTypeError(false);
    }
  }


  useEffect(() => {
    const { name, phone, email, password, type } = state;
    if ( name === "" || phone === ""|| email === "" || password === "" || password.length < 1 || type === ""){
      setDisabled(true);
    }else{
      setDisabled(false);
    }
  },[state]);


  const handleSubmit = async(e) => {
    console.log(e)
     e.preventDefault();

      try{
        const response = await axios.post("http://gadahealth-app.herokuapp.com/auth/facility/register/", state,
        {
          header:{ "content-type": "application/json"}     
        },
      )

        if (response.status === 200){
          navigate("/Facility/LogIn");
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

            <Box height=" 40px" width="340px" marginBottom='50px'>
                <TextField
                    select
                    required
                    label="Facility Type"
                    //value={type}
                    // onChange={handleChange}
                    helperText="Please select your facility type"
                    value={state.type}
                    onChange={(e) => setState({...state, type: e.target.value})}
                    onBlur={handleFacilityTypeError}
                    onFocus={() => setShowFacilityTypeError(false)}
                    >
                    {FacilityType.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                             {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography color={'red'} sx={{ fontWeight: '400', fontSize: '15px' }}>
                    {showFacilityTypeError && "Enter correct facility type"}
                </Typography> 
            </Box>

            <Typography> 

              Already a member ?
              <Link to='/Facility/LogIn'>
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

export default FacilitySignUp