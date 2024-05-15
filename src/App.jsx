import { useEffect, useState } from 'react'
import './App.css'
import ImageCard from './components/ImageCard'

function App() {
  const[img,setImg] = useState([])
  useEffect(()=>{
   const fetchImages=()=>{
      const images = [
        {
          id : 1,
          title: "Image 1",
          url : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMHNpemUlMjAyNTAqMjAwfGVufDB8fDB8fHww"
        },
        {
          id : 2,
          title: "Image 2",
          url : "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMHNpemUlMjAyNTAqMjAwfGVufDB8fDB8fHww"
        },
        {
          id : 3,
          title: "Image 3",
          url : "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwc2l6ZSUyMGxhbmRzY3BlfGVufDB8fDB8fHww"
        },
        {
          id : 4,
          title: "Image 4",
          url : "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMHNpemUlMjAyNTAqMjAwfGVufDB8fDB8fHww"
        },
        {
          id : 5,
          title: "Image 5",
          url : "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwc2l6ZSUyMDI1MCoyMDB8ZW58MHx8MHx8fDA%3D"
        },
        {
          id : 6,
          title: "Image 6",
          url : "https://plus.unsplash.com/premium_photo-1669456605879-505d03d177a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwc2l6ZSUyMGxhbmRzY3BlfGVufDB8fDB8fHww"
        }
      ]
      setImg(images)
      console.log(img);
    }
    fetchImages()

  },[])
  
  const handleImageRemove = (imageId) => {
    const updatedImages = img.filter((image) => image.id !== imageId);
    setImg(updatedImages);
  };

  const listImg = img.map(data=>
    <ImageCard key={data.id} list = {data} imagesSet={handleImageRemove} />
  )
  return (
    <>
    <header>
      <span className='logo'>Image Gallery</span>
    </header>
    <main>
      <section className='container'>
        {
          img.length === 0 ? <h1>NO Images Available</h1> : null
        }  
      {listImg} 
      </section>
    </main>
    </>
  )
}

export default App
