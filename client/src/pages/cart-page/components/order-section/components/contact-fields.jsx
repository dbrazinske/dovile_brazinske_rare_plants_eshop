/* eslint-disable import/no-unresolved */
import React from 'react';
import { TextFieldDark, DividerDark } from 'components/dark';

const ContactFields = ({
  fullname,
  email,
  phoneNumber,
  address,
  setFullname,
  setEmail,
  setPhoneNumber,
  setAddress,
}) => (
  <>
    <DividerDark textAlign="left">Kontaktiniai duomenys</DividerDark>

    <TextFieldDark
      name="fullname"
      label="Vardas Pavardė"
      variant="outlined"
      fullWidth
      onChange={(event) => setFullname(event.target.value)}
      value={fullname}
    />
    <TextFieldDark
      name="email"
      type="email"
      label="El. paštas"
      variant="outlined"
      fullWidth
      onChange={(event) => setEmail(event.target.value)}
      value={email}
    />
    <TextFieldDark
      name="phoneNumber"
      type="phoneNumber"
      label="Tel. numeris"
      variant="outlined"
      fullWidth
      onChange={(event) => setPhoneNumber(event.target.value)}
      value={phoneNumber}
    />
    <TextFieldDark
      name="address"
      type="address"
      label="Adresas"
      variant="outlined"
      fullWidth
      onChange={(event) => setAddress(event.target.value)}
      value={address}
    />

  </>
);

export default ContactFields;
