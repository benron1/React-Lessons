import React from 'react';
// import './App.css';

function UserItem(props) {
    const { name, imageUrl, href, imglink } = props;
    return (
        <li className="user-item">
            <span>{name}</span>
            <a href={href}><img className="user-image" src={imageUrl} alt={name} /></a>
            <a style={{ color: "white" }} href={imglink}>Google Maps</a>

        </li>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ul className="users-list">
                    <UserItem name={"London"} imageUrl={"https://lh3.googleusercontent.com/proxy/BUPx354U_mCpEME51I-7_RqACXpm5ZQCL_oIySS0Ah0Clo8MZXL07TRi741RNr1uL6LQK2JQl0KPxXWfHlTBuhDopO-l7b6bgJNtxLv5j1VQxufy9f2C22JYmA-F6Q"} href={"https://goo.gl/maps/tVdKMfRNCPXp5Lwm7"} imglink={"https://goo.gl/maps/tVdKMfRNCPXp5Lwm7"} />
                    <UserItem name={"Paris"} imageUrl={"https://en.parisinfo.com/bundles/otcpotcp/images/paris_380x244.jpg"} href={"https://goo.gl/maps/pzRbMossvVYNtiDJ6"} imglink={"https://goo.gl/maps/pzRbMossvVYNtiDJ6"} />
                    <UserItem name={"Madrid"} imageUrl={"https://cdn.budgetyourtrip.com/images/photos/articles/small/spain_madrid.jpg"} href={"https://goo.gl/maps/h1ZDLTKCapw5zZBv9"} imglink={"https://goo.gl/maps/h1ZDLTKCapw5zZBv9"} />
                    <UserItem name={"Amsterdam"} imageUrl={"https://www.fodors.com/wire/rs-bikes.jpg"} href={"https://goo.gl/maps/jm6vfurnxLnibNucA"} imglink={"https://goo.gl/maps/jm6vfurnxLnibNucA"} />

                </ul>
            </header>
        </div>
    );
}

export default App;
