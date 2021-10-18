
import './App.css';
import Profilecomponent from './profile/profilecomponent';
//import photo from "./profilePhoto.jpg";

function App() {
  const alertName=(name)=>alert (name);
  return (
    <div className="App">
      <Profilecomponent 
      fullName="Med hichem Lemsi"
      bio="Engineer"
      profession="web Dev"
      alertName={alertName}>
        {/* /* <img src={photo} alt="profileimg" style={{ width: 100 }} /> */} 
        </Profilecomponent>
    </div>
  );
}

export default App;
