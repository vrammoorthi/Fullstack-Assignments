
import React from "react";
class RectangularPrism extends React.Component{
    render(){
        var length=10;
        var width=20;
        var height=12;
        return (
            <>
           <h1>RectangularPrism:{ 2*((width*length)+(height*length)+(height*width))}</h1>
            </>
            );
    }
}

export default RectangularPrism;