import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import ContainerWrapper from './ContainerWrapper';



const Container = ({ children }) => {
    const { page } = useParams();

    return (
        <ContainerWrapper>
            <div className="sidebar" >
                <p className="fw-bold fs-3 mb-4">Menu</p>
                <ul className="menu">
                    <li><Link to="/" className={`${page == "home" && "active shadow" || ""}`} exact>Home</Link></li>
                    <li><Link to="/dashboard/users" className={`${page == "users" && "active shadow" || ""}`}>Users</Link></li>
                    <li><Link to="/dashboard/todos" className={`${page == "todos" && "active shadow" || ""}`}>Todos</Link></li>
                    <li><Link to="/dashboard/albums" className={`${page == "albums" && "active shadow" || ""}`}>Albums</Link></li>
                    <li><Link to="/dashboard/photos" className={`${page == "photos" && "active shadow" || ""}`}>Photos</Link></li>
                    <li><Link to="/dashboard/posts" className={`${page == "posts" && "active shadow" || ""}`}>Posts</Link></li>
                </ul>
            </div>
            <div className="rightside">
                <header className="bg-white shadow p-3">
                    <Button className="bg-transparent text-black border-0 shadow rounded ms-1"><FontAwesomeIcon icon={faBars} /></Button>
                    <img src="https://logosandtypes.com/wp-content/uploads/2020/07/mesmak.svg" className="logo ms-3" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default Container
