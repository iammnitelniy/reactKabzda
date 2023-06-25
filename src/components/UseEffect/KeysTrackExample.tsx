import React, {useEffect, useState} from "react";

export const KeysTrackExample = () => {

    const [text, setText] = useState("")
    console.log('Component rendered with'  + text)

    useEffect(() => {

        return () => {
            window.addEventListener('keypress', (e) => {
                console.log( e.key)
                    setText((state)=> state + e.key)
            })
        }

    }, [])

    return <>
      Text :   {text}
    </>

}