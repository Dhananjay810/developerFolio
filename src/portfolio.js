/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhananjay Kumar",
  title: "Hi all, I'm Dhananjay 👋",
  subTitle:
    "Software Developer with experience in Android development, problem solving, and robotics/embedded systems. I build Android apps using Java & Kotlin and enjoy Competitive Programming and Computer Vision.",
  resumeLink: "resume.pdf",
  displayGreeting: true,
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Dhananjay810",
  linkedin: "https://www.linkedin.com/in/dhananjay-kumar-93ba742a2/",
  leetcode: "https://leetcode.com/u/dj8818604",
  gmail: "dk8818604@gmail.com",
  display: true,
};


// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Android Developer | Competitive Programmer | Robotics & Embedded Systems Enthusiast",
  skills: [
    "⚡ Android App Development using Java / Kotlin (Firebase, Room, Jetpack Compose)",
    "⚡ Strong problem-solving and Competitive Programming (1600+ rating, 650+ problems solved)",
    "⚡ Computer Vision & Image Processing using YOLO and Python",
    "⚡ Robotics: Arduino, sensors, hardware debugging and mentoring",
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Kotlin", fontAwesomeClassname: "fas fa-code" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
  ],
  display: true,
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Information Technology (IIIT), Surat",
      logo: require("./assets/images/iiit-surat.png"),
      subHeader: "B.Tech in Electronics and Communication Engineering",
      duration: "2022 - 2026 (Expected)",
      desc: "Current CGPA: 8.04",
      descBullets: [
        "Active in MARC Robotics Club and GDG activities",
        "Focus: DSA, Android Development, Competitive Programming",
      ],
    },
  ],
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Android Development",
      progressPercentage: "85%",
    },
    {
      Stack: "DSA / Competitive Programming",
      progressPercentage: "90%",
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "50%",
    },
    {
      Stack: "Robotics / Embedded Systems",
      progressPercentage: "85%",
    },
  ],
  displayCodersrank: false,
};


// Work experience section

const workExperiences = {
  display: true, // keep true to show this section
  experience: [
    {
      role: "Android Developer",
      company: "Google Developer Group (GDG)",
      companylogo: require("./assets/images/gdg.png"),
      date: "Aug 2025 – Present",
      desc: "Conducted hands-on Android workshops and mentored students in Java/Kotlin, UI design, and Firebase integration.",
      descBullets: [
        "Mentored students in Android app development",
        "Helped learners build UI + Firebase based apps",
      ],
    },
    {
      role: "Lead",
      company: "MARC Robotics Club",
      companylogo: require("./assets/images/robotics.png"),
      date: "Jan 2024 – Present",
      desc: "Organized and managed robotics events like Line Follower and Form Track. Mentored students in Arduino, sensors, and robot debugging.",
      descBullets: [
        "Led robotics events and technical evaluation",
        "Mentored juniors in hardware + debugging",
      ],
    },
    {
      role: "Algorithm Designer (Participant)",
      company: "IMC Prosperity",
      companylogo: require("./assets/images/imc.png"),
      date: "Apr 2025",
      desc: "Participated in IMC Prosperity algorithmic contest and achieved 51st rank in India and 121st rank globally.",
      descBullets: [
        "Ranked 51st in India",
        "Ranked 121st globally",
      ],
    },
  ],
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true,
  display: true,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I built using Android, Firebase, APIs and Computer Vision",
  projects: [
    {
      image: require("./assets/images/instagram.png"),
      projectName: "Instagram App Clone",
      projectDesc:
        "Created an Instagram-like responsive UI using Java and XML with Home, Profile, and Explore screens. Added likes and comments using RecyclerView.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Dhananjay810",
        },
      ],
    },
    {
      image: require("./assets/images/notes.png"),
      projectName: "Notes App (Firebase)",
      projectDesc:
        "Multi-user notes app with Google Authentication, CRUD operations and real-time sync using Firebase.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Dhananjay810",
        },
      ],
    },
    {
      image: require("./assets/images/food.png"),
      projectName: "Food Ordering App",
      projectDesc:
        "Food ordering app with dual sign-in for users and retailers. Added location autofill and real-time order tracking with Firebase.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Dhananjay810",
        },
      ],
    },
    {
      image: require("./assets/images/leaf.png"),
      projectName: "Leaf Detection & Classification",
      projectDesc:
        "Real-time plant leaf detection & classification using YOLO and Python, optimized for Computer Vision tasks.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Dhananjay810",
        },
      ],
    },
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather App (API + DataStore)",
      projectDesc:
        "Built a Weather App using REST API integration. Implemented Preferences DataStore to save user settings like last searched city and units for a smooth experience.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Dhananjay810",
        },
      ],
    },
  ],
  display: true,
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Competitive Programming and technical milestones",

  achievementsCards: [
    {
      title: "650+ Problems Solved",
      subtitle:
        "Solved 650+ DSA problems across different platforms and improved strong problem-solving skills.",
      image: require("./assets/images/coding.png"),
      imageAlt: "Coding",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/dj8818604",
        },
      ],
    },
    {
      title: "1600+ Competitive Programming Rating",
      subtitle:
        "Achieved 1600+ rating in Competitive Programming contests through consistent practice.",
      image: require("./assets/images/rating.png"),
      imageAlt: "Rating",
      footerLink: [],
    },
    {
      title: "IMC Prosperity Contest Rank",
      subtitle:
        "Ranked 51st in India and 121st globally in IMC Prosperity algorithmic contest.",
      image: require("./assets/images/trophy.png"),
      imageAlt: "Trophy",
      footerLink: [],
    },
  ],

  display: true,
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false,
};


// Talks Sections

const talkSection = {
  title: "Talks / Workshops",
  subtitle: emoji(
    "I enjoy teaching and sharing my knowledge through workshops 🎤"
  ),

  talks: [
    {
      title: "Android Development Workshop",
      subtitle: "Hands-on session on Java/Kotlin, UI Design and Firebase",
      slides_url: "",
      event_url: "",
    },
    {
      title: "Mobile App Development Workshop",
      subtitle: "Guided students on building mobile apps and project development",
      slides_url: "",
      event_url: "",
    },
    {
      title: "Robotics Workshop",
      subtitle: "Arduino, sensors, robot debugging and core robotics concepts",
      slides_url: "",
      event_url: "",
    },
  ],

  display: true,
};



// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false,
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi! My Inbox is open for all.",
  number: "+91 8102973133",
  email_address: "dk8818604@gmail.com",
};


// Twitter Section

const twitterDetails = {
  userName: "",
  display: false,
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
