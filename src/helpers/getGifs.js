const getGifs = async (category) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=BDiwfJdpgIO5mN638pJR6MGc34GREC5x&q=${category}&limit=10`
    const response = await fetch(URL)

    const { data } = await response.json()
    
    const gifs = data.map( ({id, title, images}) => ({
        id: id, 
        title: title,
        url: images.downsized_medium.url
    }))
    
    return gifs
}

export default getGifs