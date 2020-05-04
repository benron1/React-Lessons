import React from "react";
import '../App.css';


const Products = () => {
    return (
        <ul className="product_list">
            <li>IPhone <img style={{ height: "60px" }} src="https://lh3.googleusercontent.com/proxy/PIpKpvIEBvDdits9Hq__rbliZVZAtM9ffeKYysf9WRZudDJfEJxC7b4ZXwjJSzJjvn8Fw7CJZTdmF5OiM04YJFfW_Op8mFUiD4PCtPlPVHkyvc-A_5is" alt="" /></li>
            <li>IPad <img style={{ height: "60px" }} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/rfb-ipad-pro10in-spacegray-wifi-2017?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1582330420693" alt="" /></li>
            <li>IPod <img style={{ height: "60px" }} src="https://storemobile.co.il/up/gallery/68495_6fg8.jpg" alt="" /></li>
        </ul>

    )
}
export default Products;