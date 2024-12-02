import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog(){ 
    
    const [products, setProducts] = useState<Product[]>([
    ]);
  
    useEffect(() => {
      fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
    }, [])
  
    // function addProduct(){
    //   setProducts(prevState => [...prevState, 
    //     {
    //      id : prevState.length + 101,
    //      name : 'product' + (prevState.length + 1), 
    //      description  : 'some description',
    //      pictureUrl : 'http://picsum.photos/150',
    //      brand : 'some brand',
    //      price: (prevState.length * 100 + 100)
    //     }])
    // }
  
    return (
        <>
            <ProductList products = {products} />
            {/* <Button variant="contained" onClick={addProduct}>Add Product</Button> */}
        </>
       
    );
}