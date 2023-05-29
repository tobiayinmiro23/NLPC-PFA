import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { allEmployee } from '../database/database'
import '../css/Home.css'
const Home = () => {
    const [allEmployees, setallEmployees] = useState(allEmployee)
    const [allEmployeesBackup, setallEmployeesBackup] = useState(allEmployee)
    const [search,setsearch]=useState('')
    const [noResult, setnoResult] = useState(false)
    // function for searching for an employee record
   const handleSearch=()=>{
      if(search !== ''){
        const result=allEmployees.filter(item=>{
            return  item.name.trim().toLowerCase().includes(search.toLowerCase())
        })
        setallEmployees(result)
        if (result.length === 0) setnoResult(true)
      }
   }

    // function to cancel search for an employee record
   const handleCancelSearch=()=>{
        setallEmployees(allEmployeesBackup)
        setnoResult(false)
   }

    // function to delete an employee record
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
                    <h2>NLPC PFA</h2>
                    <div className="headindInfo">
                    <div className="img notification"><img src="/image/bell.png" alt="" /></div>
                    <div className="admin">
                        <h4>Afolabi james</h4>
                        <div className="img"><img src="/image/admin.jpeg" alt="" /></div>
                    </div>
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
                            <th>No </th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Position</th>
                            <th>Actions</th>
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
                             <div className='noResult'> 
                                <h2>Oops, looks like we could not find any result</h2>
                                <div className='noResultImg'><img src="/image/undraw_No_data_re_kwbl.png" alt="no result" /></div>
                                <div className="btnContainer"><button onClick={handleCancelSearch}>Cancel search</button></div>
                            </div>
                        }
                </main>
                {/* <h1>home</h1> */}
            </div>
   </div>
  )
}

export default Home