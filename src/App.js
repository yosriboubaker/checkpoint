import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import img from './photo.jpg'

function App() {
  const name='yosri boubaker'
  const bio="junior wordpress developper"
  const profession="i work as a trainer in the gym"
  const alertMyName = name => alert(name);
  return (
    <div className="App">
     <Profile name={name} bio={bio} profession={profession} alertMyName={alertMyName}> 
     <img  style={{width:'150px',height:'150px',borderRadius:'50%',paddingTop:'50px'}} src={img}/>
     </Profile>
    </div>
  );
}

export default App;
