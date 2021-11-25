import { faAddressCard, faArrowLeft, faBars, faCamera, faHome, faImages, faListAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { toggleSidebar } from '../../redux/actions/globalAction';
import ContainerWrapper from './ContainerWrapper';

const menu = [
    {
        title: "Home",
        to: "/",
        exact: true,
        page: "home"
    },
    {
        title: "Users",
        to: "/dashboard/users",
        exact: false,
        page: "users"
    },
    {
        title: "Todos",
        to: "/dashboard/todos",
        exact: false,
        page: "todos"
    },
    {
        title: "Albums",
        to: "/dashboard/albums",
        exact: false,
        page: "albums"
    },
    {
        title: "Photos",
        to: "/dashboard/photos",
        exact: false,
        page: "photos"
    },
    {
        title: "Posts",
        to: "/dashboard/posts",
        exact: false,
        post: "posts"
    }
]

const Container = ({ children }) => {
    const { page } = useParams();
    const isShow = useSelector(state => state.global.sidebarIsShow)

    return (
        <ContainerWrapper>
            <div className={`sidebar ${isShow && "show" || ""} `} >
                <p className="fw-bold fs-3 mb-4">Menu</p>
                <ul className="menu">
                    {menu.map((v, i) => {
                        return (<li><Link to={v.to} className={`${page == `${v.page}` && "shadow active" || ""} `} >{v.title}</Link></li>
                        )
                    })}
                    {/* <li><Link to="/" className={`${page == "home" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faHome} />{isShow && "Home"}</Link></li>
                    <li><Link to="/dashboard/users" className={`${page == "users" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faUserAlt} />{isShow && "Users"}</Link></li>
                    <li><Link to="/dashboard/todos" className={`${page == "todos" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faListAlt} />{isShow && "Todos"}</Link></li>
                    <li><Link to="/dashboard/albums" className={`${page == "albums" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faImages} />{isShow && "Albums"}</Link></li>
                    <li><Link to="/dashboard/photos" className={`${page == "photos" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faCamera} />{isShow && "Photos"}</Link></li>
                    <li><Link to="/dashboard/posts" className={`${page == "posts" && "active shadow" || ""}`}><FontAwesomeIcon className="me-2" icon={faAddressCard} />{isShow && "Posts"}</Link></li> */}
                </ul>
            </div>
            <div className="rightside">
                <header className="bg-white shadow p-3">
                    <Button onClick={toggleSidebar} className="bg-transparent text-black border-0 shadow rounded ms-1">
                        <FontAwesomeIcon icon={ isShow && faArrowLeft || faBars} />
                    </Button>
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
