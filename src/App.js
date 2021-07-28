import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import "./style.css";

function App() {
  return (
    <div className="App">  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title" className="red">Your name here</h1>
    <br />
    
    <img src="/imageInPublic.jpg" alt="myimage" />
    <br />
    
    <img src={imageInSrc} alt ='imageInSrc' />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
    

    </div>
  );
}

export default App;
