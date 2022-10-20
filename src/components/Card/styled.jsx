import styled from "styled-components";

export const MovieRow = styled.div`
  margin-bottom: 30px;
  display: flex;
    align-items: center;
    justify-content: center;

  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  .movieRow-listarea {
    overflow-x: hidden;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .movieRow-item{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    cursor: pointer;
}
.image {
  width: 150px;
  height: 100%;
  border-radius: 3px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff;
}

.movieRow-item img{
   width: 100%;
   transform: scale(0.9);
   transition : all ease 0.2s;
}

.movieRow-list {
    transition : all ease 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

}






.movieRow-item img:hover{
    transform: scale(1);
 }


 .movieRow-right {
    position:absolute;   
    width: 40px;
    height: 225px;
    background-color:rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor:pointer;
    /* opacity: 0; */
    transition : all ease 0.2s;
}
.movieRow-left {
    position:absolute;   
    width: 40px;
    height: 225px;
    background-color:rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor:pointer;
    /* opacity: 0; */
    transition : all ease 0.2s;
}

 .movieRow-left{
     left: 0;
 }

 .movieRow-right{
    right: 0;
}

.movieRow:hover .movieRow-left:hover
{
    opacity: 1;
}

  /* .movieRow h2 {
    margin: 0px 0px 0px 30px;
}






@media (max-width: 760px){
    .movieRow-left,
    .movieRow-right {
    opacity: 1;
    }
} */
`;
