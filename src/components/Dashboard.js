import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <MainContainer>
        <header>
           
            <h1>Welcome Shruti!</h1>
        </header>
        <p> My beautiful <Link to='/UserForm'>Formik Forms</Link> with no Backend.</p>
    </MainContainer>
)
}

export default Dashboard;

const MainContainer = styled.div`
min-height: 100vh;
background-color : red;
header {
    height: 20vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end
    
    h1 {
        position: relative;
        color: #fff;
        font-size: 3rem;
        margin-bottom: 1rem;
        max-width: 1140px;
        margin: 0 auto 1rem;
        width: 100%;
    }
    
}
p {
    position: relative;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
    max-width: 1140px;
    margin: 0 auto 1rem;
    width: 100%;
}

` 