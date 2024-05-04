import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as C from "./styles";

const Home = () => {
 
  return (
    <>
      <C.Page>
        <Header></Header>
        <C.Container>
          <Menu></Menu>
          <C.ActualPage>
            Home
          </C.ActualPage>  
        </C.Container>
      </C.Page>
    </>
  );
};

export default Home;