import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../container/Container';
import Home from '../Home';
import Users from '../Users';
import DashboardsWrapper from './DashboardsWrapper'

const Dashboards = () => {
    const { page } = useParams();
console.log(page);
    return (
        <Container >
            <DashboardsWrapper>
                {page === "home" && <Home />}
                {page === "users" && <Users />}
                {/* {page === "todos" && <Todos />} */}
                {/* {page === "albums" && <Albums />} */}
                {/* {page === "photos" && <Photos />} */}
                {/* {page === "posts" && <Posts />} */}
            </DashboardsWrapper>
        </Container>

    )
}

export default Dashboards
