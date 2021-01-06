import React from "react";
import FindOutMore from "../FindOutMore";
import styled from "styled-components";
import HomepageMainContainer from "../HomepageMainContainer";

export default function Homepage() {

    const HomepageWrapper = styled.div`
        display: flex;
        flex-direction: column;
    `;

    return <HomepageWrapper>
        <FindOutMore/>
        <HomepageMainContainer/>
    </HomepageWrapper>
}