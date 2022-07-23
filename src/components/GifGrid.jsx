import GifItem from "./GifItem";
import useFetchGif from "../hooks/useFetchGif";

const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGif(category);
    
    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && <h3>Cargando...</h3>
            }

            <div className="card-grid">
                {
                    images.map( image => (
                        <GifItem 
                            key={image.id} 
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid