// import logo from './logo.svg';
import './App.css';
import About from './componets/about';
import Navbar from './componets/Navbar';
import TextForm from './componets/textForm';

function App() {
  return (
    <>
<Navbar title="React Js" About="About us" joo="Contact"/>
<div className="container">
<TextForm text = "Enter Your Text Below"/>
</div>
<About/>
</>
  );
}
export default App;
  