/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

// Custom Icons
import NestJSIcon from "./assets/images/icons/Nest.js.svg";
import NextJSIcon from "./assets/images/icons/Next.js.svg";

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

// const greeting = {
//   username: "Saad Pasta",
//   title: "Hi, I’m Sophat Chhay",
//   subTitle: emoji(
//     "I’m a passionate Full Stack Developer <span className=\"emoji\">🚀</span> with experience building modern web applications using JavaScript, React, Vue, Node.js, PHP, and Python. <br/> I enjoy creating scalable, user-friendly solutions and continuously learning new technologies."
//   ),
//   resumeLink:
//     "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
//   displayGreeting: true // Set false to hide this section, defaults to true
// };
const greeting = {
  username: "Sher",
  title: "Hi, I’m Sophat Chhay",
  subTitle: (
    <>
      <p><span className="inline-text">I’m a passionate Full Stack Developer 🚀</span> with experience building modern web
      applications using JavaScript, React, Vue, Node.js, PHP, and Python.</p>

      <p>I enjoy creating scalable, user-friendly solutions and continuously
      learning new technologies.</p>
    </>
  ),
  resumeLink: "https://drive.google.com/uc?export=download&id=15GAORsB0WzXqxk0uxgDJLTwOGfnJx86s", // "https://drive.google.com/file/d/15GAORsB0WzXqxk0uxgDJLTwOGfnJx86s/view?usp=sharing",
  resumeName: "SophatChhay_Resume.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sophatahsher",
  linkedin: "https://www.linkedin.com/in/sophat-chhay/",
  gmail: "sophat.chhay@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  // title: (<><span className="inline-text">Achievements And Certifications 🏆</span></>),
  skills: [
    (<>⚡ Develop highly interactive Front-end, Back-end / User Interfaces for your web applications</>),
    (<>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</>),
    (<>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</>)
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: {
    "Front-end": [
      {
        skillName: "HTML",
        fontAwesomeClassname: "fab fa-html5",
        type: "font"
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fab fa-css3-alt",
        type: "font"
      },
      {
        skillName: "Sass",
        fontAwesomeClassname: "fab fa-sass",
        type: "font"
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js",
        type: "font"
      },
      {
        skillName: "Reactjs",
        fontAwesomeClassname: "fab fa-react",
        type: "font"
      },
      {
        skillName: "Nextjs",
        svg: NextJSIcon,
        type: "svg"
      },
      {
        skillName: "Nodejs",
        fontAwesomeClassname: "fab fa-node",
        type: "font"
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm",
        type: "font"
      },
    ],
    "Back-end": [
      {
        skillName: "NestJS",
        svg: NestJSIcon,
        type: "svg"
      },
      {
        skillName: "Django REST/FastAPI",
        fontAwesomeClassname: "fab fa-python",
        type: "font"
      },
      {
        skillName: "PHP",
        fontAwesomeClassname: "fab fa-php",
        type: "font"
      },
    ],
    "DevOps / Tools": [
      {
        skillName: "Docker",
        fontAwesomeClassname: "fab fa-docker",
        type: "font"
      },
      {
        skillName: "Jenkins",
        fontAwesomeClassname: "fab fa-jenkins",
        type: "font"
      },
    ]
    // "Back-end": ["Node.js", "Python", "SQL Database", "Firebase", "AWS"],
    // "DevOps / Tools": ["Docker", "NPM"]
  },
  softwareSkillss: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-next"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Build Bright University",
      logo: require("./assets/images/bbu-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2006 - 2010",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: []
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Frontend Developer",
      company: "KEX Crypto Exchange",
      companyLogo: require("./assets/images/kex-logo.png"),
      date: "September 2024 – December 2025",
      desc: "Worked on a crypto exchange platform, building a user-facing web application for buying and selling cryptocurrency. Collaborated closely with backend, DevOps, UX/UI, and product teams to deliver seamless API integration and user experience. Also developed and maintained an internal CMS for backend management, supporting operational workflows and data administration.",
      descBullets: []
    },
    {
      role: "Back-end Lead",
      company: "Tov Ban",
      companyLogo: require("./assets/images/tovban-logo.jpg"),
      date: "November 2020 – December 2022",
      desc: "Led backend development at TovBan, Cambodia’s freelancing platform, focusing on scalable API design, system architecture, and cloud infrastructure (AWS, DigitalOcean). Collaborated with product and engineering teams to deliver key features. Handled team coordination, third-party integrations (including payment gateways), and implemented real-time systems such as chat and notifications using WebSockets and Firebase."
    },
    {
      role: "API Product Manager",
      company: "Cotafer",
      companyLogo: require("./assets/images/cotafer-logo.jpg"),
      date: "May 2018 – November 2020",
      desc: "Developed and maintained back-end APIs for mobile and web applications, handling database integration, request processing, and response management. Collaborated with front-end and mobile teams to build scalable, reliable, and high-performance systems for various business platforms."
    },
    {
      role: "Senior Web Developer",
      company: "Zustro",
      companyLogo: require("./assets/images/zustro-logo.jpeg"),
      date: "April 2014 – April 2018",
      desc: "Responsible for developing and maintaining front-end applications for online casino platforms, integrating user interfaces with back-end APIs, and ensuring smooth real-time functionality. Also customized and enhanced the back-office management system by adding new features and improving administrative workflows for internal operations."
    },
    {
      role: "Web Design",
      company: "Reddot Co., LTD",
      companyLogo: require("./assets/images/reddot-logo.jpeg"),
      date: "May 2009 – May 2011",
      desc: "Contributed to a Cambodia Ministry of Tourism platform featuring accommodations, restaurants, and attractions. Built frontend features and an admin portal for managing listings, and also developed dynamic websites for various external clients."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tovban-website-sample.png"),
      projectName: "Online Working Platform",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/activeitzone-ecommerce.png"),
      projectName: "Ecommerce Website",
      projectDesc: "Has completed customize Ecommerce Platform",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/cotafer-booking.png"),
      projectName: "Accommodation Booking",
      projectDesc: "Has completed built an Booking System Platform both front-end website for users, and Partners Portal System.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: require("./assets/images/zustrocom_cover.jpeg"),
      projectName: "Live Casino Online",
      projectDesc: "Contributed the online entertainment projects, specializing in live dealer games, slots, and sports betting products.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆"),
  title: (<><span className="inline-text">Achievements And Certifications 🏆</span></>),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "KEX Exchange",
      subtitle:
        "Successfully delivered and launched (go-live) a cryptocurrency exchange platform, including the frontend trading website and internal CMS management system. Contributed to multiple sub-projects (microservices), supporting scalable system architecture and smooth cross-team integration for production deployment.",
      image: require("./assets/images/Kex-Exchange.png"),
      imageAlt: "Kex Exchange Logo",
      footerLink: [
        {
          name: "Kex Exchange",
          url: "https://www.kexb.pro/"
        }
      ]
      // footerLink: [
      //   {
      //     name: "Certification",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
      //   },
      //   {
      //     name: "Award Letter",
      //     url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
      //   },
      //   {
      //     name: "Google Code-in Blog",
      //     url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
      //   }
      // ]
    },
    {
      title: "Tovban Freelancing Platform",
      subtitle:
        "Successfully delivered a full-featured freelancing platform connecting clients and freelancers, including project workflow management and milestone-based collaboration. Integrated secure payment systems such as ABA PayWay for client deposits and H2H payment release for freelancer payouts, ensuring a reliable and end-to-end transaction process.",
      image: "https://media.licdn.com/dms/image/v2/C560BAQHFArB4cpwWQA/company-logo_200_200/company-logo_200_200/0/1630636293842?e=1779321600&v=beta&t=EIXfQiv4yKtYeOb1TjVg3JXctNybFu--jqBBrNDn-L8",
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "TovBan Company",
          url: "https://www.linkedin.com/company/tovban/?originalSubdomain=kh"
        }
      ]
    },
    {
      title: "Contributor at Zustro",
      subtitle: "Contributed to the successful launch of a new production release, supporting development and deployment efforts across the team. Completed certification recognizing contribution to the project’s delivery and production readiness.",
      image: require("./assets/images/zustrocom_cover.jpeg"),
      imageAlt: "Certificate Image",
      footerLink: [
        {name: "Certification", url: "https://media.licdn.com/dms/image/v2/C562DAQE9KCFNzuKsYQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1599235009405?e=1778389200&v=beta&t=B5lmnxQfV1qbOGeSbcEFks3vsqxLLHMyKc18zMtcyzw"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Freelance",
      subtitle: "Built a web-based guide platform for the Kampot Governor’s Department, helping showcase local information and improve public access to regional resources.",
      image: require("./assets/images/kampottic.jpg"),
      imageAlt: "Certificate Image",
      footerLink: [
        {
          name: "Kampottic",
          url: "https://kampottic.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
