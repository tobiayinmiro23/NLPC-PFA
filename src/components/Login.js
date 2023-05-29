import React,{useState} from 'react'
import { allEmployee } from '../database/database'
import { Link} from 'react-router-dom';

const Login = () => {
    const [id, setid] = useState(0)
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const handleSearch=(e)=>{
        e.preventDefault()

        console.log(username,password)
        // if(search !== ''){
          const result=allEmployee.filter(item=>{
              return  item.jobposition === username  && item.level === Number(password)
          })
          setid(result[0].id)
          console.log(result)
          if (result.length === 0){
            // setnoResult(true)
            e.preventDefault()

        } 
            
        // }
     }
  return (
    <div className='Login'>
        <h1>Login</h1>
        <div>
            <input type="text" onInput={(e)=>setusername(e.target.value)} placeholder='position' />
            <input type="password" onInput={(e)=>setpassword(e.target.value)} placeholder='level' />
            <Link to={`/employee/${id}`} onClick={(e)=>handleSearch(e)}><button  className="view">Login</button></Link>
        </div>
    </div>
  )
}

export default Login