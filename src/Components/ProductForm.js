import React from "react";

const ProductForm = function ProductForm() {
    return (
        <div>
            <h1>Product details</h1>
            <form>
                <label>Enter Product id:</label>
                <input type="string"></input>

                <label>Enter Product name:</label>
                <input type="string"></input>

                <label >Enter selling Price:</label>
                <input type="number" id="sp"></input>
            </form>
        </div>      
    );
}

export default ProductForm;