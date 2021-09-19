import { FormControl, FormGroup, InputLabel,Input,Button,Typography} from "@mui/material"
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { addProduct } from "../Service/api";
import { useHistory } from "react-router";

const useStyle = makeStyles({
    root:{
        width:'70%',
        marginTop:100,
        margin:'5% 0 0 15%',
        '& > *':{
            
            marginTop:20
        },
    }
})

const initialValue ={
    name:'',
    model:'',
    price:''
}

const AddProduct = () =>{
    const [ product, setProduct ] = useState(initialValue);
    const{name, model, price, profit} = product;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) =>{
        setProduct({...product,[e.target.name]: e.target.value}) //Setting the product name from user Input
     }

     const addProductDetails = async () => {
         await addProduct(product);
         history.push('./AllProducts')
     }

    return(
       <FormGroup className={classes.root}>
           <Typography variant="h4"> Add Product</Typography>
           <FormControl >
               <InputLabel>Product Name</InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='name' value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>Product Model</InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='model' value={model}/>
           </FormControl>
           <FormControl>
               <InputLabel>Product Price</InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='price' value={price}/>
           </FormControl>
           <FormControl>
               <InputLabel>Profit Percentege</InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='profit' value={profit}/>
           </FormControl>
           <Button variant="contained" onClick ={() => addProductDetails()} color="primary"> Add Product </Button>
       </FormGroup>
    )
}

export default AddProduct
