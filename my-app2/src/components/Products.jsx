import React from "react";
import Item from './Items';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

export default function ParamsExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li key={"Iphone"}>
                        <img
                            style={{ height: "50px", margin: "10px" }}
                            src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4328337/original/fa70ad17e869095038ef43cdc54d2cf4.jpg"
                        />
                        <Link to="products/1">Iphone</Link>
                    </li>
                    <li>
                        <img
                            style={{ height: "50px", margin: "10px" }}
                            src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4636409/large/8c74c7ba7b90b16ef9ac6a85c4c47b02.jpg"
                        />
                        {" "}
                        <Link to="products/2">Ipad</Link>
                    </li>
                    <li>
                        <img
                            style={{ height: "50px", margin: "10px" }}
                            src="https://img.wisebuy.co.il/data/MPeg3/nano_4.jpg"
                        />
                        {" "}
                        <Link to="products/3">Ipod</Link>

                    </li>
                </ul>

                <Switch>
                    {/* <Route path="/:id" children={<Child />} /> */}
                </Switch>
            </div>
        </Router>
    );
}

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}