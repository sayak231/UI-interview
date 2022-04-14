import React, { useEffect } from "react";

// class ClassComponent extends React.Component {
//   constructor(props) {
//     // super(props);
//     this.newArray = [1];
//     console.log(props);
//   }

//   componentDidMount() {
//     this.newArray.push(2);
//   }

//   render() {
//     console.log(props); // Without super(props), this will be not defined - error
//     return (
//       <div>
//         <h1 className="count">Class Component - {this.newArray[1]}</h1>
//       </div>
//     );
//   }
// }

// export default ClassComponent;

const FunctionalComponent = () => {
  const newArray = [1];
  useEffect(() => {
    newArray.push(2);
  }, []);
  return <h1>FunctionalComponent - {newArray[newArray.length - 1]}</h1>;
};

export default FunctionalComponent;
