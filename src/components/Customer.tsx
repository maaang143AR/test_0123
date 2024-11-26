import React, { useState } from "react";

type CustomerProps = {
  name: string;
  id: string;
  admin:boolean;
};

const Customer = (props: CustomerProps) => {
const[isAdmin,setIsAdmin] = useState(props.admin);

  return (
    <>
    
    <li style={{color: !isAdmin? "red" : "black"}}>{props.name}</li>
</>
  )
};

export default Customer;
