import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { uploadFile } from './Services/api'
function App() {
  const [count, setCount] = useState(0)
  const log="https://helpdeskgeek.com/wp-content/pictures/2019/04/share-files.png"
 const [file,setFile]=useState('');
 const fileInputRef=useRef();
 const onUpload=()=>{
  fileInputRef.current.click();
 }
 const[result,setResult]=useState('');
 useEffect(()=>{
   const getImage=async()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file);

     let response= await uploadFile(data);
     setResult(response.path);
    }
   }
   getImage();
 },[file])
  return (
    <>
      
        <div className="container"></div>
        <div className="wrapper">
          <h1>File Share</h1>
          <br></br>
          
          <h2>Upload The File </h2>
          <h3>Share The Download Link</h3>

      
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
          <button onClick={()=> onUpload()}>Upload File</button>
          <br></br>
          <input type="file"
          style={{display:'none'}}
          ref={fileInputRef}
          onChange={(e)=>setFile(e.target.files[0])}/>
       <a href={result} target="_blank">{result}</a>
        </div>
      
      
    </>
  )
}

export default App
