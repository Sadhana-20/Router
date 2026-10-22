// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import { Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>College Website</h1>
//       <p>Welcome to our college website!</p>
//       <button onClick={() => navigate('/courses')}>Courses</button>
//       <button onClick={() => navigate('/admission')}>Admission</button>
//       <button onClick={() => navigate('/events')}>Events</button>
//     </div>
//   );
// }

// function Courses() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Our Courses</h1>
//       <p>We offer CSE, IT, ECE and Mechanical Engineering.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/admission')}>Admission</button>
//     </div>
//   );
// }

// function Admission() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Admission</h1>
//       <p>Admissions are open for eligible students.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/events')}>Events</button>
//     </div>
//   );
// }

// function Events() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>College Events</h1>
//       <p>Explore our cultural events and technical workshops.</p>
//       <button onClick={() => navigate('/')}>Home</button>
//       <button onClick={() => navigate('/courses')}>Courses</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/courses" element={<Courses />} />
//       <Route path="/admission" element={<Admission />} />
//       <Route path="/events" element={<Events />} />
//     </Routes>
//   );
// }

// export default App;

import { createContext, useContext, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

const ThemeContext = createContext();

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>SADHANA K</h2>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/education')}>Education</button>
      <button onClick={() => navigate('/skills')}>Skills</button>
      <button onClick={() => navigate('/internships')}>Internships</button>
      <button onClick={() => navigate('/projects')}>Projects</button>
      <button onClick={() => navigate('/certifications')}>Certifications</button>
      <button onClick={() => navigate('/achievements')}>Achievements</button>
      <button onClick={() => navigate('/contact')}>Contact</button>

      <button onClick={toggleTheme}>
        {theme === 'Light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <p>COMPUTER SCIENCE ENGINEERING STUDENT</p>
      <h1>Hi, I'm Sadhana K</h1>
      <h3>Welcome to my Portfolio</h3>
      <p>
        I'm interested in full-stack development and building
        practical web applications.
      </p>

      <button onClick={() => navigate('/projects')}>View Projects</button>
      <button onClick={() => navigate('/contact')}>Contact Me</button>
    </div>
  );
}

function Profile() {
  return (
    <div className="content">
      <h1>Profile</h1>
      <p>
        I am a Computer Science Engineering student with an interest
        in full-stack development. I want to improve my technical skills,
        gain practical experience, and contribute to real-world projects.
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="content">
      <h1>Education</h1>

      <h3>B.E. Computer Science Engineering</h3>
      <ul>
        <li>S.A. Engineering College (Autonomous)</li>
        <li>2023 - 2027</li>
        <li>CGPA: 9.16</li>
      </ul>

      <h3>12th Board - CBSE</h3>
      <ul>
        <li>Sri Krish International School</li>
        <li>Year: 2023</li>
        <li>Percentage: 79.6%</li>
      </ul>

      <h3>10th Board - CBSE</h3>
      <ul>
        <li>Chinmaya Vidyalaya Senior Secondary School</li>
        <li>Year: 2021</li>
        <li>Percentage: 83.6%</li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <div className="content">
      <h1>Technical Skills</h1>

      <h3>Programming Languages</h3>
      <p>Java, C, Python (Basic)</p>

      <h3>Frontend</h3>
      <p>HTML, CSS, JavaScript (Basic)</p>

      <h3>Database</h3>
      <p>MongoDB (Basic)</p>

      <h3>Tools</h3>
      <p>Figma, Canva, WordPress</p>
    </div>
  );
}

function Internships() {
  return (
    <div className="content">
      <h1>Internship Experience</h1>

      <h3>Full Stack Development - Java</h3>
      <p>APPOTECH R&D Solutions</p>
      <p>Learned frontend technologies and Java-based web development.</p>

      <h3>WordPress and Figma</h3>
      <p>DETQEL Corp | June - August 2025</p>
      <p>Worked with website development and UI/UX design tools.</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="content">
      <h1>My Projects</h1>

      <h3>Recipe Sharing Platform</h3>
      <ul>
        <li>Created a recipe platform using the MERN stack.</li>
        <li>Added ingredient-based filtering.</li>
      </ul>

      <h3>Movie Ticket Booking Website</h3>
      <ul>
        <li>Developed a website for booking movie tickets and snacks.</li>
      </ul>

      <h3>NGO Charity Website</h3>
      <ul>
        <li>Designed a charity website using WordPress and Figma.</li>
      </ul>

      <h3>Thai Restaurant App</h3>
      <ul>
        <li>Designed a restaurant application interface using Figma.</li>
      </ul>
    </div>
  );
}

function Certifications() {
  return (
    <div className="content">
      <h1>Certifications</h1>
      <ul>
        <li>LinkedIn - Career Essentials in Software Development</li>
        <li>Mendix - Rapid Developer</li>
        <li>AWS Academy - Cloud Foundations</li>
      </ul>
    </div>
  );
}

function Achievements() {
  return (
    <div className="content">
      <h1>Achievements</h1>
      <ul>
        <li>Won second place in IDEATHON '25 for UI/UX app design.</li>
        <li>Secured second rank in the department with a 9.42 GPA in Semester 1.</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="content">
      <h1>Contact Me</h1>
      <p>Phone: 9384419354</p>
      <p>Email: sadhana271529@gmail.com</p>
      <p>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/sadhana-6152a4">
          My LinkedIn Profile
        </a>
      </p>
      <p>
        GitHub:{' '}
        <a href="https://github.com/Sadhana-20">
          My GitHub Profile
        </a>
      </p>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('Light');

  const toggleTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark');
    } else {
      setTheme('Light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'Light' ? 'light-theme' : 'dark-theme'}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;