import './App.css';
let name = "Bhushan";
function App() {
  return (
  <>
  <nav>
    <li> Home</li>
    <li> About</li>
    <li> Contact</li>
  </nav>
  <div className=" container">
    <p>
      <h1> Hello {name} </h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ducimus dolores est voluptate harum aut non praesentium iure eos delectus, id accusantium voluptatum a animi nobis doloribus recusandae maxime et.
    </p>
  </div>
  </>
  );
}

export default App;
