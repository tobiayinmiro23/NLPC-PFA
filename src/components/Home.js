import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import '../css/Home.css'
const Home = ({setallEmployees,allEmployees}) => {
    const [Employees, setEmployees] = useState(allEmployees)
    const [search,setsearch]=useState('')
    const [noResult, setnoResult] = useState(false)
    const [Results, setResults] = useState(false)

    // function to search for an employee record
   const handleSearch=()=>{
      if(search !== ''){
        const result=Employees.filter(item=>{
            return  item.name.toLowerCase().includes(search.trim().toLowerCase())
        })
        setEmployees(result)
        if (result.length === 0){
            setResults(false)
            setnoResult(true)
        }else{
            setResults(true)
        }
      }
   }

    // function to cancel search for an employee record
   const handleCancelSearch=()=>{
        setsearch('')
        setEmployees(allEmployees)
        setnoResult(false)
        setResults(false)
   }

    // function to delete an employee record
   const handleDelete=(id)=>{
        const result=Employees.filter(item=>{
            return  item.id !== id
        })
        setEmployees(result)
        setallEmployees(result)
   }

  return (
   <div>
            <div className='Home'>
                <nav>
                    <h2>NLPC PFA</h2>
                    <div className="headindInfo">
                    <div className="img notification"><img src="/image/bell.png" alt="bell" /></div>
                    <div className="admin">
                        <h4>Afolabi james</h4>
                        <div className="img"><img src="/image/admin.jpeg" alt="admin" /></div>
                    </div>
                    </div>
                </nav>
                <main>
                    <div className='searchContainer'>
                        <div>{Results && <div className="img" onClick={handleCancelSearch}><img src="/image/back.png" alt="back" /></div>}</div>
                        <div className='search'>
                            <input type="text" value={search} placeholder='type name' onInput={(e)=>setsearch(e.target.value)}/>
                            <button onClick={handleSearch} >Search</button>
                        </div>
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
                                    Employees.map(item=>{
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
            </div>
   </div>
  )
}

export default Home
