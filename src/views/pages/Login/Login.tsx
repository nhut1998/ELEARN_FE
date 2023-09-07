import React, { FunctionComponent } from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from '@mui/material';
import loginStyle from './style';
import { useDispatch } from 'react-redux';
import { login } from 'features/auth/store/slice';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  username: string
  password: string
}

const schema = Yup.object().shape({
  username: Yup.string().required("Vui lòng nhập username"),
  password: Yup.string().required("Vui lòng nhập password")
})


const Login: FunctionComponent = () => {
  const classes = loginStyle()
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema),

  })
  const dispatch = useDispatch()

  const onSubmit = (data: FormValues) => {
    dispatch(login(data))
    setValue('username', '')
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
              placeholder='Username'
              type="text"
              autoComplete="current-username"
              {...register("username")}
            />
            {errors?.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
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

          <Button className={classes.btnLogin} type="submit">Đăng nhập</Button>

          <div className={classes.text}>Nếu chưa có tài khoản?<span style={{ cursor: "pointer" }} onClick={() => navigate("/register")} className='ms-2'>Đăng ký</span></div>
        </form>

      </div>
    </div>

  )
}
export default Login