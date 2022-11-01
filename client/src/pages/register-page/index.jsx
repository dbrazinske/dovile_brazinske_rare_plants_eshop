/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AuthForm from 'components/auth-form';
import { useFormik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';

const dateNow = moment(new Date());

const initialValues = {
  email: '',
  emailConfirmation: '',
  password: '',
  passwordConfirmation: '',
  fullname: '',
  birthdate: dateNow,
};

const validationSchema = yup.object({
  email: yup.string()
    .required('Privaloma')
    .email('Neteisingas pašto formatas'),
  password: yup.string()
    .required('Privaloma')
    .min(8, 'Mažiausiai 8 simboliai')
    .matches(/[a-z]/, 'Bent viena mažoji raidė')
    .matches(/[A-Z]/, 'Bent viena didžioji raidė')
    .matches(/\d/, 'Bent vienas skaičius')
    .matches(/\W/, 'Bent vienas specialus simbolis'),
  passwordConfirmation: yup.string()
    .required('Privaloma')
    .oneOf([yup.ref('password')], 'Slaptažodžiai nesutampa'),
  fullname: yup.string()
    .required('Privaloma')
    .min(6, 'Mažiausiai 6 simboliai')
    .matches(/^[a-ząčęėįšųūž ]+$/i, 'Gali būti tik raidės ir tarpai'),
  birthdate: yup.date('Neteisingas datos formatas, pateikite formatu: YYYY-MM-DD')
    .max(dateNow, 'Negalite pasirinkti ateities laiko'),
});

const RegisterPage = () => {
  const onSubmit = (values) => {
    console.log('įvestos reikšmės');
    console.table(values);
  };

  const {
    values, errors, touched, dirty, isValid,
    handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <AuthForm
      title="Registracija"
      btnText="Registruotis"
      onSubmit={handleSubmit}
      disabled={!dirty || !isValid}
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
        onChange={handleChange}
        value={values.password}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <TextField
        name="passwordConfirmation"
        label="Slaptažodžio pakartojimas"
        type="password"
        variant="outlined"
        fullWidth
        value={values.passwordConfirmation}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
        helperText={touched.passwordConfirmation && errors.passwordConfirmation}
      />
      <TextField
        name="fullname"
        label="Vardas Pavardė"
        type="text"
        variant="outlined"
        fullWidth
        value={values.fullname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.fullname && Boolean(errors.fullname)}
        helperText={touched.fullname && errors.fullname}
      />
      <DesktopDatePicker
        inputFormat="yyyy-MM-DD"
        disableMaskedInput
        value={values.birthdate}
        disableFuture
        onChange={(momentInstance) => {
          if (momentInstance._isValid) {
            setFieldTouched('birthdate', true, false);
            setFieldValue('birthdate', momentInstance, true);
          }
        }}
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            name="birthdate"
            label="Gimimo data"
            variant="outlined"
            fullWidth
            onBlur={handleBlur}
            error={touched.birthdate && Boolean(errors.birthdate)}
            helperText={touched.birthdate && errors.birthdate}
          />
        )}
      />
    </AuthForm>
  );
};

export default RegisterPage;
