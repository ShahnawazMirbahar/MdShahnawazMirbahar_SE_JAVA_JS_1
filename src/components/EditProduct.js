import { FormControl, FormGroup, InputLabel,Input,Button,Typography} from "@mui/material"
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import { editProduct, getProducts } from "../Service/api";
import { useHistory ,useParams } from "react-router";

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

const EditProduct = () =>{
    const [ product, setProduct ] = useState(initialValue);
    const{name, model, price , profit} = product;
    const{id} =useParams();
    const classes = useStyle();
    const history = useHistory();

    useEffect(()=>{
        loadProductData();
    }, []);

    const loadProductData = async() => {
       const response= await getProducts(id);
       setProduct(response.data);
    }

    const onValueChange = (e) =>{
        setProduct({...product,[e.target.name]: e.target.value}) //Setting the product name from user Input
     }

     const editProductDetails = async () => {
         await editProduct(id,product);
         history.push('../allproducts')
     }

    return(
       <FormGroup className={classes.root}>
           <Typography variant="h4"> Edit Product</Typography>
           <FormControl>
               <InputLabel></InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='name' value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel variant="standard"></InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='model' value={model}/>
           </FormControl>
           <FormControl>
               <InputLabel></InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='price' value={price}/>
           </FormControl>
           <FormControl>
               <InputLabel></InputLabel>
               <Input onChange ={(e)=>onValueChange(e)} name='profit' value={profit}/>
           </FormControl>
           <Button variant="contained" onClick ={() => editProductDetails()} color="primary"> Update </Button>
       </FormGroup>
    )
}

export default EditProduct