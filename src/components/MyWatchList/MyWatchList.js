import s from './myWatch.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {useEffect, useState} from "react";


const MyWatchList = () => {

    const [myWatchList, setMyWatchList] = useState('');


    const newEpisode = () => {
        const text = document.getElementById('name').value;
        const status = false;
        const obj = {text: text, status: status};

        localStorage.setItem(text, JSON.stringify(obj));
        document.getElementById('name').value = '';
        const newArray = [...myWatchList];
        const isItem = newArray.find(el => el.text === text);
        isItem ? getItems()
            : newArray.push(obj);
        setMyWatchList(newArray);
    }

    const getItems =  () => {

        const values =  Object.values(localStorage);
        const newArray = []
        values.forEach(el => {
            el = JSON.parse(el);
            if (el.status === true){
                newArray.push(el)
            }
            else {
                newArray.unshift(el)
            }
        });
        setMyWatchList(newArray);
    }

    const removeEpisode = (item) => {
        localStorage.removeItem(item);
        const newArray = myWatchList.filter(el => el.text !== item);
        setMyWatchList(newArray);
    }

    const done = (text, status) => {
        const obj = {text: text, status: !status};
       localStorage.removeItem(text);
       localStorage.setItem(text, JSON.stringify(obj));
        getItems();
    }


    useEffect(() => {
        getItems()
    }, [])


    return (
        <div className={s.main}>
            <div className={s.container}>
                <input type="text"
                       className="form-control"
                       name='name'
                       id='name'
                       placeholder="Enter your new episode ..."
                />
                <button className={s.btn} onClick={newEpisode}>
                    Save
                </button>
                <div className={s.list}>
                    {
                        myWatchList && myWatchList.map(el => <TodoItem el={el} removeEpisode={removeEpisode} done={done}
                                                                       key={el.text}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default MyWatchList;
