import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import style from '../modals/Modal.module.css';
import Modal from "react-bootstrap/Modal";
import {Alert, Button, FormControl} from "react-bootstrap";
import {hideModal} from "../modals/modalsSlice";
import {performLogin} from "./authSlice";
import {unwrapResult} from "@reduxjs/toolkit";

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alerts, setAlerts] = useState([]);

    const [validationErrors, setValidationErrors] = useState({
        username: '',
        password: ''
    });


    const canSave =
        [username, password].every(Boolean) && !validationErrors.username && !validationErrors.email && !validationErrors.text;

    const userNameChangeHandler = async (e)=>{
        const value = e.target.value;
        setUsername(value);
        if (!value)
            setValidationErrors({...validationErrors, 'username': 'Поле является обязательным для заполнения'})
        else
            setValidationErrors({...validationErrors, 'username': ''})
    }

    const passwordChangeHandler = async (e)=>{
        const value = e.target.value;
        setPassword(value);
        if (!value)
            setValidationErrors({...validationErrors, 'password': 'Поле является обязательным для заполнения'})
        else
            setValidationErrors({...validationErrors, 'password': ''})
    }


    const onLoginButtonClicked = async () => {

        let validationErrorsObj ={};
        let containsErrors = false;
        if (!username) {
            containsErrors = true;
            validationErrorsObj = { 'username': 'Поле является обязательным для заполнения'};
        }
        if (!password) {
            containsErrors = true;
            validationErrorsObj = { ...validationErrorsObj, 'password': 'Поле является обязательным для заполнения'};
        }
        setValidationErrors(validationErrorsObj);
        if (canSave && !containsErrors) {
            try {
                    const resultAction = await dispatch(performLogin({
                        username,
                        password
                    }));
                    const response = unwrapResult(resultAction);
                    if (response.status==="ok") {
                        setAlerts([{variant: 'success', text: 'Авторизация прошла успешно'}])
                        setTimeout(async function () {
                            dispatch(hideModal())
                        }, 500);
                    } else {
                        setAlerts([{variant: 'danger', text: 'Ошибка авторизации'}])
                    }

            } catch (err) {
                console.error('Failed to login: ', err);
                setAlerts([{variant: 'danger', text: 'Ошибка авторизации'}])
            }
        }
    }

    return (
        <div className={style.modalWrapper}>
            <Modal.Dialog
                size='lg'
                style={{width: '100%'}}>
                <Modal.Header>
                    <Modal.Title> Авторизация </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{maxHeight: 'calc(100vh - 210px)', overflowY: 'auto'}}>
                    {alerts.map((alert, index) => {
                        return (
                            <Alert key={index} variant={alert.variant}>
                                {alert.text}
                            </Alert>
                        )
                    })}

                    <label>Имя пользователя</label>
                    <FormControl placeholder='Имя пользователя'
                                 value={username}
                                 onChange={userNameChangeHandler}
                                 className={`mb-2 ${(validationErrors['username']) ? style.error : ''}`}
                                 style={{paddingTop: '10px'}}/>
                    {(validationErrors['username']) ? <small className={style.errorMsg}>{validationErrors['username']}</small> : null}


                    <label>Пароль</label>
                    <FormControl placeholder='Пароль'
                                 value={password}
                                 onChange={passwordChangeHandler}
                                 className={`mb-2 ${(validationErrors['password']) ? style.error : ''}`}
                                 style={{paddingTop: '10px'}}/>
                    {(validationErrors['password']) ? <small className={style.errorMsg}>{validationErrors['password']}</small> : null}


                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => dispatch(hideModal())}>Отмена</Button>
                        <Button variant='primary' onClick={onLoginButtonClicked}>
                            Войти
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}