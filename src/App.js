import React, { useEffect } from "react";
// import Car from "./Car.js"
// class Header {
//   changeColor = () => {
//     document.getElementById("demo").innerHTML += this;
//   }
// }

// const myheader = new Header();

// Ensure the DOM is fully loaded before adding event listeners
// window.addEventListener("load", () => {
//   // Check if the elements exist before adding event listeners
//   const btn = document.getElementById("btn");
//   const demo = document.getElementById("demo");

//   if (btn && demo) {
//     // The window object calls the function:
//     myheader.changeColor();

//     // A button object calls the function:
//     btn.addEventListener("click", myheader.changeColor);
//   } else {
//     console.error("Element with ID 'btn' or 'demo' not found.");
//   }
// });
// const data = [
//   { name: "Nuri", age: 28, city: "HO" },
//   { name: "Talib", age: 82, city: "HN" },
//   { name: "Jenny", age: 41, city: "IT" },
// ];
// const mylist = ["Nuri", "Talib", "Jenny"];
// const list = mylist.map((item,i) => <p key={i}>{item}</p> );
// const myCar = Car();

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       favoritecolor: "red",
//       year: 1964,
//       isActive: false,
//       show: true,
//     };
//     // this.changeColor = this.changeColor.bind(this);
//   }
//   delRender = () => {
//     this.setState({show: false});
//   }
//   changeColor = () => {
//     if (this.state.favoritecolor === "purple") {
//       this.setState({favoritecolor: "sieu nhan quang trung"});
//     } else {
//       this.setState({favoritecolor: "purple"});
//     }
//   };
//   render() {
//     // let myCar;
//     // if (this.state.show) {
//     //   myCar = <Model />;
//     // };
//     return (
//       <div>
//         {/* {myCar} */}
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.favoritecolor} {this.state.model} from {this.state.year}.
//         </p>
//         <button
//           disabled={this.state.isActive}
//           onClick={this.changeColor}
//           type="button"
//         >
//           change_color
//         </button>
//         <div id="div1"></div>
//         <div id="div2"></div>
//         <div>--------------------------------</div>
//         <div id="div3"></div>
//         <div id="div4"></div>

//         <button type="button" onClick={this.delRender}>Delete Render</button>
//       </div>
//     );
//   }
//   static getDerivedStateFromProps(props, state) {
//     if (state.favoritecolor === "red") {
//       return { favoritecolor: props.favcol };
//     }
//     return null; // No state update
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   shouldComponentUpdate() {
//     return true;
//   }
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML =
//     "Before the update, the favorite was " + prevState.favoritecolor;
//     document.getElementById("div3").innerHTML =
//     "Before the update, the favorite was prevProps " + prevProps.brand;
//     return null;
//   }
//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//     document.getElementById("div4").innerHTML =
//     "The updated favorite is " + this.state.brand;
//   }
//   }

// class Model extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       brand: "Ford",
//       model: "hi",
//       color: "red",
//       year: 1964,
//     };
//   }
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render = () => {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}.
//         </p>
//         <p>
//           {this.xi} +++++ {this.mo}
//         </p>
//         <button onClick={this.changeColor} type="button">change_color</button>
//       </div>
//     );
//   }
// }
  //   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}.
//         </p>
//         <p>
//           {this.xi} +++++ {this.mo}
//         </p>
//         <button onClick={this.changeColor} type="button">change_color</button>
//       </div>
//     );
//   }
//   changeColor = () => {
//     this.setState({ color: "purple" });
//   };
// }
// const model = new Car();
// console.log(model.render());
const myNumber = [1, 2, 3, 4, 5,-223, 6, 7, 8, 9, 10,-23];
const regNumber = myNumber.filter((number) => number > 5);
function Display({ some }) {
  useEffect(() => {
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.innerHTML = some;
    } else {
      console.error("Element with ID 'demo' not found.");
    }
  }, [some]);

  return null;
}
// async function myFunction() {return "Hello";}

// myFunction().then(
//   function(value) {myDisplayer(value);},
// myDisplayer(regNumber);
// );
// Display(regNumber);

// function removeNumber(number, callsback) {
//   const result = [];
//   for (let i of number) {
//     if(callsback(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
function App() {
  const [name, setName] = React.useState("Nuri");
  // const infoData = this.props.info;
  // const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
  console.log(name);
  return (
    <div>
      <p id="demo"></p>
      <Display some={regNumber} />
      <input type="search" onChange={(e) => setName(e.target.value)}></input>
      <div>{name}</div>
    </div>
  );
}

export default App;
