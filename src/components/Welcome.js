import React, {useRef, useEffect, useState} from 'react'
import ReactPlayer from 'react-player'

const Welcome = ({url, }) => {
    const [loaded, setLoaded] = useState(false)
    const player = useRef()
    useEffect(() => {
        // const iframe = player.current.player.player.player.f
        // let title = iframe.contentWindow.document.querySelector('.ytp-show-cards-title')
        // console.log(iframe)
    })
    const ready = () =>{
        console.log('ready')
    }
    return (
        <div className="player-container">
            <ReactPlayer
                ref={player}
                url={url}
                playing={true}
                width='100%'
                height='100%'
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            rel: 0,

                        },
                        embedOptions: {
                            onReady: ready
                        }
                    }
                }}
            />
        </div>
    )
}

export default Welcome
