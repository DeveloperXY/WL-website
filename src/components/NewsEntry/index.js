import styled from "styled-components";
import React from "react";
import MentionChip from "../MentionChip";

export default function NewsEntry({entry}) {

    const News = styled.div`
        display: 'flex';
        flex-direction: 'column';
        background-color: black;
        padding: 28px;
        margin-bottom: 20px;
    `;

    const Header = styled.div`
        color: #FF3939;
        font-size: 30px;
        font-family: 'Cinematografica';
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0.03em;
    `;

    const NewsBody = styled.div`
        color: white;
        margin-top: 12px;
        
        font-family: Calibri;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.03em;
        text-align: left;

    `;

    return <News>
        <Header>{entry.title}</Header>
        <NewsBody>{entry.body}</NewsBody>
        <MentionChip body={entry.by}/>
    </News>
}