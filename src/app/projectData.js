const projects = [
    {
        id: "9MM",
        title: "Nine Man's Morris",
        type: "App Development",
        image: "/projects/9MM/main.png",
        images: ['/projects/9MM/main.png', '/projects/9MM/1.png', '/projects/9MM/2.png'],
        content: `
        <ul class="list-disc">
            <li>This project was developed during my Year 3 Semester 2 time, with a team of 4 members.</li>
            <li>The aim of this project is to recreate the famous Nine Men's Morris game while strictly following Object Oriented Programming principles.</li>
            <li>The game and its UI was developed from scratch using Java as the coding language and JavaFX as its UI design.</li>
            <li>The game supports Player vs Player, Player vs Computer and a tutorial mode, with hint feature developed as well.</li>
        </ul>
        `,
    },
    {
        id: "ATS",
        title: "Auto-Grading Tutoring System",
        type: "Web Development",
        image: "/projects/ATS/main.png",
        images: ['/projects/ATS/main.png', '/projects/ATS/1.png', '/projects/ATS/2.png','/projects/ATS/3.png','/projects/ATS/4.png','/projects/ATS/5.png'],
        content: `
        <ul class="list-disc">
            <li>This project was developed during my Year 3 time, with a team of 15 members.</li>
            <li>The aim of this project is to create an tutoring system that helps the lecturers and tutors to mark assignments/labs and give feedbacks to the students automatically.</li>
            <li>The base code was provided by National University of Singapore (NUS) and the team was instructed to create a learning page for students to submit their work and get graded.</li>
            <li>Java was used to create the functionality of the page, whereas Figma is used to design the UI of the page, and Scaled Agile Framework was used for the team to plan out the development cycle over the year.</li>
        </ul>
        `,
    },
    {
        id: "HF",
        title: "Hearty Meal",
        type: "Web Development",
        image: "/projects/HF/main.png",
        images: ['/projects/HF/main.png', '/projects/HF/1.png', '/projects/HF/2.png','/projects/HF/3.png','/projects/HF/4.png','/projects/HF/5.png','/projects/HF/6.png','/projects/HF/7.png','/projects/HF/8.png','/projects/HF/9.png'],
        content: `
        <ul class="list-disc">
            <li>This project was developed during my Year 4 time, with a team of 7 members.</li>
            <li>The aim of this project is to create a nutrition tracking web application for heart failure patients.</li>
            <li>This application contains nutrition tracking and logging, fluid tracking and logging, recipe library, logging statistics and more.</li>
            <li>The web application was designed on Figma and created using NuxstJS framework and Tailwind CSS for frontend development, NestJS backend framework to develop, as well as PostgreSQL databse to store the user's data.</li>
        </ul>
        `,
    },
    {
        id: "FYP",
        title: "Automated Classifcation of Learning Outcomes",
        type: "Final Year Project",
        image: "/projects/FYP/main.png",
        images: ['/projects/FYP/main.png', '/projects/FYP/1.png', '/projects/FYP/2.png'],
        content: `
        <ul class="list-disc">
            <li>This project was developed during my Year 4 time, with a team of 7 members.</li>
            <li>The aim of the final year project is to create an autoamted system that classifies learning outcomes based on two taxonomies, Bloom's taxonomy and Structure of Observed Learning Outcome (SOLO) taxonomy to reduce the time spend on classfiying learning outcoms for lecturers.</li>
            <li>This console UI project was developed using PyTorch, HuggingFace, numpy, scikit-learn libraries and more. RoBERTa natural language model and Long Short-Term Memory deep learning model were used to achieve the classifcation process.</li>
        </ul>
        `,
    },
];

export default projects;
  