// πr(r + l)
import React from "react";
 class cone extends React.Component{
     render(){
        var l=30;
        var rad=this.props.r;
     return(
        <>
        <h1>Cone : {((Math.PI)*rad*(rad+l)).toPrecision(5)}</h1>
        </>
     );
     }
 }
 export default cone;