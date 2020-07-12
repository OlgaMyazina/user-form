import React, {Component} from "react";

import {Formik} from 'formik';

import Title from './Title/Title';
import Input from './Input/Input';
import SelectSex from './SelectSex/SelectSex';
import Datepicker from "./Datepicker/DatePicker";
import Phone from './Phone/Phone';
import {default as Button} from './Button/Button';

import './App.styl';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      patronymic: '',
      sex: 'm',
      birthday: new Date(),
      phone: '',
      email: '',
      address: '',
      company: ''
    };
  }

  render() {
    const title = 'Информация о сотруднике';
    const btnTitle = 'сохранить';
    const options = [{name: 'Мужской', value: 'm'}, {name: 'Женский', value: 'w'}];
    return (
      <div>
        <Title title={title}/>
        <Formik
          initialValues={{...this.state}}
          validate={values => {
            const errors = {};
            const errorMessageRequired = "Поле является обязательным";
            const errorMessageIncorrectEmail = "Введён некорректный адрес почты";
            const errorMessageIncorrectPhone = 'Проверьте номер';

            if (!values.lastName) {
              errors.lastName = errorMessageRequired;
            }

            if (!values.firstName) {
              errors.name = errorMessageRequired;
            }

            if (!values.birthday) {
              errors.birthday = errorMessageRequired;
            }

            if (values.email && (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            )) {
              errors.email = errorMessageIncorrectEmail;
            }

            if (!values.phone) {
              errors.phone = errorMessageRequired;
            }
            if (values.phone && (!/^\+[7] \(\d{3}\) \d{3}-\d{2}-\d{2}$/i.test(values.phone))){
              errors.phone = errorMessageIncorrectPhone;
            }

            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            setSubmitting(true);
            alert(JSON.stringify(values, null, 2));
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
              isSubmitting
            }) => (
            <form noValidate className="user">

              <div className="user__field-row">
                <Input name="lastName" label="Фамилия" onChange={handleChange} value={values.lastName}
                       error={Boolean(errors.lastName)} errorText={errors.lastName} required/>
              </div>
              <div className="user__field-row">
                <Input name="firstName" label="Имя" onChange={handleChange} value={values.firstName}
                       error={Boolean(errors.name)} errorText={errors.name} required/>
              </div>
              <div className="user__field-row">
                <Input name="patronymic" label="Отчество" onChange={handleChange} value={values.patronymic}/>
              </div>
              <div className="user__field-row">
                <div className="user__field-cell user__field-cell--left">
                  <SelectSex options={options} onChange={handleChange} value={values.sex}/>
                </div>
                <div className="user__field-cell user__calendar">
                  <Datepicker value={values.birthday}
                              errorText = {errors.birthday}
                              onChange={(date) => {
                    setFieldValue('birthday', date)
                  }}/>
                </div>
              </div>
              <div className="user__field-row">
                <div className="user__field-cell user__field-cell--left">
                  <Phone onChange={e => {
                    const value = e.target.value || '';
                    setFieldValue('phone', value);
                  }} value={values.phone} errorText={errors.phone} required/>
                </div>
                <div className="user__field-cell">
                  <Input name="email" label="Email (необязательно)" onChange={handleChange} value={values.email}
                         errorText={errors.email}/>
                </div>
              </div>
              <div className="user__field-row">
                <Input name="address" label="Адрес постоянной регистрации" onChange={handleChange}/>
              </div>
              <div className="user__field-row">
                <Input name="company" label="Название работадателя" onChange={handleChange}/>
              </div>
              <div className="user__field-row">
                <div className="user__field-cell"/>
                <div className="user__field-cell">
                  <Button onClick={() => {submitForm()}} disabled={isSubmitting}>{btnTitle}</Button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;