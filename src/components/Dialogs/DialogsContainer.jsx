import React from 'react';
import {addMessageActionCreator, updadeNewActionCreatorMessage} from "../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


/*
const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let onMessageChange = (text) => {
                    store.dispatch(updadeNewActionCreatorMessage(text));
                }
                return (
                    <Dialogs sendMessage={sendMessage}
                             onMessageChange={onMessageChange}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageText={state.dialogsPage.newMessageText}/>)

            }

            }
        </StoreContext.Consumer>)
}*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updadeNewActionCreatorMessage(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }

    }
}


const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;