import React from "react";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 22,
            mainUrl: "https://5dd14f8d15bbc2001448d07d.mockapi.io/user/",
        };
    }

    componentDidMount() {
        this.getById();
        // this.handleDelete()
        // this.postNewId()
    }

    async getById() {

        const response = await axios.get(`${this.state.mainUrl}`);
        this.setState({ data: response });
        console.log("state.data:");
        console.log(this.state.data);
    }

    async handleDelete() {
        await axios
            .delete(
                `${this.state.mainUrl}${this.state.id}`
            )
            .then((response) => {
                console.log(response);
            });
    }

    async postNewId() {
        await axios
            .post(`${this.state.mainUrl}`, {
                name: "Ben Ron",
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return <div></div>;
    }
}

export default App;