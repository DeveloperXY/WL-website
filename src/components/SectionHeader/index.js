import React from "react";
import styled from "styled-components";

const SectionHeader = ({body}) => {

    const SectionText = styled.div`
        display: 'flex';
        text-align: center;
        background-color: black;
        font-size: 30px;
        color: #FF3939;
        padding: 20px 28px 20px 28px;
        font-family: 'Cinematografica';
    `;

    return <SectionText>
        {body}
    </SectionText>
};

export default SectionHeader;