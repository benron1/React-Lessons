import React from "react";
import axios from "axios";
import { getData, DeleteID, postNewId } from "../lib/Api";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    componentDidMount() {
        this.loadData();

    }

    async loadData() {
        getData().then((response) => {
            this.setState({
                data: response.data,
                loading: false,
            });
            console.log("response.data");
            console.log(response.data);
        });
        console.log("this.state.data");
        console.log(this.state.data);
    }

    async deleteUser(id) {
        const deleteuser = await DeleteID(id).then(() => { this.loadData() })
        console.log("clicked")
    }



    render() {
        return (
            <div>
                <ul>
                    {this.state.loading && <span>Loading...</span>}
                    {this.state.data.map((item) => (
                        <li key={item.id}>
                            <div>Id: {item.id}</div>
                            <div>Name: {item.name}</div>
                            <img src={item.avatar}></img>
                            <button onClick={() => this.deleteUser(item.id)}> Delete </button>
                        </li>
                    ))}
                </ul></div>
        );
    }
}



export default List;
