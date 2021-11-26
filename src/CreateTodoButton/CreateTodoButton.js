import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
        className="CreateTodoButton" 
        onClick={onClickButton}>
            +
        </button>
    );
    // return (
    //     <button className="CreateTodoButton" 
    //     onClick={() => console.log('Clic')}>
    //         +
    //     </button>
    // );
}

export { CreateTodoButton };