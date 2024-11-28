import { useEffect, useState } from "react"
import { Product } from "../models/product";
import Catalog from "../../features/Catalog";
import Header from "./Header";
import { Container, CssBaseline } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
       id : prevState.length + 101,
       name : 'product' + (prevState.length + 1), 
       description  : 'some description',
       pictureUrl : 'http://picsum.photos/150',
       brand : 'some brand',
       price: (prevState.length * 100 + 100)
      }])
  }
 
  return (
    <div>
      <CssBaseline />
       <Header />
       <Container>
        <Catalog products={products} addProduct={addProduct}/>
       </Container>
      
    </div>
  )
}

export default App
