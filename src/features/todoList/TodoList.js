import React, {useEffect} from 'react';
import {Button, ButtonGroup, FormControl, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAllTodos,
    fetchTodos,
    selectCurPage,
    selectPagesCount,
    setCurPage,
    selectSortField,
    selectSortDirection, setSortField, setSortDirection
} from "./todosSlice";
import Pagination from "../../utils/Pagination";
import style from "../modals/Modal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown, faPen} from '@fortawesome/free-solid-svg-icons'
import {showModal} from "../modals/modalsSlice";
import {logout, selectIsLoggedIn, selectToken} from "../auth/authSlice";

const ascendingSortIcon = <FontAwesomeIcon icon={faSortUp}/>;
const descendingSortIcon = <FontAwesomeIcon icon={faSortDown}/>;

// See the screenshots; todo: persist token
export default function TodoList(props){
    const dispatch = useDispatch()
    const todos = useSelector(selectAllTodos)
    const error = useSelector(state => state.todos.error)
    const todosStatus = useSelector(state => state.todos.status)
    const curPage = useSelector(selectCurPage);
    const pagesCount = useSelector(selectPagesCount);
    const sortField = useSelector(selectSortField);
    const sortDirection = useSelector(selectSortDirection);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const token = useSelector(selectToken);

    useEffect(() => {
        if (todosStatus === 'idle') {
            dispatch(fetchTodos({page:curPage, sort_field:sortField, sort_direction:sortDirection}))
        }
    }, [todosStatus, dispatch, curPage, sortField, sortDirection, isLoggedIn])

    const setSortFieldAndDirection = function(field, direction){
        dispatch(setCurPage(1));
        dispatch(setSortField(field));
        dispatch(setSortDirection(direction))
    }

    const hanleChangePage = async(page)=>{
        dispatch(setCurPage(page))
    }

    const openAddTodoModal = ()=>{
        dispatch(showModal({type : 'ADD_TODO'}))
    }

    const openEditForm = ({id, username, text, email, status})=>{
        dispatch(showModal({type : 'ADD_TODO', props: {
                editing: true,
                id, username, status, text, email
            }}))
    }

    const openLoginForm = ()=>{
        dispatch(showModal({type : 'LOGIN'}))
    }

    const loginButton = <Button onClick={openLoginForm}>
        Авторизация
    </Button>

    const logoutButton = <Button onClick={()=>dispatch(logout())}>
        Выйти
    </Button>


    let content;
    if (todosStatus === 'loading') {
        content = <div className="loader">Загрузка...</div>
    } else if (todosStatus === 'succeeded') {
        content = <>
            <Table striped responsive>
                <thead>
                <tr>
                    <th>
                        <span>#</span>
                        <ButtonGroup style={{maxHeight:'100%', marginTop:'0px', marginBottom:'auto', display:'inline-grid'}}>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('id', 'asc')} variant='link' size='sm'>
                                {ascendingSortIcon}
                            </Button>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('id', 'desc')} variant='link' size='sm'>
                                {descendingSortIcon}
                            </Button>
                        </ButtonGroup>

                    </th>
                    <th>
                        <span>Имя пользователя</span>
                        <ButtonGroup style={{maxHeight:'100%', marginTop:'0px', marginBottom:'auto', display:'inline-grid'}}>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('username', 'asc')} variant='link' size='sm'>
                                {ascendingSortIcon}
                            </Button>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('username', 'desc')} variant='link' size='sm'>
                                {descendingSortIcon}
                            </Button>
                        </ButtonGroup>
                    </th>
                    <th>
                        <span>email</span>
                        <ButtonGroup style={{maxHeight:'100%', marginTop:'0px', marginBottom:'auto', display:'inline-grid'}}>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('email', 'asc')} variant='link' size='sm'>
                                {ascendingSortIcon}
                            </Button>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('email', 'desc')} variant='link' size='sm'>
                                {descendingSortIcon}
                            </Button>
                        </ButtonGroup>
                    </th>
                    <th style={{verticalAlign:'middle'}}>
                        <span>Текст задачи</span>
                    </th>
                    <th >
                        <span>Статус</span>
                        <ButtonGroup style={{maxHeight:'100%', marginTop:'0px', marginBottom:'auto', display:'inline-grid'}}>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('status', 'asc')} variant='link' size='sm'>
                                {ascendingSortIcon}
                            </Button>
                            <Button className={style.linkBtn} onClick={()=>setSortFieldAndDirection('status', 'desc')} variant='link' size='sm'>
                                {descendingSortIcon}
                            </Button>
                        </ButtonGroup>
                    </th>
                </tr>
                </thead>
                <tbody>
                {todos && todos.map((todo, index)=>{
                    return (
                        <tr key={index}>
                            <td>{todo.id}</td>
                            <td>{todo.username}</td>
                            <td>{todo.email}</td>
                            <td>{todo.text}</td>
                            <td>
                                <FormControl as={'select'} disabled={true} value={todo.status}>
                                    <option value={0} label={'не выполнено'}/>
                                    <option value={1} label={'не выполнено, отредактировано администратором'}/>
                                    <option value={10} label={'выполнено'}/>
                                    <option value={11} label={'выполнено, отредактировано администратором'}/>
                                </FormControl>
                            </td>
                            <td>
                                <Button disabled={(!isLoggedIn && !token)}
                                        hidden={(!isLoggedIn && !token)}
                                        onClick={()=>openEditForm(todo)} >
                                    <FontAwesomeIcon icon={faPen}/>
                                </Button>

                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Pagination elemNumber={pagesCount}
                        hidden={todosStatus==='loading'}
                        curPage={curPage}
                        shownElemNum={5}
                        showArrows={true}
                        changePage={hanleChangePage}/>
        </>
    } else if (todosStatus === 'failed') {
        content = <tr><td>{error}</td></tr>
    }


    return (
        <div className={style.mainContainer}>
            <div className={style.contentContainer}>

                <Button onClick={openAddTodoModal}>
                    Добавить
                </Button>
                {(isLoggedIn || token) ? logoutButton : loginButton}

                {content}

            </div>
        </div>



    )
}