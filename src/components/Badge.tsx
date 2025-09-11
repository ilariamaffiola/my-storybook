import type React from 'react';
//con la definizione import type React from 'react'; diciamo al codice di importare solo le definizioni di tipo, per esempio React.FC o React,ReactNode
import './Badge.css';

//definizione del componente Badge
//con export const Badge = ... definisco un componente react e lo esporto, così può essere usato in altri file con import { Badge } from '...'
//React.FC (Functional Component) è un tipo di React che rappresenta un componente funzionale
//{ children: React.ReactNode } specifica che il componente Badge accetta una proprietà (props) chiamata children, che può essere qualsiasi nodo React (testo, elementi JSX, altri componenti, ecc.)
//({ children }) => { ... } è la sintassi di una funzione freccia che prende le props come argomento e restituisce il JSX che definisce l'aspetto del componente
//Dentro al <div> viene renderizzato quello che passi come children.
export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return <div className="badge">{children}</div>;

};
