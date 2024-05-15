import React  from 'react'

function ImageCard(props) {
  console.log(props.imagesSet);
  const handleRemove = () =>{
    props.imagesSet(props.list.id);
  }
  return (
    <>
    <div className='imageCards'>
            <img className='img' src={props.list.url} alt="" />
            <div className='img-details'>
            <h3>{props.list.title}</h3>
            <button className='button' onClick={()=>handleRemove()} >Remove</button>
            </div>
            </div> 
    </>
  )
}

export default ImageCard