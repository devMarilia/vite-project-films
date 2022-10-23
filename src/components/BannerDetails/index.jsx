import React from 'react'
import { ContainerBannerDetails } from './styled'

const BannerDetils = () => {
  return (
    <ContainerBannerDetails>
     <div className='content-datails'>
      <div className='content-datails-items-image'>
        <img className='image-details' src='https://media.news9live.com/h-upload/2022/09/13/556728-newproject-2022-09-13t154154371.webp'/>
      </div>
      <div className='content-datails-items'>
      <div>
          <h3>Titulo</h3>
          <span>10/15/2022</span>
          <article>teste teste teste </article>
        </div>
        
      </div>
      
     </div>
    </ContainerBannerDetails>
  )
}

export default BannerDetils