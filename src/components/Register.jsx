import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import CustomInput from './CustomInput'
import { registerSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'
import Button from '@mui/material/Button';

const onSubmit = async (values, actions, users, setUsers) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // Formdan gelen verileri "users" state'ine ekleyin.
  setUsers([...users, values]);

  // Formu sıfırlayın.
  actions.resetForm();
};

function Register() {
  const [users, setUsers] = useState([]);
  console.log(users)

  return (
    <div className='registerDiv'>
      <Formik
        initialValues={{ email: '', username: '', password: '', repassword: '', isAccepted: false }}
        onSubmit={(values, actions) => onSubmit(values, actions, users, setUsers)}
        validationSchema={registerSchema}
      >
        {(isSubmitting) => (
          <Form>
            <CustomInput name='username' type='text' placeholder='Kullanıcı Adınızı Giriniz'></CustomInput>
            <CustomInput name='email' type='text' placeholder='Email Adresinizi Giriniz'></CustomInput>
            <CustomInput name='password' type='password' placeholder='Şifrenizi Giriniz'></CustomInput>
            <CustomInput name='repassword' type='password' placeholder='Tekrar Şifre Giriniz'></CustomInput>
            <CustomCheckbox type='checkbox' name='isAccepted'></CustomCheckbox>
            <Button variant='contained' color='success' style={{ margin: '10px' }} type="submit">
              Kayıt Ol
            </Button>
            <Link to='/'>
              <Button variant='contained'>Anasayfaya Dön</Button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
