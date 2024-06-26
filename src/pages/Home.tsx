import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';
import MediaIcons from '../components/MediaIcons';
// import Togepi from "../public/togepi.jpg";
import CindyGhibli from "../public/cindy_ghibli.png";

/**
 * Note to self: always run npm run deploy after pushing to main
 */

const Home = () => {
  const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 128px;  // temp
  `;

  // const Circle = styled.div`
  //   min-height: 420px;
  //   min-width: 420px;
  //   background-color: #7F6757;
  //   border-radius: 50%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin-right: 96px;
  // `;

  // const ProfileImg = styled.img`
  //   height: 400px;
  //   width: 400px;
  //   object-fit: cover;
  //   border-radius: 50%;
  // `; 

  const ProfileImg = styled.img`
    height: 400px;
    margin-left: 96px;
  `;

  const ParagraphContainer = styled.div`
    width: 400px;
  `;

  return (
    <ProfileContainer className="container">
      {/* <Circle><ProfileImg src={Togepi}/></Circle> */}
      <div>
        <p>Hey, I'm</p>
        <p style={{fontSize: 70, marginTop: 0, marginBottom: 0}}>Cindy Wang</p>
        <TypeAnimation
          sequence={[
            'Fourth Year Computer Science Student', 
            2000, 
            'University of Waterloo Undergraduate',  
            2000,
            'SWE Intern @ Coinbase',
            2000,
            'Prev @ UKG, The Weather Network, Nokia',
            2000, 
            'UWaterloo Computer Science',
            2000,
            'Software Developer',
            2000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          speed={10}
          deletionSpeed={50}
        />
        <MediaIcons/>
        {/* <ParagraphContainer>
          <p>I'm a fourth year Computer Science student at the University of Waterloo</p>
        </ParagraphContainer> */}
      </div>
      <ProfileImg src={CindyGhibli}/>
    </ProfileContainer>
  );
};

export default Home;