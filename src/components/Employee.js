import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { allEmployee } from '../database/database'
import '../css/Employee.css'


const Employee = () => {
    const [user, setuser] = useState([])
    const employeeId=Number(useParams().id)
    useEffect(()=>{
        const result=allEmployee.filter(user=>{
            return  user.id === employeeId
        })
        setuser(result[0])
    },[])
  return (
   <div className='Employee'>
     <div className="img"><img src={user.img} alt="" /></div>
    <div className="info">
        <p>{user.name}</p>
        <p className='vertical'></p>
        <p>{user.level}</p>
        <p className='vertical'></p>
        <p>{user.jobposition}</p>
    </div>
    <div className="wrapper">
    <div className="deduction">
        <h2>Deductions</h2>
       <div>
       </div>
        <div className="container">
            <h4>Tax</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.tax}</p>
            </div>
        </div>
        <div className="container">
            <h4>Pension</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.pension}</p>
            </div>
        </div>
        <div className="container">
            <h4>Utility (water)</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.utility}</p>
            </div>
        </div>
        <div className="container">
            <h4 className='laptop'>Nigerian health insurance scheme</h4>
            <h4 className="mobile">Nhis</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.nhis}</p>
            </div>
        </div>
        <div className="container total">
            <h3>Total deduction</h3>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.totalDeduction}</p>
            </div>
        </div>
    </div>
    <div className="verticalLine"></div>
    <div className="earnings">
        <h2>Earnings</h2>
        <div className="container">
            <h4>Housing Allowance</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.house}</p>
            </div>
        </div>
        <div className="container">
            <h4>Clothing Allowance</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.cloth}</p>
            </div>
        </div>
        <div className="container">
            <h4>Transportation Allowance</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.tp}</p>
            </div>
        </div>
        <div className="container">
            <h4>Earning (before tax)</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.earningBeforeTax}</p>
            </div>
        </div>
        <div className="container">
            <h4>Earning (after tax)</h4>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.salary}</p>
            </div>
        </div>
        <div className="container total">
            <h3>Total earnings</h3>
            <div className="price">
                <p>&#8358;</p>
                <p>{user.salary}</p>
            </div>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Employee