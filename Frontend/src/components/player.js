import React from 'react';
import axios from "axios"
import "../styles/player.css"


class Player extends React.Component {

    render() {
        return (
            <div>
         

                <figure id="videoContainer" data-fullscreen="false">

                    <video id="video" controls preload="metadata">
                        <source src="https://storage.coverr.co/videos/TEerln00m5BX5hsDYavm12mzBSO3YPlKR?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTg2MzY1MjYxfQ.YpmaRauiHKL6SBynrv3tXuxtCaKlk-ZN8tLiyhC2_Gs" />
                        <track label="English" kind="subtitles" srclang="en" src="subtitles/vtt/sintel-en.vtt" default/>
                        <track label="Deutsch" kind="subtitles" srclang="de" src="subtitles/vtt/sintel-de.vtt"/>
                        <track label="Español" kind="subtitles" srclang="es" src="subtitles/vtt/sintel-es.vtt"/>
                    </video>

                </figure>
            </div>

        )
    }
}

export default Player;
