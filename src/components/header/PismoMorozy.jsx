import { useContext, useState } from "react";
import Inputs, { myContext } from "./Inputs";



function PismoMorozy() {

    return (
        <div>
            <h1 style={{color: 'red'}}>Готов написать шуточное письмо Деду Морозу?</h1>

            <Inputs />
        </div>
    );
}

export default PismoMorozy;