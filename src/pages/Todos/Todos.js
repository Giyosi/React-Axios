import { LinearProgress } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import { setTodos} from '../../redux/actions/usersAction';
import { dispatch } from '../../redux/store';
import TodosWrapper from './TodosWrapper';

const Todos = () => {

    useEffect(() => {
        setTodos(dispatch)
    }, [])

    const data = useSelector((state) => state.todos.data);
    const error = useSelector(state => state.global.error);
    const loading = useSelector(state => state.global.loading);
    // console.log(dataTodos);
    return (
        <TodosWrapper>
            <h1>Todos</h1>
            {data.map((v) => (
                  <div>
                    <div class="box">
                      <span></span>
                      <div class="content">
                        <h2>Card {v.id}</h2>
                        <p className="fw-bold fs-5">{v.title}</p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolores, quas.
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                ))}
            {loading && <LinearProgress /> ||
                error && <Error /> ||
                data.length > 0 && <div><h1>Xammasi Yaxshi</h1>

                </div> || "xammsi rasvo"}
        </TodosWrapper>
    )
}

export default Todos
