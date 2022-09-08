import "./WarehouseInputs.scss";
import errorIcon from "../../assets/images/icons/error-24px.svg"

function WarehouseInputs({title, inputFields, fieldNames, errorMessages}) {
    return (
        <div className="warehouse-inputs">
            <h2>{title}</h2>
            {inputFields.map((inputField, index) => {
                return (
                    <label key={index} className="warehouse-inputs__label">
                        {inputField}
                        <input 
                            className="warehouse-inputs__input" 
                            placeholder={inputField} 
                            name={fieldNames[index]}
                            ></input>
                        {errorMessages[index] &&
                            <p className="warehouse-inputs__error">
                                <img className="warehouse-inputs__error-icon" src={errorIcon} alt="error icon"></img>
                                {" " + errorMessages[index]}
                            </p>
                        }
                    </label>
                );
            })}
        </div>
    );
}

export default WarehouseInputs;