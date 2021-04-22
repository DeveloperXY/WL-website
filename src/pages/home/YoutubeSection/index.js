import React from "react";
import Section from "../../../components/Section";
import YouTube from 'react-youtube';
import {useMeasure} from "react-use";

const YoutubeSection = props => {
    const [ref, {width}] = useMeasure();

    return (
        <div ref={ref}>
            <Section title={props.title}>
                <YouTube videoId="3A4FLS1ZAY4" opts={{width, height: 480}}/>
            </Section>
        </div>
    );
};

export default YoutubeSection;