import React, {useState} from "react"
import './App.css';
import {FaSearch} from "react-icons/fa"
import {HiOutlineMenu} from "react-icons/hi";
import Image from "./image";

function App() {
  const [value,setvalue] = useState("pet");
  const [results,setResults]=useState([]);
  const fetchImages =()=>{
    fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESSKEY}&query=${value}&count=0`)
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      setResults(data.results)
    })
  }
  return (
    <div className="App">
          <nav>
            <div className="logo">Imagegallery</div>
            <div className="search-box">
              <input 
              type="text" 
              placeholder="search image" 
              value={value} 
              onChange={(e) => setvalue(e.target.value)}/>
              <button onClick={()=>{fetchImages()}}><FaSearch/></button>
            </div>
            <ul className="giri">
              <li>Explore</li>
              <li>collections</li>
              <li>dark mode</li>
              <div className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                      </div>
            </ul>
            <div className="menu" id="chk1">
                        <HiOutlineMenu/>
                </div>

      </nav>
      {!results ? (
        <h2>Loading........</h2>
      ) : (
      <div className="gallery">
        {
          results.map((item,index) =>{
            return <Image key={item.id} {...item}/>
          })
        }
      </div>
      )}
    </div>
  );
}

export default App;
