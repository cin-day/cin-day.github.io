import Devpost from "../public/icons/devpost.svg"
import Email from "../public/icons/email.svg"
import GitHub from "../public/icons/github.svg"
import LinkedIn from "../public/icons/linkedin.svg"
import Resume from "../public/icons/resume.svg"

const  MediaIcons = () => {
    const media = [
      {
        icon: GitHub,
        link: "https://github.com/cin-day/",
      },
      {
        icon: Devpost,
        link: "https://github.com/cin-day/",
      },
      {
        icon: LinkedIn,
        link: "https://devpost.com/cinwan23/",
      },
      {
        icon: Resume,
        link: "../public/Resume.pdf",
      },
      {
        icon: Email,
        link: "mailto:cindy.wang2@uwaterloo.ca",
      },
    ]
    return (
      <div style={{marginTop: 24}}>
        {media.map((social) => {
          return (
            <a href={social.link} target="_blank">
              <img src={social.icon} style={{height: 32, marginRight: 32}}/>
            </a>
          );
        })}
      </div>
    );
  };
    
  export default MediaIcons;