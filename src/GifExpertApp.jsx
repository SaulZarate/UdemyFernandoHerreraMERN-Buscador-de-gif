import { useState } from "react"
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (category) => {
        if(categories.includes(categories)) return
        setCategories([category, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {
                categories && 
                <AddCategory 
                    onAddCategory={onAddCategory} 
                />
            }

            { 
                categories.map( cat => (
                    <GifGrid 
                        key={cat} 
                        category={cat}
                    />
                ))
            }

        </>
    )
}

export default GifExpertApp