import React from "react";
class sphere extends React.Component{
    render(){
        var r=5;
       return(
        <h1>Sphere: {(4*Math.PI*Math.sqrt(r)).toPrecision(4)}</h1>
       );
       
    }
}
export default sphere;