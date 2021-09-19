import { useEffect, useState } from "react";
import { deleteProduct,getProducts } from "../Service/api";
import { Table,TableCell,TableBody,TableRow,TableHead ,Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom'
const useStyle = makeStyles({
 root:{
     margin:'50px 0 0 50px',
     marginLeft:'10px'
 },
 thead:{
     '& > *':{
         background:'#F5F2D0',
         fontSize:20
     }
 },
});
const AllProducts= () => {
  const[products, setProducts] =useState([]);
  const classes = useStyle();

    useEffect(() => {
        getAllProducts();
    }, [] );

    const getAllProducts = async () =>
    {
       const response= await getProducts();
       setProducts(response.data);
    }
    
    const deleteProductData = async (id) => {
        await deleteProduct(id);
        getAllProducts();
    }

    return(
        <Table className={classes.root}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Profit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                   products.map(product => (
                    <TableRow>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.model}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.profit}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" style={{marginRight:10}} component={Link} to={`/edit/${product.id}`}>Edit</Button>
                            <Button variant="contained" color="warning" onClick={() => deleteProductData(product.id)}>Delete</Button>
                        </TableCell>
                        </TableRow>
                   ))
                }
            </TableBody>
        </Table>
    );

}
export default AllProducts;