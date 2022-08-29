import React from 'react';
import EventFunctions from '../function/EventBasedFunctions';
export default function Element(props){
    // const ElementCreated = React.createElement('h1',{},`${props.data.componentDetails.element_children}`.toString());
    const Children = [props.componentDetails.element_children];
    const element_className = [props.componentDetails.element_className];
    console.log(props);
    const propsElement ={className:element_className};
    const CreateElement = () =>{
        switch (props.componentDetails.element_type) {
            case 'select':
                return React.createElement(props.componentDetails.element_type,{value:props.componentDetails.element_value,onChange:EventFunctions.ConsoleValue},[...Children]
                );
            case 'option':
                return React.createElement(props.componentDetails.element_type,{value:props.componentDetails.element_value},props.componentDetails.element_label);
            case 'input':
                return (React.createElement(props.componentDetails.element_type,{...propsElement}))
            default:
                return (React.createElement(props.componentDetails.element_type,{...propsElement},[...Children]));
        }
    }
    return(CreateElement());
    //     );
}