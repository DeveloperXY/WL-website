import styled from "styled-components";
import React from "react";

export default function Section(props) {

    const SectionContainer = styled.div`
      display: flex;
      flex-direction: column;
      background-color: black;
    `;

    const SectionHeader = styled.div`
      color: #FF3939;
      padding: 28px 20px 28px 20px;
      font-family: 'Cinematografica';
      font-weight: 400;
      font-size: 30px;
      letter-spacing: 0.03em;
      line-height: 22px;
    `;

    const HorizontalLine = styled.div`
      background-color: #FF3939;
      height: 2px;
    `;

    return <SectionContainer>
        <SectionHeader>{props.title}</SectionHeader>
        <HorizontalLine/>
        {props.children}
    </SectionContainer>
}