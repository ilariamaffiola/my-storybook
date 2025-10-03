/*<input kind="text" placeholder="placeholder" label="label" name="name" /> */


/*<input kynd="select" label="label" name="name" options={[{label: "option 1", value: "option 1"},
{label: "option 2", value: "option 2"},
]}
*/

/*
<input kynd="radio" label="label" name="name" options={[
{label: "option 1", value: "option 1"},
{label: "option 2", value: "option 2"},
]}
*/
import React from "react";
import root from "react-shadow";
import css from "./Input.css?raw";
import * as Icon from 'react-feather';
import { GlobalStyles } from "../Tabs/GlobalStyles";

type InputProps = {
    kind: "text" | "email" | "password";
    icon?: string;
    iconPosition?: "left" | "right";
}& React.InputHTMLAttributes<HTMLInputElement>;


type SelectProps = {
    kind: "select"
    options: {
        label: string;
        value: string;
    } [];
    placeholder?: string;
    icon?: never;
    iconPosition?: never;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

type RadioProps = {
    kind: "radio",
    options: {
        label?: string;
        value: string;
    } [];
    name: "name"
    placeholder?: never;
    icon?: never;
    iconPosition?: never;
} & React.InputHTMLAttributes<HTMLInputElement>

type GeneralInputProps = (InputProps | SelectProps | RadioProps) & {
    label: string;
    errorText?: React.ReactNode;
    isInvalid?: boolean;
    
}

export const InternalInput: React.FC<InputProps | SelectProps | RadioProps> = (props) => {
    switch (props.kind) {
        case "select":
            return ( 
            <select {...props}>
                {props.placeholder && (
                    <option value="" disabled>{props.placeholder}
                    </option>
                )}
                {props.options.map((options) => (
                    <option 
                    key={options.value}
                    value={options.value}
                    >
                        {options.label}
                    </option>
                ))}
            </select> 
            ); 
        case "radio": 
        return(
            <>
                {props.options.map((option) => (
                    <label key={option.value}>
                        <input type="radio" {...props} value={option.value} />
                        {option.label}
                    </label>
                ))}
            </>

        );        
        default:
            return <input type={props.kind} {...props} />
    }

}




export const Input: React.FC<GeneralInputProps > = ({ label, id, className, icon, iconPosition, errorText, isInvalid, ...props }) => {
    const defaultId= React.useId() || id;
    const IconComponent = icon ? (Icon as Record<string, React.FC<any>>)[icon] : null;


    return (
        <root.div>
            <GlobalStyles />
            <style>{css}</style>
         
        <div className={`${className ?? ""} container ${props.kind} ${isInvalid ? "is-invalid" : ""}`}>
            
            {props.kind === "radio" ? (
            <span>{label}</span>
        ): (
            <label htmlFor={defaultId}>{label}</label>
        )}
        <div className="input-container">
           <InternalInput {...props} id={defaultId} />{IconComponent && 
        <div className={`input-icon ${iconPosition || ""}`}>
            <IconComponent  />
        </div>
        } 
        </div>
        {errorText && <span className="error-text">{errorText}</span>}
        
        </div>
        </root.div>     
    );
};