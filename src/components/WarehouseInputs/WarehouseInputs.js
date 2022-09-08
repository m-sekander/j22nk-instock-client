import "./WarehouseInputs.scss";

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
                                {errorMessages[index]}
                            </p>
                        }
                    </label>
                );
            })}
        </div>
    );
}

export default WarehouseInputs;