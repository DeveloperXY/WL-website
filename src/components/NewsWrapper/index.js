import styled from "styled-components";
import React from "react";
import SectionHeader from "../SectionHeader";
import NewsEntry from "../NewsEntry";

export default function NewsWrapper() {

    const news = [
        {
            title: "THANKS TO OUR BROTHERS FOR ALL",
            body: "Hi too all. For first i wanna say thanks too all who supported me. I want to say many thanks to : Tiger, Mystical , Devil, Delfi, Marsoz,Sapir for the trust you have placed in me, and others for sure. But for me is time to leave this community,I analyzed a lot to understand this.Know that I am extremely pleased that I was the leader of the best clan in the world,but it's time to get away.From today i make Mystical leader of Wild - Legion clan.",
            by: "Inferno Down",
            date: "Date: 21.05.2020"
        },
        {
            title: "MYSTICAL IS BACK",
            body: "One of the best players in SHC community joined back to WL. MysticaL (GR 5621520) accepted as Expert. Very glad to see u again as a part of the clan",
            by: "TigeR",
            date: "Date: 21.05.2020"
        },
        {
            title: "BACK FOR AN UNKNOWN TIME",
            body: "Hi everyone who is active nowdays. I returned active for an unknown time, if someone has any question or has time for a good friendly games, contact me. Also MostWanted is removed from the site",
            by: "Inferno Down",
            date: "Date: 21.05.2020"
        },
        {
            title: "BACK FOR AN UNKNOWN TIME",
            body: "Hi everyone who is active nowdays. I returned active for an unknown time, if someone has any question or has time for a good friendly games, contact me. Also MostWanted is removed from the site",
            by: "Inferno Down",
            date: "Date: 21.05.2020"
        },
        {
            title: "BACK FOR AN UNKNOWN TIME",
            body: "Hi everyone who is active nowdays. I returned active for an unknown time, if someone has any question or has time for a good friendly games, contact me. Also MostWanted is removed from the site",
            by: "Inferno Down",
            date: "Date: 21.05.2020"
        },
        {
            title: "BACK FOR AN UNKNOWN TIME",
            body: "Hi everyone who is active nowdays. I returned active for an unknown time, if someone has any question or has time for a good friendly games, contact me. Also MostWanted is removed from the site",
            by: "Inferno Down",
            date: "Date: 21.05.2020"
        }
    ]

    const NewsWrapper = styled.div`
        display: 'flex';
        flex-direction: 'column';
    `;

    return <NewsWrapper>
        <SectionHeader body="NEWS"/>
        {
            news.map(entry => <NewsEntry entry={entry}/>)
        }
    </NewsWrapper>
}