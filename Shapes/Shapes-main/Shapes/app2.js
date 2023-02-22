
import React from 'react';
    class cuboid extends React.Component{
        render(){
            var length=10;
            var breadth=10;
            var height=10;
            return(
               <>
               <h1>Cuboid: { length*breadth*height}</h1>
               </>
                
                );
        }
    }

export default cuboid;