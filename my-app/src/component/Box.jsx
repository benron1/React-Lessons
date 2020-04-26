import React from 'react';
import Box2 from "./Box2"


class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div class="box1">
            <Box2></Box2>
        </div>;
    }
}
export default Box;