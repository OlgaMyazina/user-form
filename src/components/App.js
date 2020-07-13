import React, { Component } from "react";

import { Formik } from "formik";

import Title from "./Title/Title";
import Input from "./Input/Input";
import SelectSex from "./SelectSex/SelectSex";
import Datepicker from "./Datepicker/DatePicker";
import Phone from "./Phone/Phone";
import { default as Button } from "./Button/Button";

import "./App.styl";

const initialState = {
  firstName: "",
  lastName: "",
  patronymic: "",
  sex: "m",
  birthday: null,
  phone: "",
  email: "",
  address: "",
  company: "",
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = "Информация о сотруднике";
    const btnTitle = "сохранить";
    const options = [
      { name: "Мужской", value: "m" },
      { name: "Женский", value: "w" },
    ];
    const errorMessageRequired = "Поле является обязательным";
    const errorMessageIncorrectEmail = "Введён некорректный адрес почты";
    const errorMessageIncorrectPhone = "Проверьте номер";
    const errorMessageIncorrectBirthday = "Проверьте дату";
    return (
      <div>
        <Title title={title} />
        <Formik
          initialValues={initialState}
          validate={(values) => {
            const errors = {};

            if (!values.lastName) {
              errors.lastName = errorMessageRequired;
            }

            if (!values.firstName) {
              errors.name = errorMessageRequired;
            }

            if (!values.birthday) {
              errors.birthday = errorMessageRequired;
            } else if (isNaN(values.birthday)) {
              errors.birthday = errorMessageIncorrectBirthday;
            }

            if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = errorMessageIncorrectEmail;
            }

            if (!values.phone) {
              errors.phone = errorMessageRequired;
            }
            if (
              values.phone &&
              !/^\+[7] \(\d{3}\) \d{3}-\d{2}-\d{2}$/i.test(values.phone)
            ) {
              errors.phone = errorMessageIncorrectPhone;
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({
            values,
            errors,
            handleChange,
            setFieldValue,
            submitForm,
            isSubmitting,
          }) => (
            <form noValidate className="user">
              <Input
                className="user__field-row"
                name="lastName"
                label="Фамилия"
                onChange={handleChange}
                value={values.lastName}
                error={Boolean(errors.lastName)}
                errorText={errors.lastName}
                required
              />

              <Input
                className="user__field-row"
                name="firstName"
                label="Имя"
                onChange={handleChange}
                value={values.firstName}
                error={Boolean(errors.name)}
                errorText={errors.name}
                required
              />

              <Input
                className="user__field-row"
                name="patronymic"
                label="Отчество"
                onChange={handleChange}
                value={values.patronymic}
              />
              <div className="user__field-row">
                <SelectSex
                  className="user__field-cell user__field-cell--left"
                  options={options}
                  onChange={handleChange}
                  value={values.sex}
                />

                <div className="user__field-cell user__calendar">
                  <Datepicker
                    className="user__field-cell user__calendar"
                    value={values.birthday}
                    errorText={errors.birthday}
                    onChange={(date) => {
                      setFieldValue("birthday", date);
                    }}
                  />
                </div>
              </div>
              <div className="user__field-row">
                <Phone
                  className="user__field-cell user__field-cell--left"
                  onChange={(e) => {
                    const value = e.target.value || "";
                    setFieldValue("phone", value);
                  }}
                  value={values.phone}
                  errorText={errors.phone}
                  required
                />
                <Input
                  className="user__field-cell"
                  name="email"
                  label="Email (необязательно)"
                  onChange={handleChange}
                  value={values.email}
                  errorText={errors.email}
                />
              </div>
              <Input
                className="user__field-row"
                name="address"
                label="Адрес постоянной регистрации"
                onChange={handleChange}
              />
              <Input
                className="user__field-row"
                name="company"
                label="Название работадателя"
                onChange={handleChange}
              />
              <div className="user__field-row">
                <div className="user__field-cell" />
                <Button
                  className="user__field-cell"
                  onClick={() => {
                    submitForm();
                  }}
                  disabled={isSubmitting}
                >
                  {btnTitle}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
