import React from 'react';
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate kullanıyoruz
import '../App.css';

function Login({users}) {
  const navigate = useNavigate(); // useNavigate kullanarak navigate nesnesini alıyoruz

  const onSubmit = async (values, actions, users) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();

    
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });


 
  const loginUser = (users) => {
    const user = users?.find((user) => user.email === values.email && user.password === values.password);
     
    console.log(users, 'login')
     
    if (user) {
      navigate('/home'); // Doğrulama başarılı ise navigate kullanarak yönlendirme yap
    } else {
      alert('Giriş Başarısız!');

    }

  
  };

  const handleLoginClick = () => {
    loginUser();
  };

  return (
    <div>
      <div className='loginPageMain'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            value={values.email}
            id='email'
            onChange={handleChange}
            placeholder='Email Adresinizi Giriniz'
            className={errors.email ? 'input-error' : ''}
          />
          {<p className='error'>{errors.email}</p>}

          <input
            type='password'
            value={values.password}
            onChange={handleChange}
            id='password'
            placeholder='Şifrenizi Giriniz'
            className={errors.password ? 'input-error' : ''}
          />
          {<p className='error'>{errors.password} </p>}

          <div className='buttonDiv'>
            <Button onClick={handleLoginClick} type='submit' variant='contained' disabled={isSubmitting} style={{ margin: '10px' }}>
              Giriş Yap
            </Button>

            <Link to='/register'>
              <Button variant='contained' color='success' className='registerBtn'>
                Kayıt Ol
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
