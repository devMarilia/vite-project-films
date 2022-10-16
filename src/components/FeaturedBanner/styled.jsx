
import styled from "styled-components"; 

export const ContainerFeaturedBanner = styled.div`
    width:96% ;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div >
    {
     
        width: 63%;
        height: 73vh;
        background-color: white;
        border-radius: 5px;
    }
    
     img  {
        width: 49rem;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
`