import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem   key={d.id} name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message  key={m.id} message={m.message}/>);

    let messagerEl = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = () => {
        let text = messagerEl.current.value;
        props.onMessageChange(text)
    }
    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements};
            </div>
            <div className={s.messages}>
                {messagesElements};
            </div>
            <div className={s.messanger}>
                <textarea onChange={onMessageChange} ref={messagerEl}
                          value={props.newMessageText}/>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>

    )
}
export default Dialogs;