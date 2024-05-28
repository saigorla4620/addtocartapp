import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
    const cartproducts = useSelector(state=>state.cart)

    
  return (
    <div>
        <nav className='container-fluid bg-info d-flex justify-content-between' style={{height:"60px"}}>
            <div><h2 className='ms-2'>Fake Store</h2></div>
            
            <div className='options '>
                <ul className='d-flex' type='none'>
                   <Link to="/addtocartapp"><li className='btn btn-link text-decoration-none link-dark'>Home</li></Link> 
                    <li><a href="#" className='btn btn-link text-decoration-none link-dark'>Electronics</a></li>
                    <li><a href="#" className='btn btn-link text-decoration-none link-dark'>Jewelery</a></li>
                    <li><a href="#" className='btn btn-link text-decoration-none link-dark'>Men`s Fashion</a></li>
                    <li><a href="#" className='btn btn-link text-decoration-none link-dark'>Women`s Fashion</a></li>
                </ul>
            </div>
            <div className='icons me-5  mt-2'>
            
                <span className='bi bi-search p-2 btn'></span>
                <span className='bi bi-heart-fill p-2 btn'></span>
                <span className='bi bi-person p-2 btn'></span>
               <Link to="/cartitems"><button className='btn btn-light position-relative'>
                <span className='bi bi-cart p-2 '></span>
               <span className='badge rounded-circle bg-danger position-absolute'>{cartproducts.length}</span>
                </button></Link> 
            </div>
        </nav>
      
    </div>
  )
}

export default Nav
