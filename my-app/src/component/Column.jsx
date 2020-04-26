import React from "react"

function Column(props) {

    const { imageUrl, title, text1, text2, text3 } = props;
    return (
        <span className="Main_column">
            <img className="image" src={imageUrl} />
            <h6>{title}</h6>
            <div className="text">{text1}</div>
            <div className="text">{text2}</div>
            <div className="text">{text3}</div>
        </span>
    );

}

function ColumnData() {
    return (
        <div className="ColumnData">
            {/* <header className="ColumnData-header"> */}
            {/* <div className="ColumnData-list"> */}
            <Column imageUrl={`${process.env.PUBLIC_URL}/img3.png`} title={"USER INTERFACE DESIGN"} text1={"USER INTERFACE DESIGN"} text2={"dss fgrgdr"} text3={"Lorem ipsum"} />
            <Column imageUrl={`${process.env.PUBLIC_URL}/img1.png`} title={"CONCEPT AND IDEAS"} text1={"USER INTERFACE DESIGN"} text2={"dss fgrgdr"} text3={"Lorem ipsum"} />
            <Column imageUrl={`${process.env.PUBLIC_URL}/img2.png`} title={"DESIGN AND BRANDING"} text1={"USER INTERFACE DESIGN"} text2={"dss fgrgdr"} text3={"Lorem ipsum"} />
            {/* </div> */}
            {/* </header> */}
        </div>
    );
}

export default ColumnData;
