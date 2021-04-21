import React from "react";
import styled from "styled-components";

export default function MentionChip({body}) {

    const Chip = styled.div`
        display: inline-flex;
        text-align: center;
        background-color: #FF3939;
        border-radius: 24px;
        color: white;
        font-family: calibri;
        font-size: 12px;
        padding: 2px 18px 2px 18px;
    `;

    return <Chip>
        @{body}
    </Chip>
}