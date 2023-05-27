import React, {useState} from 'react';
import {ItemType} from "../../App";
import styles from './Select.module.css'
import {MessagesCounter} from "../ReactMemo";




export type SelectPropsType = {
    value?: string
    onChange: (value:string) => void
    items: ItemType[]


}

export const Select: React.FC<SelectPropsType>  = ({value, onChange, items

}) => {
    const [active, setActive] = useState<boolean>(false)
    const  selectedItem = items.find(i => i.value === value)
    const showItems = () => setActive(!active)
    const itemClickHandler = (value: any) => {
        onChange(value)
        setActive(!active)

    }
    return (
        <div>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
            <div className={styles.select}>
            <span className={styles.main} onClick={showItems}>{selectedItem && selectedItem.title}</span>

                {active &&
                <div className={styles.items}>
                    {items.map((i: any) => <div key={i.value} onClick={()=>itemClickHandler(i.value)}>{i.title}</div>)}
                </div>
                }
            </div>
        </div>
    );
};

const Select1 = React.memo(Select)


