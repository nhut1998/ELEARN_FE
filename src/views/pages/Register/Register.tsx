import React, { FunctionComponent } from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@mui/material';
import registerStyle from './style';
import { useDispatch } from 'react-redux';
import { registerUsers } from 'features/auth/store/slice';
import { useToast } from 'rc-toastr'


type FormValues = {
  user_name: string,
  full_name: string,
  email: string,
  phone_number: string,
  password: string
}

const schema = Yup.object().shape({
  user_name: Yup.string().required("Vui lòng nhập username"),
  full_name: Yup.string().required("Vui lòng nhập fullname"),
  email: Yup.string().required("Vui lòng nhập email"),
  phone_number: Yup.string().required("Vui lòng nhập số phone"),
  password: Yup.string().required("Vui lòng nhập password")
})


const Register: FunctionComponent = () => {
  const classes = registerStyle()
  const { toast } = useToast()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),

  })
  const dispatch = useDispatch()

  const onSubmit = (data: FormValues) => {
    dispatch(registerUsers(data));
    // toast.success("Đăng ký thành công")
    // toast.error("Đăng ký không thành công công")
    setValue('user_name', '');
    setValue('full_name', '');
    setValue('email', '');
    setValue('phone_number', '');
    setValue('password', '')

  };

  return (
    <div className={classes.bgLogin}>
      <div className={classes.login}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <input
              className={classes.loginInput}
              id="outlined-password-input"
              placeholder='UserName'
              type="text"
              autoComplete="current-username"
              {...register("user_name")}
            />
            {errors?.user_name && <p style={{ color: "red" }}>{errors.user_name.message}</p>}
          </div>

          <div className='mt-4'>
            <input
              className={classes.loginInput}
              id="outlined-password-input"
              placeholder='FullName'
              type="text"
              autoComplete="current-fullname"
              {...register("full_name")}
            />
            {errors?.full_name && <p style={{ color: "red" }}>{errors.full_name.message}</p>}
          </div>

          <div className='mt-4'>
            <input
              className={classes.loginInput}
              id="outlined-password-input"
              placeholder='Email'
              type="text"
              autoComplete="current-email"
              {...register("email")}
            />
            {errors?.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>

          <div className='mt-4'>
            <input
              className={classes.loginInput}
              id="outlined-password-input"
              placeholder='PhoneNumber'
              type="text"
              autoComplete="current-username"
              {...register("phone_number")}
            />
            {errors?.phone_number && <p style={{ color: "red" }}>{errors.phone_number.message}</p>}
          </div>

          <div className='mt-4'>
            <input
              className={classes.loginInput}
              id="outlined-password-input"
              type="password"
              placeholder='Password'
              autoComplete="current-password"
              {...register("password")}
            />
            {errors?.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          </div>

          <Button className={classes.btnLogin} type="submit">Đăng ký</Button>
        </form>
      </div>
    </div>

  )
}
export default Register