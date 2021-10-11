import { useEffect } from "react"

export const YoGirl = () => {

    useEffect(() => {
        const yogirl = document.getElementById('yogirl');
        yogirl.play()
    })

    return (
        <audio id='yogirl' controls autoPlay className='player'>
            <source src="yogirl.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    )
}
