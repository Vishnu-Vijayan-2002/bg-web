import { useState,useEffect} from 'react'
import './App.css'
function App() {
  const [color,setColor]=useState("bg-info")
  const click=(color)=>{
    setColor(color)
  }
  useEffect(()=>{
   document.body.className= color
  },[color])
  return (
    <div style={{height:'100vh'}} className='main d-flex justify-content-center align-items-center  flex-column text-light'>
      <h1>Background Color Change</h1>
      <div className='btn-container d-flex'>
      <button onClick={()=>{click("bg-danger")}} className='btn' style={{borderRadius:'15px',width:'100px',marginLeft:'10px',backgroundColor:'white',color:'black'}}>Red</button>
      <button onClick={()=>{click("bg-success")}} className='btn btn-light' style={{borderRadius:'15px',width:'100px',marginLeft:'10px'}}>Green</button>
      <button onClick={()=>{click("bg-warning")}} className='btn btn-light' style={{borderRadius:'15px',width:'100px',marginLeft:'10px'}}>Yellow</button>
      <button onClick={()=>{click("bg-primary")}} className='btn btn-light' style={{borderRadius:'15px',width:'100px',marginLeft:'10px'}}>Blue</button>
      </div>
    </div>
  )
}

export default App
