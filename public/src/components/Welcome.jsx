import React, { useEffect, useState } from "react";
import styled from "styled-components";
import chicken from "../assets/chicken.gif";

export default function Welcome({ currentUser }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const data = localStorage.getItem("chat-app-user");
      if (data) {
        const parsedData = await JSON.parse(data);
        setUserName(parsedData.username);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <Container>
        <img src={chicken} alt="" />
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #ff4191;
  }
`;
