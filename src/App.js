
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mood, setMood] = useState('light');
  const toggleMood = ()=>{
    if(mood==='light'){
      setMood('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mood enable", "success")
    }else{
      setMood('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mood enable", "success")
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" mood={mood} toggleMood={toggleMood} />
      <Alert alert={alert}/>
      <div className="container">
        <Textform headingOne="Enter the text below" headingTwo="Preview" mood={mood} showAlert={showAlert} />
      </div>
      <About heading="About TextUtils" mood={mood} />
      <Footer/>
    </div>
  );
}

export default App;
