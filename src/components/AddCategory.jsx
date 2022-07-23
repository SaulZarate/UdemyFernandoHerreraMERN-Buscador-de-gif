import { useState } from "react";

const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState("");

    const handleInput = ({target}) => setInputValue(target.value)
    const handleSubmit = (e) => {
        e.preventDefault()

        setInputValue(inputValue.trim())
        if(inputValue.length <= 1) return

        onAddCategory(inputValue)
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gif" 
                onChange={handleInput}
                value={inputValue}
            />
        </form>
    )
}

export default AddCategory