// import Devpost from "../public/icons/devpost.svg"
import Email from "../public/icons/email.svg"
import GitHub from "../public/icons/github.svg"
import LinkedIn from "../public/icons/linkedin.svg"
// import Resume from "../public/icons/resume.svg"
// import ResumeFile from "../public/Resume.pdf"

const  MediaIcons = () => {
  // const ResumeFile = require('../public/Resume.pdf');
  const media = [
    {
      icon: GitHub,
      link: "https://github.com/cin-day/",
    },
    // {
    //   icon: Devpost,
    //   link: "https://devpost.com/cinwan23/",
    // },
    {
      icon: LinkedIn,
      link: "https://linkedin.com/in/cindy-wang2",
    },    
    // {
    //   icon: Resume,
    //   link: ResumeFile,
    // },
    {
      icon: Email,
      link: "mailto:cindy.wang2@uwaterloo.ca",
    },
  ]

  return (
    <div style={{marginTop: 24}}>
      {media.map((social) => {
        return (
          <a href={social.link} target="_blank" rel = "noopener noreferrer">
            <img alt="" src={social.icon} style={{height: 32, marginRight: 32}}/>
          </a>
        );
      })}
    </div>
  );
};
    
export default MediaIcons;