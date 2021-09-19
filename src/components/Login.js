import { FormControl, FormGroup, InputLabel,Input,Button,Typography} from "@mui/material"
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import e from "cors";
const useStyle = makeStyles({
    root:{
        width:'30%',
        marginTop:100,
        margin:'5% 0 0 35%',
        '& > *':{
            marginTop:20
        },
    }
})
const Login = () =>{
    
 const adminUser ={
     email: "admin@gmail.com",
     password: "admin123"
 }

    const [email,setEmail] =useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = () =>{
     if (email !== "" && password !=="") {
        localStorage.setItem('userEmail', email);
        sessionStorage.setItem('userEmail', email);
        history.push('/dashboard')
     }    
    }
    
    const classes = useStyle();
    


    return(
       <FormGroup className={classes.root}>
           <Typography variant="h4">Login Here</Typography>
           <FormControl onChange={(e) =>setEmail(e.target.value)}>
               <InputLabel>Email</InputLabel>
               <Input type="email" name='email' id='email' />
           </FormControl>
           <FormControl onChange={(e) =>setPassword(e.target.value)}>
               <InputLabel>Password</InputLabel>
               <Input type="password"  name='password' id='password'/>
           </FormControl>
           <Button type="submit" variant="contained"  color="primary" onClick={handleLogin}> Login </Button>
       </FormGroup>
    )
}

export default Login





