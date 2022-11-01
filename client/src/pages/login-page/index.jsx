import React from 'react';
import {
  TextField, Alert,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSearchParams, Link } from 'react-router-dom';
import AuthForm from '../../components/auth-form';
import useAuth from '../../hooks/useAuth';

import {
  authClearErrorsAction,
  createLoginThunkAction,
} from '../../store/auth/auth-actions';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas el. pašto formatas'),
});

const LoginPage = () => {
  const { error, dispatch } = useAuth();
  const [serachParams] = useSearchParams();

  const onSubmitRef = React.useRef((credentials) => {
    const redirect = serachParams.get('redirect');
    dispatch(createLoginThunkAction(credentials, redirect));
    // eslint-disable-next-line no-use-before-define
    resetForm();
  });

  const {
    dirty, values, errors, touched, isValid,
    handleChange, handleBlur, handleSubmit, resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmitRef.current,
  });

  return (
    <>
      {error && (
        <Alert sx={{ mb: 10 }} severity="error" onClose={() => dispatch(authClearErrorsAction)}>
          {error}
        </Alert>
      )}
      <AuthForm
        title="Prisijungti"
        onSubmit={handleSubmit}
        disabled={!dirty || !isValid}
        btnText="Prisijungti"
      >
        <TextField
          name="email"
          label="El. paštas"
          type="email"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          name="password"
          label="Slaptažodis"
          type="password"
          variant="outlined"
          fullWidth
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Typography component="subtitle">
          Dar neturi paskyros?
          <Link style={{ textDecoration: 'none', color: '#243221', fontWeight: 600 }} to="/auth/register">Registracija</Link>
        </Typography>
      </AuthForm>
    </>

  );
};

export default LoginPage;
