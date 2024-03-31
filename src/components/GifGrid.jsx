
import { GifGrilItem } from './GifGrilItem'
import { useEffectGifs } from '../hooks/useEffectGifs';

export const GifGrid = ({category}) => {

  const {images,isLoading} = useEffectGifs( category );
  
/*   const [images, setImages] = useState([])

    const gifs = [1,2,3,4,5]
    useEffect(() => {
      const f = async() => {
        const newImages = await getGifs(category);
        setImages(newImages)
      }
        f();
    }, []) */
    
    

  return (
    <>
      {/* images.map */}
        <h3>{ category }</h3>
   
        {
          isLoading && (<h2>Cargando...</h2>)
          
        }
        
        <div className='card-grid'>
          {
            images.map( (image)=> (
             <GifGrilItem 
              key={image.id}
              {...image} //exparse las propiedades
             />
          ))
          }
          {/* {
            images.map( (img)=> (
            <li key={ img.id }>{img.title}</li>  
          ))
          } */}
        </div>
    </>
  )
}
