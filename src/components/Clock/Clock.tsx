import React, {useEffect, useState} from 'react';

export const Clock = (props:{mode?: 'digital' | 'analog'}) => {

    const [counter, setCounter] = useState(1)


    useEffect(()=> {
        console.log('useeffect every render')
    })
    useEffect(()=> {
        console.log('useeffect only first render when componentdidmount')
    }, [])
    useEffect(()=> {
        console.log('useeffect every first render and every change of depend(counter)')
    },[counter])

    const [date, setDate] = useState<Date>(new Date())

    const timer = new Date().toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute:'2-digit', second: '2-digit'})
    useEffect(()=> {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        console.log('useeffect every first render and every change of depend(counter)')
    },[date])



    return (
        <div>

            {props.mode === 'digital' ? <time dateTime={timer}>
                {timer}
            </time> : <time dateTime={timer}>
                ANALOG
            </time>}
        </div>
    );
};

