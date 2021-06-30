import React from "react";
import {useSelector} from "react-redux";
import {getModal} from "./modalsSlice";
import AddEditTodo from "./AddNewTodo";
import Login from "../auth/Login";

const MODAL_COMPONENTS = {
    'ADD_TODO': AddEditTodo,
    'LOGIN': Login
}

export default function Modals () {
    const modal = useSelector(getModal);
    if (!modal)
        return null;
    const Modal = MODAL_COMPONENTS[modal.type];
    return <Modal {...modal.props}/>
}