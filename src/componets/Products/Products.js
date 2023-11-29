import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Products = () => {
    const { data } = useContext(DataContext);

    return (
        <div className="products-container">
            {data.map((product) => (
                <div key={product.id} className="card">
                    <img src={product.img} alt="img-product-card" />
                    <h3>{product.name}</h3>
                    <h4>{product.price}$</h4>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
