import React from 'react'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import CustomInput from './CustomInput'
import { registerSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'


const onSubmit = async (values,actions) => {
  await new Promise ((resolve)=>{
      setTimeout(resolve,1000)
  })
  actions.resetForm();
}


function Register() {
  return (
    <div>
          <Formik
       initialValues={{ email: '', username: '', password: '', repassword: '', isAccepted: false }}
       onSubmit={onSubmit}
       validationSchema={registerSchema}
      
     >
       {(isSubmitting) => (
         <Form>
           <CustomInput label='Kullanıcı Adı' name='username' type='text' placeholder='Kullanıcı Adınızı Giriniz'></CustomInput>
           <CustomInput label='Email' name='email' type='text' placeholder='Email Adresinizi Giriniz'></CustomInput>
           <CustomInput label='password' name='password' type='password' placeholder='Şifrenizi Giriniz'></CustomInput>
           <CustomInput label='repassword' name='repassword' type='password' placeholder='Tekrar Şifre Giriniz'></CustomInput>
           <CustomCheckbox type='checkbox' name='isAccepted'></CustomCheckbox>
           <button type='submit'>Kayıt Ol</button>
           <Link to='/'><button>Anasayfaya Git</button></Link>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Register
