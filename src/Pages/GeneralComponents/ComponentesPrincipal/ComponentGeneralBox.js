import React from "react";

import '../../../assets/Styles/componentBox.css'

export default function ComponentGeneralBox(props) {

   
    return (
        <div className='body_componentBox'>
            <div className="boxComponent">
                {props.title}
            </div>
        </div>
    )
}