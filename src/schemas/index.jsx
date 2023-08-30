import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz').required('Email adresi  girmek zorunludur'),
    password:yup.string().min(5,'Lütfen minimum 5 karakter giriniz').matches(passwordRules,{
        message: 'Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz'
    }).required('Şifre girmek zorunludur')

})


export const registerSchema = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz').required('Email adresi  girmek zorunludur'),
    username:yup.string().min(3,'Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır').required('Kullanıcı adı zorunludur'),
    password:yup.string().min(5,'Lütfen minimum 5 karakter giriniz').matches(passwordRules,{
        message: 'Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz'
    }).required('Şifre girmek zorunludur'),
    repassword: yup.string().oneOf([yup.ref('password')],'Şifreler Eşleşmiyor').required('Tekrar şifre girmek zorunludur'),
    isAccepted: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul ediniz.')
 


})