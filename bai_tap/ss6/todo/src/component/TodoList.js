import React, {useEffect, useState} from "react";
import * as TodoListService from "../service/TodoListService"
import {Formik, Form, Field} from "formik";


export function TodoList() {

    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await TodoListService.findAll()
            setTodoList(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <h2>Todo List</h2>
            <Formik initialValues={
                {
                    id: '',
                    title: ''
                }
            } onSubmit={(values) => {
                const create = async () => {
                    await TodoListService.save(values)
                    alert("Thêm mới thành công")
                }
                create()
            }}
            >
                {
                    <Form>
                        <div >
                            <Field
                                type="text"
                                className="form-control "
                                name="title"
                                placeholder=""/>
                            <button className="btn btn-primary float-start">
                                Submit
                            </button>

                        </div>
                    </Form>
                }
            </Formik>
            {
                todoList.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>

                ))
            }

        </>
    )

}