import React from "react";
import wlWideLogo from "../../images/wl_logo_wide.svg";
import styled from "styled-components";

const HomepageHeader = styled.div`
    display: flex;
    font-family: 'Cinematografica';
    justify-content: space-between;
    padding: 0 132px;
    line-height: 18px;
    letter-spacing: 0.03em;
    font-size: 24px;
    color: white;
`;

const HomepageHeaderMenu = styled.ul`
    li {
        display: inline;
        margin-left: 114px;
    }
`;

const LogoImage = styled.img`
    margin-top: 16px
`;

export default function GlobalHeader() {
    return <HomepageHeader>
        <LogoImage src={wlWideLogo}/>
        <HomepageHeaderMenu>
            <li>HOME</li>
            <li>OUR MAPS</li>
            <li>MEMBERS</li>
            <li>ABOUT US</li>
        </HomepageHeaderMenu>
    </HomepageHeader>;
}