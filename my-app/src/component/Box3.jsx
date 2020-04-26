import React from 'react';
import Box4 from "./Box4"


class Box3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <div class="box3">
            <Box4></Box4>
            <Box4></Box4>
        </div>;
    }
}
export default Box3;