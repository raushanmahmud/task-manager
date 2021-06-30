import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import style from './Modal.module.css';
import Modal from "react-bootstrap/Modal";
import {addNewTodo, updateTodo} from '../todoList/todosSlice';
import {Alert, Button, FormControl, Form} from "react-bootstrap";
import {hideModal} from "./modalsSlice";
import {selectToken} from "../auth/authSlice";

export default function AddEditTodo(props) {
    const dispatch = useDispatch();

    const [editingExistingTodo, setEditingExistingTodo] = useState(false);
    const [id, setId] = useState(null);
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [alerts, setAlerts] = useState([])
    const [done, setDone] = useState(false)
    const token = useSelector(selectToken);
    const [validationErrors, setValidationErrors] = useState({
        username: '',
        email: '',
        text: ''
    });

    useEffect(()=>{
        if (props.editing)
            setEditingExistingTodo(true);
        else
            setEditingExistingTodo(false);

    }, [props.editing])

    useEffect(()=>{
        if (props.id) {
            setId(props.id);
            setText(props.text);
            setUsername(props.username);
            setEmail(props.email);
            setDone((props.status >= 10) ? true : false);
            setStatus(props.status);
        }
    }, [props.id])


    const canSave =
        [username, email, text].every(Boolean) && !validationErrors.username && !validationErrors.email && !validationErrors.text;

    const userNameChangeHandler = async (e)=>{
        const value = e.target.value;
        setUsername(value);
        if (!value)
            setValidationErrors({...validationErrors, 'username': 'Поле является обязательным для заполнения'})
        else
            setValidationErrors({...validationErrors, 'username': ''})
    }

    const validEmailAddress = function(emailAddress){
        if (/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/.test(emailAddress) ) {
            return true;
        } else {
            if (emailAddress)
                return false;
            else
                return true;
        }
    }

    const emailChangeHandler = async (e)=>{
        const value = e.target.value;
        setEmail(value);
        if (!value)
            setValidationErrors({...validationErrors, 'email': 'Поле является обязательным для заполнения'})
        else {
            if (validEmailAddress(value)){
                setValidationErrors({...validationErrors, 'email': ''})
            } else {
                setValidationErrors({...validationErrors, 'email': 'Неверный формат email'})
            }
        }

    }

    const textChangeHandler = async (e)=>{
        const value = e.target.value;
        setText(value);
        if (!value)
            setValidationErrors({...validationErrors, 'text': 'Поле является обязательным для заполнения'})
        else
            setValidationErrors({...validationErrors, 'text': ''})
    }

    const handleDoneChange = (e)=>{
        setDone(e.target.checked);
    }

    const getStatus = (status, done, text)=>{
        let newStatus;
        if (!done) {
            if (props.text!==text || props.status===1 || props.status===11)
                newStatus = 1;
            else
                newStatus = 0;
        } else {
            if (props.text!==text || props.status===1 || props.status===11)
                newStatus = 11;
            else
                newStatus = 10;
        }
        return newStatus
    }

    const onSaveTodoClicked = async () => {
        let validationErrorsObj ={};
        let containsErrors = false;
        if (!username) {
            containsErrors = true;
            validationErrorsObj = { 'username': 'Поле является обязательным для заполнения'};
        }
        if (!email) {
            containsErrors = true;
            validationErrorsObj = { ...validationErrorsObj, 'email': 'Поле является обязательным для заполнения'};
        } else if (!validEmailAddress(email)){
            containsErrors = true;
            validationErrorsObj = { ...validationErrorsObj, 'email': 'Неверный формат email'};
        }
        if (!text) {
            containsErrors = true;
            validationErrorsObj = { ...validationErrorsObj, 'text': 'Поле является обязательным для заполнения'};
        }
        setValidationErrors(validationErrorsObj);
        if (canSave && !containsErrors) {
            try {
                if (!editingExistingTodo) {
                    const statusValue = (done) ? 10 : 0;
                    var form = new FormData();
                    form.append("username", username);
                    form.append("email", email);
                    form.append("text", text);
                    form.append("status", statusValue);
                    await dispatch(
                        addNewTodo(form)
                    );

                    setAlerts([{variant: 'success', text: 'Задача успешно добавлена'}])
                    setTimeout(async function () {
                        setUsername('')
                        setEmail('')
                        setText('')
                        dispatch(hideModal())
                    }, 1000);
                } else {
                    const resultAction = await dispatch(updateTodo({
                        id,
                        token,
                        text,
                        status: getStatus(status, done, text)
                    }));
                    const response = unwrapResult(resultAction);
                    if (response.status==='ok') {
                        setAlerts([{variant: 'success', text: 'Задача успешно обновлена'}])
                        setTimeout(async function () {
                            dispatch(hideModal())
                        }, 1000);
                    } else {
                        const alertMsgs = [];
                        for (const msg in response.message){
                            alertMsgs.push({variant: 'danger', text: msg + ':' +response.message[msg]});
                        }
                        if (response.message.token){
                            alertMsgs.push({variant: 'danger', text: 'Ошибка авторизации, пожалуйста попробуйте переавторизоваться'})
                        }
                        setAlerts(alertMsgs)
                    }
                }
            } catch (err) {
                console.error('Failed to save the todo: ', err)
            }
        }
    }

    return (
        <div className={style.modalWrapper}>
            <Modal.Dialog
                size='lg'
                style={{width: '100%'}}>
                <Modal.Header>
                    <Modal.Title> {(editingExistingTodo) ? 'Редактировать' : 'Добавить '} задачу</Modal.Title>
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
                                 disabled={editingExistingTodo}
                                 value={username}
                                 onChange={userNameChangeHandler}
                                 className={`mb-2 ${(validationErrors['username']) ? style.error : ''}`}
                                 style={{paddingTop: '10px'}}/>
                    {(validationErrors['username']) ? <small className={style.errorMsg}>{validationErrors['username']}</small> : null}


                    <label>Email адрес</label>
                    <FormControl placeholder='email адрес'
                                 disabled={editingExistingTodo}
                                 value={email}
                                 onChange={emailChangeHandler}
                                 className={`mb-2 ${(validationErrors['email']) ? style.error : ''}`}
                                 style={{paddingTop: '10px'}}/>
                    {(validationErrors['email']) ? <small className={style.errorMsg}>{validationErrors['email']}</small> : null}

                    <label>Текст</label>
                    <FormControl placeholder='Текст'
                                 value={text}
                                 onChange={textChangeHandler}
                                 className={`mb-2 ${(validationErrors['text']) ? style.error : ''}`}
                                 style={{paddingTop: '10px'}}/>
                    {(validationErrors['text']) ? <small className={style.errorMsg}>{validationErrors['text']}</small> : null}

                    <div hidden={!editingExistingTodo} style={{display: "box", marginTop: "1rem", marginBottom: "1rem"}}>
                        <label htmlFor='show-com'>Выполнено </label>
                        <Form.Check style={{marginLeft: '10px'}}
                               defaultChecked={props.status>=10 ? true : false}
                               value={done}
                               type='checkbox'
                               onChange={handleDoneChange}/>
                    </div>

                    <Modal.Footer>
                        <Button variant='secondary' onClick={() => dispatch(hideModal())}>Отмена</Button>
                        <Button variant='primary' onClick={onSaveTodoClicked}>
                            Сохранить
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}