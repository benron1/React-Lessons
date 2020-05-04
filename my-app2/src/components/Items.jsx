import React from "react";
import { withRouter } from "react-router-dom"


function ParamsExample(props) {
    const { products, match } = props
    console.log(products)
    console.log(match)
    console.log(match.params.ProductId)

    return (
        // match = take the number from the url 
        <div>
            {match.params.ProductId === "1" && <div><h1>Iphone</h1> <p>The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system (OS), and as of 2017, there were 2.2 million apps available for it through the Apple App Store, according to Statista.</p></div>}
            {match.params.ProductId === "2" && <div><h1>IPad</h1><p>The iPad is a tablet computer developed by Apple. It is smaller than a typical laptop, but significantly larger than the average smartphone. The iPad does not include a keyboard or a trackpad, but instead has a touchscreen interface, which is used to control the device.</p></div>}
            {match.params.ProductId === "3" && <div><h1>IPod</h1><p>The iPod is a portable music player developed by Apple Computer. Though it is an Apple product, the iPod can be used with both Macs and PCs. The iTunes software, also created by Apple, is used to organize and transfer songs and playlists to the iPod.</p></div>}
        </div>
    );
}

export default withRouter(ParamsExample) 