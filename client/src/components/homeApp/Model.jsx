import React from "react";
import ThreeSixty from "react-360-view";

function Model() {
  return (
    <div className="App">
      <h1>Hello Model</h1>
      <ThreeSixty
        amount={1}
        imagePath="../../../public/images" 
        fileName="img-{index}.jpg?v1"
      />
  
    </div>
  );
}

export default Model;
