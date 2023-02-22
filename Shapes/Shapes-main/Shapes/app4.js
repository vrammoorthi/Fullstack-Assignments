// 2πr(r + h)
import React from "react";

class cylinder extends React.Component{
    render(){
        var rad=this.props.r;
        var h=20;
     <h1>Cylinder:</h1>  
      return(
        <>
        <h1>Cylinder: {(2*Math.PI*rad*(rad+h)).toPrecision(6)}</h1> 
        </>
      );
        
        
    
}
}
export default cylinder;