import React from "react";
import styled from "styled-components";
import NewsWrapper from "../NewsWrapper";
import YoutubeSection from "../../pages/home/YoutubeSection";

const HomepageMainContainer = () => {

    const MainContainer = styled.div`
      display: flex;
      margin-top: 24px;
    `;

    const LeftContainer = styled.div`
      flex: 0 1 50%;
      max-width: 50%;
      padding-right: .5em;
    `;

    const NewsContainer = styled.div`
      flex: 0 1 50%;
      max-width: 50%;
    `;

    return <MainContainer>
        <LeftContainer>
            <YoutubeSection title="see recent videos of wild legion youtube channel"/>
        </LeftContainer>
        <NewsContainer>
            <NewsWrapper/>
        </NewsContainer>
    </MainContainer>;
}

export default HomepageMainContainer;