import React from "react";
import FamiliaMembro from './FamiliaMembro'

const Familia = (props) => {

    return (
<div>
<FamiliaMembro nome="Pedro" sobrenome = {props.sobrenome}></FamiliaMembro>
<FamiliaMembro nome="Ana" {...props} ></FamiliaMembro>
<FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>


</div>


    )




}
export default Familia;