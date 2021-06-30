import React from 'react';

const input = ( props ) => {

    let inputElement = null;

    switch ( props.elementtype ) {
        case ( 'input' ):
            inputElement = <input type={props.type} name={props.name} onChange={props.Change}
                
                 />;
            break;

            case ( 'textarea' ):   
            inputElement = <textarea type={props.type} name={props.name} onChange={props.Change}
               />; 
            break;

            case ( 'select' ):
                inputElement = (
                <select  onChange={props.Change} name={props.name}>
                    {props.options.map(option => (
                        <option key={option.value} value={option.value} type={props.type} >
                            {option.displayValue}
                        </option>
                    ))}
                </select>
                );
                break;  
                case ( 'file' ):
                    inputElement = <input type={props.type} name={props.name} onChange={props.Change}
                    />;
                    break;  

                default:
                    inputElement = <input/>;
                    }


                    return (
                        <div>
                            <label>{props.label}</label>
                            <br></br>
                            {inputElement}
                        </div>
                    );
};


export default input;