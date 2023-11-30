import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
    const { data, cart, setCart } = useContext(DataContext);
    const buyProducts = (product) => {
        console.log(product);
        setCart([...cart, product]);
    };

    return (
        <div className="products-container">
            {data.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.img} alt="img-product-card" />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button onClick={()=>buyProducts(product)}>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
