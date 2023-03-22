import { useState } from "react";

const InputZahl = props => {
    const min = props.minZahl;
    const max = props.maxZahl;
    const [gerateneZahl, setGerateneZahl] = useState(undefined);
    const [errorMsg, setErrorMsg] = useState('');

    const pruefeGerateneZahl = (zahl) => {
        setErrorMsg('');
        const inputInt = parseInt(zahl);

        if (isNaN(inputInt))
            setErrorMsg('not a number!');
        else {
            if (inputInt >= min && inputInt <= max) {
                setGerateneZahl(inputInt);
            }
            else {
                setErrorMsg('num out of range');
            }
        }
    }
    return (
        <div>
            <div className="mb-3">
                {props.versuche > 0 &&
                <div className="mt-3 alert alert-info" role="alert">
                    "{gerateneZahl}" eingegeben. Zahl noch nicht erraten, versuchs nochmal:
                </div>
                }
                {errorMsg.length > 0 &&
                <div className="mt-3 alert alert-warning" role="alert">
                    {errorMsg}
                </div>
                }
                <label htmlFor="zahl" className="form-label">Zahl:</label>
                <input className={`form-control ${(errorMsg.length > 0)?'is-invalid':''}`}
                    onChange={(evt) => pruefeGerateneZahl(evt.target.value)}
                    type="text" name="zahl" id="zahl"
                    
                    required placeholder={`Zahl zwischen ${min} und ${max}`} />
            </div>
            {gerateneZahl && errorMsg.length <= 0 &&
                <button className="btn btn-primary" onClick={(evt) => props.vergleicheZahlen(gerateneZahl)}>Rate ...</button>
            }
        </div>
    )
}

export default InputZahl;