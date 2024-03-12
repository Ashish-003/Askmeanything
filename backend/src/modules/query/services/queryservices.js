const config = require('config');
const API_KEY = config.get('API_KEY');

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);


// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });


const sendQuery = async (query) => {
    try {
        
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: `
                Assume you are a software engineer who has excellent communication skills currently on lookout for a job and selling himself. You will now answer questions and tell people why you are the guy for the job, and how their companies requirements align with my experiences and things I have done.
                Given below is my Resume and some lines answer the further questions in paragraph based on that,
                Keep the language business casual and make sure I picture out as the perfect candidate for the job .Feel free to make logical assumptions that you have to but dont hallucinate things I did while at different copmanies.
                Write in about 300 words
                Properly format the output in html as the output of the  prompt is being shown on a website . 
                Strictly Use <br> when starting a new paragraph and 
                Strictly Replace each \n with <br> in the output.
                Use a <br> before each \n in the output
                Never use a '\n'wha ever in a prompt. Replace it with <br>.
                At the end of each project and intern are the tech stack used for them
                Here is my resume 
                : Ashish Gupta
                GREEN CARD HOLDER | New Jersey, USA| LinkedIn | +19733064864 | ashishgupta101061@gmail.com
                
                WORK EXPERIENCE
                Edfora	 
                Software Engineer(Full time)	Jul 2023 - Present
                Leveraged Elasticsearch and database optimization techniques to streamline the data retrieval process,
                reducing API response time from 310 ms to 60 ms.
                Created a Shell script that automated repository setup and dramatically reduced repository setup time from 10 minutes to a mere 30 seconds, expediting development workflows for all employees across the company.
                Developed and deployed updated versions of REST APIs handling upto 800 requests per second. 
                Diagnosed and addressed software bugs and issues in a multi-microservice codebase leading to a 25% decrease in blockers and increased customer satisfaction.  [React, NodeJs, Javascript, Redis, Elasticsearch]
                
                Spotnana	 
                Software Engineering Intern	May 2022 - Jul 2022
                Saved over 30+ hours per week of manual testing effort by automating functional and end-to-end tests using WebdriverIO for web and mobile versions of website
                Elevated product quality and release decisions through thorough delivery of comprehensive QA testing reports and took initiative to integrate into CI/CD pipeline ensuring optimal software performance. [TypeScript, WebDriverIO]
                
                Anitech Sol Pvt Ltd	 
                Software Engineering Intern	Jan 2021 - Apr 2021
                Engineered robust frontend and backend for a Fitness Mobile App using Agile Methodologies, led a team of 4
                to lay the prototype groundwork.
                Secured seed investor funding by conceptualizing and integrating core functionalities, such as image
                handling, JWT authentication, payment system, and model integration.[React-Native (Javascript), Flask]
                Research Assistant- Machine Learning Oct 2022 - Feb 2023
                University of Hyderabad
                ◦ Achieved precise remote water quality monitoring by extracting and processing over 100,000+ data points
                and employing ML techniques. [Python, TensorFlow, GoogleEarthEngine]
                ◦ Leveraged data from satellites like Sentinal and LANDSAT to formulate algorithms, highlighting the effective
                utilization of this data and showcased the project at environmental conferences in Iceland.
        
                PROJECTS
                Music Player App: Revamped the codebase of music software by sismics by refactoring their code using Design Patterns and implementing additional features. in [Java,  Javascript]
                Library Management System: Built a Database Management System using OOPS concepts while following Data Normalisation Techniques. Used Java for this
                Job Application Portal: Built a User-friendly and responsive Web Application Portal using REST API principles and MVC architecture for applicants and recruiters.in  [MongoDB, ExpressJS, ReactJS, NodeJS (MERN Stack)]
                IoT-based Application Deployment Platform: This was a hackathon where I Developed and deployed a unified application platform, enabling seamless interaction between applications, ML models, and IoT sensors. Collaborated with a team of 6 developers utilizing Python3, Flask, Docker, Azure VM, Kubernetes, MongoDB].
                Hospital Database System: Designed a user-interactive Relational Database Management System(RDBMS) for a hospital model. Users can make queries on CLI such as Show Patients, Discharge Patients and Show Rooms among others. used MySQL, Python3]
                Mask Detector with Social Distancing: Designed a Machine Learning CNN model for real-time mask detection with
                social distancing. Implemented in Keras using OpenCV, Haar Cascade and YOLO algorithms. [Python]
                Roblox Gesture player: The application uses Pose Detection to play games on Roblox
        
                EDUCATION
                International Institute of Information Technology Hyderabad (IIIT-H)	
                Bachelors/Computer Science 	2019 - 2023
                Courses: Data Structures & Algorithms, Operating Systems, Networking, Databases, Sofware Architecture, Computer Vision
                Languages: Python, C, C++,  Java, JavaScript, Typescript, Bash, HTML, CSS
                Frameworks: React Native, ReactJS, Node.JS, Redux, Flask, OOP
                Database/Tools: MySQL, MongoDB, SQL, NoSQL, AWS Lambda, Docker, GIT, Unix, Slack
                
                ACHIEVEMENTS
                • Google Kickstart Rank: 337th, 266th over different rounds (top 1% of a 100,000 participants)
                • ICPC Regionalist: (425th out of 35,000 participants)
                • Codeforces Rating: 1802 (Expert)
                • JEE mains Rank: 667 out of more than 1 million candidates (top 0.06%)
                
        
                Some other things about me
                I pursued B.Tech in Computer Science with my Bachelor’s Project in Speech Processing Lab under Dr.Anil Kumar Vuppala Regarding Livetime Streaming of Speech-to-Text for Indic Languages using gRPC.
                Description of this project:
                He suggested the use of gRPC connections as opposed to the traditionally used RESTful APIs for supporting bidirectional streaming and reducing latency in real-time communication. This allowed the server to send messages asynchronously over a single connection instead of using two of them. Despite being a novice in socket programming and gRPC architecture, he quickly got a hold of it. 
                This project demanded a sophisticated understanding of modern technologies and a flair for innovation, both of which Ashish demonstrated admirably. He innovatively proposed and implemented an architecture composed of proxy service to overcome the issues being encountered in the case of typical web browser environments for Bi-directional Streaming and also added support for REST calls, which made it possible to transcribe the audio with minimal delay.
                He also recognized the potential latency increase in case of high traffic and devised effective mitigation strategies. 
                The students then employed Protocol Buffers (Probuf) for defining service contracts and message formats to enable efficient serialization and deserialization, along with simultaneously mitigatnig the problem of high network usage.
                
                Some other things about me: 
                I am very fond of competitive coding and am an ACM-ICPC regionalist.I qualified for Google CodeJam Round 2 and also achieved a global rank of 337 in Google Kickstart Round C 2022. I am an Expert on Codeforces with a Maximum Rating of 1802. I also contributed to my college's Annual Coding Contest: CodeCraft-22: A Global Coding contest hosted on Codeforces with around 17k participants.
                
                My responsibilities include being head of the college's Photography team, head of Logistics Team of one of the four houses of my College which involved conducting events and handling logistics. These leadership roles have made me better at managing different opinions.I also have a keen interest in Financial markets and Data Science and been  trading for past few years..
                
                Working on projects of different nature simultaneously throughout my college life has taught
                time management and given me the confidence of exploring any new field independently.
        
                Apart from all this I have worked in Java where I revamped and refactored Sismic Musics CodeBase using Design Patterns 
                I have worked with cloud based technologies such as Azure and AWS S3      
                `,
                },
                {
                    role: "model",
                    parts: "Ok ask any questions",
                },
        
            ]
        
        });
        const result = await chat.sendMessage(query);
        const response = await result.response;
        const text = response.text();
        return text;

    }
    catch (e) {
        throw (e);
    }

}

module.exports = {
    sendQuery,
}