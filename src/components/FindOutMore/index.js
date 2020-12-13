import React from "react";
import styled from "styled-components";

export default function FindOutMore() {

    const FindOutMoreWrapper = styled.div`
        display: flex;
        margin-top: 48px;
    `;

    const VerticalLine = styled.div`
        width: 2px;
        background-color: #FF3939;
    `;

    const Description = styled.div`
        font-family: 'Cinematografica';
        color: white;
        font-size: 43px;
        margin-left: 28px;
    `;

    const ColoredSpan = styled.span`
        color: #FF3939;
    `;

    return <FindOutMoreWrapper>
        <VerticalLine/>
        <Description>
            FIND OUT LATEST NEWS ABOUT <ColoredSpan>WILD LEGION</ColoredSpan>
        </Description>
    </FindOutMoreWrapper>;
}