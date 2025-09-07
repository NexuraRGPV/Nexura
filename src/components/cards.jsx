
import styled from 'styled-components';

const DomCards = ({ title, image, description }) => {

  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">{title}</p>
            <img src={image} alt={title} />
          </div>
          <div className="flip-card-back">
            <p>{description}</p>
          </div>
        </div>
      </div>

    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 350px;
    height: 450px;
    perspective: 1000px;
    font-family: sans-serif;
    margin: 3em 3em;
    }
    p{
      font-size: 1.6rem;
      padding: 1em;}
    .title {
text-align: center;
font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 1.5rem;
text-edge: cap;
align-items: flex-end;
letter-spacing: 0.03em;
color: #FFFFFF;
}

.flip-card-front img{
height: 300px;
width: 20rem;
height: 20rem;
bottom: 10px;
}
@media (max-width: 768px) {
  .flip-card {
  height: 350px;
  width: 250px;
  margin: 3em auto;
  align-items: center;
  }
  .title {
  font-size: 1.2rem;
  width: 255px;
  }
  .flip-card-front img {
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  }
  p {
  font-size: 1rem;
  }
}
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  .flip-card:hover .flip-card-back {
    color : white;
  }
  

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;

  }

  .flip-card-front {

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
background: linear-gradient(180deg, rgba(139, 34, 184, 0.5) 68.5%, rgba(139, 34, 184, 0) 74.5%, #8B22B8 100%), linear-gradient(180deg, rgba(170, 39, 225, 0.91) 0%, rgba(227, 200, 239, 0.91) 67%, rgba(98, 41, 122, 0.91) 100%);
border-radius: 40.33px;
  }



  .flip-card-back {
    background: #62297A;
    transform: rotateY(180deg);
    color: #62297A;
    transition : color 0.8s ease-in 250ms ;
    
  }
  `;

export default DomCards;