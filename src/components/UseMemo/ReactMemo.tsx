import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}


export const MessagesCounter = (props: any) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

const Counters = React.memo(MessagesCounter)

export const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    );
};

const Users = React.memo(UsersSecret)


 const Example = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<string[]>(['Dimych', 'Valera', 'Artem'])



    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <Counters count={counter}/>
        <Users users={users}/>
        </>
        }
export const ReactMemo = React.memo(Example)
