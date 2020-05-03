import React from "react";
import axios from "axios";
import { getData, DeleteID, postNewId } from "../lib/Api";

class AddToList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            formName: '',
            formAvatar: '',
            loading: true,
        };
    }

    async loadUsers() {
        const response = await axios.get(
            `https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`
        );
        this.setState({
            data: response.data,
            loading: false,
        });
    }


    async handleOnSubmit(event) {
        event.preventDefault();
        const { formName, formAvatar } = this.state;
        const response = await axios.post(`https://5dd14f8d15bbc2001448d07d.mockapi.io/products/`, {
            name: formName,
            avatar: formAvatar,
        }
        );
        console.log(response.data);
        this.loadUsers();
    }

    render() {
        const { formName, formAvatar, data, loading } = this.state;

        return (
            <>
                <form
                    onSubmit={(event) => {
                        this.handleOnSubmit(event);
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        value={formName}
                        id="name"
                        placeholder="name"
                        onChange={(event) =>
                            this.setState({ formName: event.target.value })
                        }
                    />
                    <input
                        type="text"
                        name="avatar"
                        value={formAvatar}
                        id="avatar"
                        placeholder="avatar"
                        onChange={(event) =>
                            this.setState({ formAvatar: event.target.value })
                        }
                    />
                    <button type="submit">New user</button>
                </form>
                {loading && <span>Loading...</span>}
                <ul>
                    {data.map((user) => (
                        <li key={user.id}>
                            <div>Id: {user.id}</div>
                            <div>Name: {user.name}</div>
                            <img src={user.avatar}></img>
                            {/* <button onClick={() =>this.deleteUser(item.id)}> Delete </button>  // how to call a function from another class? */}
                        </li>
                    ))}
                </ul>

            </>
        );
    }

}
export default AddToList;
