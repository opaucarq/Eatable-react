import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import FoodCard from './FoodCard';
import index from '../services/products';

const DashboardContainer = styled.div`
width: 100%;
`;
const DashboardWrapper = styled.div`
gap: 20px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const responseData = await index();
      setData(responseData);
    };

    const interval = setInterval(getData, 200);

    return () => {
      clearInterval(interval);
    };
  },[]);

  return (
    <DashboardContainer>
      <DashboardWrapper>
        {data.length > 0 ? (
          data.map((food) => <FoodCard key={food.id} food={food} />)
        ) : (
          <p style={{fontSize:"32px"}}>Loading...</p>
        )}
      </DashboardWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
