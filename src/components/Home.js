import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { allEmployee } from '../database/database'
import '../css/Home.css'
const Home = () => {
    const [allEmployees, setallEmployees] = useState(allEmployee)
    const [allEmployeesBackup, setallEmployeesBackup] = useState(allEmployee)
    const [search,setsearch]=useState('')
    const [noResult, setnoResult] = useState(false)
   const handleSearch=()=>{
      if(search !== ''){
        const result=allEmployees.filter(item=>{
            return  item.name.toLowerCase().includes(search.toLowerCase())
        })
        setallEmployees(result)
        if (result.length === 0) setnoResult(true)
      }
   }
   const handleCancelSearch=()=>{
        setallEmployees(allEmployeesBackup)
        setnoResult(false)
   }

   const handleDelete=(id)=>{
        const result=allEmployees.filter(item=>{
            return  item.id !== id
        })
        setallEmployees(result)
        setallEmployeesBackup(result)
   }

  return (
   <div>
            <div className='Home'>
                <nav>
                    <div className="heading">
                        <div className="img"><img src="/image/user.png" alt="" /></div>
                        <h2>NLPC PFA</h2>
                    </div>
                    <div className="admin">
                        <h4>Afolabi james</h4>
                        <div className="img"><img src="/image/user.png" alt="" /></div>
                    </div>
                </nav>
                <main>
                    <div className='search'>
                        <input type="text" value={search} placeholder='type name' onInput={(e)=>setsearch(e.target.value)}/>
                        <button onClick={handleSearch} >Search</button>
                    </div>
                    <table >
                    <thead>
                        <tr>
                            <th><td>No</td> </th>
                            <th><td>Name</td></th>
                            <th><td>Level</td></th>
                            <th><td>Position</td></th>
                            <th><td>Actions</td></th>
                        </tr>
                    </thead>
                        <tbody>
                                {
                                    allEmployees.map(item=>{
                            return    <tr key={item.id}>
                                            <td><h5>{item.id}</h5></td>
                                            <td>{item.name}</td>
                                            <td>{item.level}</td>
                                            <td>{item.jobposition}</td>
                                            <td><button onClick={()=>handleDelete(item.id)} className="delete">Delete</button></td>
                                            <td><Link to={`/employee/${item.id}`}><button  className="view">View</button></Link></td>
                                        </tr>
                                    })
                                }
                            
                        </tbody>
                    </table>
                        {
                            noResult &&
                             <div> 
                                <h2>no result</h2>
                                <button onClick={handleCancelSearch}>Cancel search</button>
                            </div>
                        }
                </main>
                {/* <h1>home</h1> */}
            </div>
   </div>
  )
}

export default Home