import React from 'react';
import styled from "styled-components";
import PlantsList from "./components/PlantsList";



const Dashboard = props => {
    const { plantsList } = props;

    return (
        <MainContainer>
            <header>
                
                <h1>Welcome Shruti!</h1>
            </header>
            <PlantsList plantsList={plantsList} />
        </MainContainer>
    )
}

export default Dashboard;

const MainContainer = styled.div`
    min-height: 100vh;

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
` 