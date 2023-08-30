import React from 'react'
import { useFormik } from 'formik'
import { loginSchema } from '../schemas'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import '../App.css'

function Login() {

    const onSubmit = async (values,actions) => {
        await new Promise ((resolve)=>{
            setTimeout(resolve,1000)
        })
        actions.resetForm();
    }
  
    const {values,errors,isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema:loginSchema,
        onSubmit,
    });


  return (
    <div>
      <div className='loginPageMain'>
           <form onSubmit={handleSubmit}>
        
             <input 
             type="email" 
             value={values.email}
             id='email'
             onChange={handleChange}
             placeholder='Email Adresinizi Giriniz' 
             className={errors.email ? 'input-error' : ''}
             />
            {<p className='error'>{errors.email}</p>}
          
            <input 
               type="password"
                value={values.password}
                onChange={handleChange} 
                id='password' 
                placeholder='Şifrenizi Giriniz'
                className={errors.password ? 'input-error' : '' }
              />
                {<p className='error'>{errors.password} </p>}
         
            
            <div className='buttonDiv'>
               <Button type='submit' variant="contained" color="success" disabled={isSubmitting} style={{margin:'10px'}}>
                 Giriş Yap
               </Button>

               <Link to='/register'><Button  variant='contained' color="success" className='registerBtn'>
                 Kayıt Ol
               </Button ></Link>
               
               

            </div>
          
           </form>
     
            
      </div>
    </div>
  )
}

export default Login
