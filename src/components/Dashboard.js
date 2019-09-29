import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <MainContainer>
        <header>
           
            <h1>Welcome Friends</h1>
        </header>
        <p> My beautiful <Link to='/UserForm'>Formik Forms</Link> with no Backend.</p>
        <p> React Components and component state <a href="https://gallant-nobel-3285bc.netlify.com/">American Football Scorecard.</a> </p>
        <p> Composing React Components and Passing Data Via Props <a href="https://gracious-easley-b4fad8.netlify.com/"> Lambda Calculator</a> </p>
        <p> Advanced Styling Techniques <a href="https://determined-murdock-adcae8.netlify.com">NASA Photo of the Day.</a> </p>
        <p> Sprint Challenge: React - Star Wars <a href="https://priceless-keller-1ace00.netlify.com">Sprint Challenge: React - Star Wars</a> </p>
        <p>React Router II <a href="https://youthful-archimedes-c931ba.netlify.com/">React-Router-Movies.</a> Movies list not seen as Local Host 5000, axios not started in build. Need to check on how to deploy on netlify.</p>
   </MainContainer>
)
}

export default Dashboard;

const MainContainer = styled.div`
min-height: 100vh;
background-color : #484848;
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