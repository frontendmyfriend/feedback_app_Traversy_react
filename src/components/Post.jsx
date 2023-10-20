import { useParams } from "react-router-dom"
import { Navigate, useNavigate } from "react-router-dom"
import { BrowserRouter as Route, Routes } from "react-router-dom";


function Post() {

  const params = useParams();
  const status = 200

  const navigate = useNavigate()
  const  onClick = ()=>{
    console.log('Hello');
    navigate('/about')
  }
 
  if(status === 404){
    return <Navigate to= '/notfound'/>
  }

  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p>
      <button onClick={onClick}>Click and go Home</button>
      <Routes>
        <Route path="/show" element={<h1>Hello from post/*</h1>}/>
      </Routes>

    </div>
  )
}

export default Post