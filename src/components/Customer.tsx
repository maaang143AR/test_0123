import React, { useState } from "react";
import { number } from "zod";

type CustomerProps = {
  name: string;
  id: string;
  admin:boolean;
};

const Customer = (props: CustomerProps) => {
const[isAdmin,setIsAdmin] = useState(props.admin);
const newErr = 5;
  return (
    <>
    
    <li style={{color: !isAdmin? "red" : "black"}}>{props.name}</li>
</>
  )
};

export default Customer;
