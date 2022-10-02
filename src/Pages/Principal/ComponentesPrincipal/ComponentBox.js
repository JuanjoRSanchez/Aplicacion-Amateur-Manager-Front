import React from "react";
import '../../../assets/Styles/componentBox.css'

export default function ComponentBox(props){


    return (
        <div className='body_componentBox'>
            <div className="boxComponent">
                {props.title}
            </div>
        </div>
    )
}