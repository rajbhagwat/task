import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from "yup"
export default function Login() {
        const formik = useFormik({
            initialValues :{
                email: "",
                password : ""
            },
            validationSchema: yup.object({
                email:yup.string().email("this is not valid").required("can not be empty"),
                password:yup.string().required("password can not be empty")
              }),
              onSubmit :  () => {
                // e.preventdefault()
                console.log("formik.value",formik.values);
              }
            })
  return (
    <div style={{backgroundColor : "whitesmoke" , height : "100%",  position : "relative"  }} className="d-flex justify-content-between">
            <div style={{backgroundColor : "#1affa3" , height : "100vh" , paddingTop:"10%" , width : "30%", position : "absolute"}}>
                <div style={{backgroundColor : "#1affa3    " , height : "70vh" , width : "50%", marginLeft : "50%", border : "1px ",  padding: "25px", boxShadow: "1px 2px 10px 0px black" }}>
                  <img src={"/images/carlogo.jpg"} className='img-fluid rounded-pill' alt="" width="200" height="200"  />
                  <h5 style={{textAlign:"center", margin:"auto -10%"}}>CleanMyCar</h5>
                   <p style={{margin:"auto -10%",paddingTop:"30%", textAlign:"center"}} >India's first waterless car cleaning company</p> 
                </div>
            </div>
            <div style={{backgroundColor : "white" , height : "100vh" , width :  "100%", paddingTop:"10%" }}>
            <div style={{backgroundColor : "whitesmoke" , height : "70vh" , width : "80%" , border : "5px solid whitesmoke ", boxShadow: "1px 2px 10px 0px black", margin:"0 auto"  }}>
            <h6 className="card-title" style={{textAlign: 'end'}}>Need Help?</h6>
            <br />
                <div className="card"  style={{width: '20rem',  backgroundColor : "whitesmoke", margin : "0 auto%", position : "absolute"  , border : "1px " , borderRadius : "25px" }}>
                </div>
                <div className="row">
					        <div className="card" style={{margin:"auto 30%",width:"60%"}}>
						        <div className="card-body">
                     <div className="card-header" style={{textAlign: "center"}}>Login</div>

					          	<form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email"name='email' className='form-control' id='email' aria-describedby="emailHelp" placeholder='john@gmail.com' onChange={formik.handleChange} value={formik.values.email} />
                              <label htmlFor="">{formik?.errors.email}</label>
                            </div>
                            <div className="form-group">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="password" className="form-control" id="password" placeholder="Enter your Password" onChange={formik.handleChange} value={formik.values.password} />
                             <label htmlFor="">{formik?.errors.password}</label>
                           </div>
                           <div className="form-check">
                           <label className="form-check-label float-right"  htmlFor="remember">
                            <Link to={"/"} >forget Password</Link>
                          </label> 
                        </div> <br />
                        <button type="submit" className="btn btn-primary form-control ">Login</button>
                          </form>
						          </div>
					          </div>
				          </div>
                </div>
              </div>
            </div>
  )
}