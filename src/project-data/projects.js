import jobIcon from '../assets/images/job.jpeg';
import TSPIcon from '../assets/images/london.png';
import natoursIcon from '../assets/images/alltours.png';
import wonIcon from '../assets/images/won.jpeg';
import chat from '../assets/images/chatgpt.jpg';
import test from '../assets/images/test.jpg';
const projects = [
  {
    id: 1,
    projectType: 'FULLSTACK WEB APPLICATION',
    title: 'Job Tracker',
    projectURL: 'https://github.com/lexliu19/jobs-tracker',
    description:
      'JobTracker is a full-stack single page application (SPA) that facilitates efficient job application management. It offers a Dashboard for creating, editing, looking up, and deleting job applications. On the backend, I implement a RESTful API using Node.js and Express.js, enabling smooth data handling through routes and controllers. For the frontend, I utilize modern React to render pages and manage data states, ensuring an interactive and seamless user experience. With these technologies, JobTracker provides a comprehensive solution for managing job applications.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    image: jobIcon,
  },
  {
    id: 2,
    projectType: 'CHATGPT APPLICATION',
    title: 'Travel Agency Chatbot',
    projectURL: 'https://github.com/lexliu19/travel-chatbot',
    description:
      'The Travel Chatbot project is built with the OpenAI API and a custom database. When a user inputs a query, it is first analyzed by ChatGPT to determine whether it is a general question or a proprietary question.',
    technologies: ['Next.js', 'OpenAI API', 'SQL', 'Tailwind CSS'],
    image: chat,
  },

  {
    id: 3,
    projectType: 'RESTFUL API BACKEND',
    title: 'NATOURS',
    projectURL: 'https://lexliu19.github.io/',
    description:
      'Natours is a RESTful API backend project that utilizes Node.js and Express.js. It features comprehensive CRUD operations for tours and users, along with multiple data handling routes. I use MongoDB Atlas and Mongoose for efficient management of data models, schemas, and collections. Additionally, I use validator modules and develop custom functions for robust data validation. To prioritize security and safeguard user data, I have integrated JSON Web Tokens (JWT) for authentication and authorization. Project Link. ',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
    image: natoursIcon,
  },
  {
    id: 4,
    projectType: 'COURSE STUDY PROJECT',
    title: "NLP Analysis of Adam Smith's Wealth of Nations",
    projectURL:
      'https://github.com/lexliu19/Natural-Language-Processing-Analysis-of-Adam-Smith-s-Wealth-of-Nations',
    description:
      "This project is for Data Science Engineering Methods and Tools course at Northeastern University. The project aimed to explore the linguistic patterns of Adam Smith's Wealth of Nations through the use of advanced natural language processing techniques. Using libraries such as numpy pandas, scipy, networkx and sklearn, we applied bayesian modeling using a negative binomial model to analyze the relationships between positive words and economic indicators such as wages and profits. We also conducted network modeling and used the PageRank algorithm to identify key topic sentences. In addition, we performed semantic modeling by using K-Medoids clustering algorithm to divide the book into ten sections and identify the topic sentence of each section. Through this project, we gained insights into the language used in Adam Smith's Wealth of Nations ",
    technologies: ['Python', 'NLP', 'Jupyter Notebook'],
    image: wonIcon,
  },
  {
    id: 5,
    projectType: 'COURSE STUDY PROJECT',
    title: 'Traveling Salesman Problem',
    projectURL: '',
    description:
      'This project serves as the final project for the Northeastern University INFO6205 Program Structure and Algorithms course. Our team members and I implemented various algorithms and strategies to tackle the Traveling Salesman Problem (TSP). We utilized these algorithms to devise effective solutions for optimizing routes and minimizing distances in the context of the TSP. By applying our knowledge of algorithms and employing innovative strategies, we aimed to provide efficient solutions for this challenging problem. ',
    technologies: ['Java', 'Christofides Algorithm', 'Github for cooperation'],
    image: TSPIcon,
  },
  {
    id: 6,
    projectType: 'COURSE STUDY PROJECT',
    title: 'Selenium Test for Northeastern Student Portal',
    projectURL: 'https://github.com/lexliu19/SeleniumrTest',
    description:
      'This project is an automated testing project designed to validate the functionality and performance of the Northeastern University student portal. Using Selenium, the project tests key features such as login, course registration, and grade viewing, ensuring that the portal operates smoothly across different browsers and scenarios, reducing manual testing effort and improving reliability ',
    technologies: ['Selenium', 'Java', 'IntelliJ IDEA'],
    image: test,
  },
];

export default projects;
