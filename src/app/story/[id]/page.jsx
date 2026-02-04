import React from 'react';

const page =async ({params}) => {

    const {id}=await params; 
    //id is coming from url ..the folder name [id]
    const Id=parseInt(id)
    console.log(id);

    
    const devStory=[
  {
    "id": 1,
    "name": "Arif Hossain",
    "designation": "Frontend Developer",
    "companyName": "TechNova Ltd",
    "experience": "3 Years",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "story": "Arif started his journey as a self-taught developer during his university days. He spent countless nights learning HTML and CSS from free resources and practicing by cloning popular websites. His curiosity pushed him to learn JavaScript and React, which changed his career path completely. After several failed interviews, he finally landed his first job as a junior developer. Today, he confidently builds modern user interfaces and mentors beginners who remind him of his early struggles.",
    "about": "Arif Hossain is a passionate Frontend Developer with three years of professional experience in building responsive and user-friendly web applications. He specializes in modern JavaScript frameworks, especially React, and has a strong understanding of UI/UX principles. Arif believes that clean code and good design go hand in hand. He enjoys transforming complex problems into simple, beautiful interfaces. Outside of work, he regularly contributes to open-source projects and writes technical blogs to help new developers. His long-term goal is to become a full-stack architect and build scalable digital products that solve real-world problems."
  },
  {
    "id": 2,
    "name": "Nusrat Jahan",
    "designation": "Backend Engineer",
    "companyName": "CloudSpark",
    "experience": "4 Years",
    "skills": ["Node.js", "Express", "MongoDB", "PostgreSQL", "Docker"],
    "image": "https://randomuser.me/api/portraits/women/45.jpg",
    "story": "Nusrat’s interest in backend development began when she wanted to understand how data flows behind the scenes. She initially struggled with databases and server concepts, but consistency helped her overcome the fear. By building small APIs daily, she gained confidence. Her first production bug taught her the importance of testing and logging. Over time, she became known in her team as a reliable problem solver who enjoys handling complex server-side logic.",
    "about": "Nusrat Jahan is an experienced Backend Engineer with a strong focus on scalable and secure server-side applications. With four years of experience, she has worked on multiple cloud-based systems handling thousands of users. She is highly skilled in Node.js, RESTful APIs, and database design. Nusrat values performance, security, and clean architecture. She enjoys collaborating with frontend teams to deliver seamless products. In her free time, she explores DevOps tools and improves deployment pipelines. Her vision is to design systems that are both powerful and easy to maintain."
  },
  {
    "id": 3,
    "name": "Tanvir Ahmed",
    "designation": "Full Stack Developer",
    "companyName": "NextGen Solutions",
    "experience": "5 Years",
    "skills": ["React", "Node.js", "TypeScript", "MySQL", "AWS"],
    "image": "https://randomuser.me/api/portraits/men/54.jpg",
    "story": "Tanvir began coding out of curiosity and quickly realized its creative power. He loved seeing ideas turn into real applications. His journey was filled with debugging sessions and refactoring old code. Learning cloud services was a turning point in his career. After leading a major project migration, he earned recognition as a dependable full stack developer who understands both business and technology.",
    "about": "Tanvir Ahmed is a Full Stack Developer with five years of experience delivering end-to-end web solutions. He is comfortable working across the entire stack, from interactive frontend components to robust backend services. Tanvir has led small teams and enjoys mentoring junior developers. He strongly believes in writing maintainable, scalable code. His experience with cloud platforms allows him to design reliable deployment strategies. Outside of work, he enjoys reading about system design and experimenting with new technologies."
  },
  {
    "id": 4,
    "name": "Sadia Rahman",
    "designation": "UI/UX Designer",
    "companyName": "CreativeHub",
    "experience": "3.5 Years",
    "skills": ["Figma", "Adobe XD", "User Research", "Prototyping"],
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "story": "Sadia always had an eye for design and storytelling. She transitioned from graphic design to UI/UX after realizing the impact of user-centered design. Through constant feedback and testing, she improved her design thinking skills. Her designs are now used by thousands of users daily, which motivates her to keep improving.",
    "about": "Sadia Rahman is a creative UI/UX Designer with a strong focus on usability and visual balance. She has worked closely with developers and product managers to design intuitive digital experiences. Sadia believes empathy is the key to good design. She conducts user research, builds prototypes, and refines interfaces based on real feedback. Her goal is to design products that feel natural and effortless to use. In her free time, she studies human psychology and design trends."
  },
  {
    "id": 5,
    "name": "Rakib Hasan",
    "designation": "DevOps Engineer",
    "companyName": "InfraWave",
    "experience": "6 Years",
    "skills": ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux"],
    "image": "https://randomuser.me/api/portraits/men/77.jpg",
    "story": "Rakib started as a system administrator and slowly moved into DevOps. Automating repetitive tasks fascinated him. He faced many failures while learning cloud infrastructure, but each failure taught him something valuable. Today, he ensures smooth deployments and stable systems for large-scale applications.",
    "about": "Rakib Hasan is a seasoned DevOps Engineer with six years of experience managing cloud infrastructure and automation pipelines. He specializes in containerization, monitoring, and deployment strategies. Rakib focuses on reliability, scalability, and security. He enjoys improving development workflows and reducing system downtime. His passion lies in bridging the gap between development and operations teams. Outside work, he experiments with new cloud tools and contributes to technical communities."
  },
  {
    "id": 6,
    "name": "Mehedi Islam",
    "designation": "QA Engineer",
    "companyName": "SoftTest Pro",
    "experience": "4.5 Years",
    "skills": ["Manual Testing", "Automation Testing", "Selenium", "JIRA"],
    "image": "https://randomuser.me/api/portraits/men/90.jpg",
    "story": "Mehedi entered the tech industry through quality assurance and quickly realized the importance of testing. He enjoys finding edge cases that others miss. His attention to detail helped prevent major production issues. Over time, he transitioned into automation testing to improve efficiency.",
    "about": "Mehedi Islam is a detail-oriented QA Engineer with over four years of experience ensuring software quality. He has tested web and mobile applications across different domains. Mehedi believes quality is everyone’s responsibility, not just QA. He works closely with developers to catch issues early. His expertise includes test planning, automation frameworks, and bug tracking. He aims to build robust testing processes that enhance product reliability and user trust."
  }
]
     const specificStory=devStory.find(story=>story.id===Id);

     if(!specificStory){
        return  <h1>Story page does not find</h1>
     }
     
    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
  <h1 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200">
    This is page story details
  </h1>

  <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700">
    
    {/* Profile Section */}
    <div className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={specificStory.image}
        alt={specificStory.name}
        className="w-40 h-40 rounded-full border-4 border-sky-500 object-cover"
      />

      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {specificStory.name}
        </h1>
        <p className="text-xl text-sky-600 dark:text-sky-400">
          {specificStory.designation}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {specificStory.companyName} • {specificStory.experience}
        </p>
      </div>
    </div>

    {/* Skills */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {specificStory.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-sky-100 text-sky-700 
                       dark:bg-sky-900 dark:text-sky-300 
                       px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Story */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Journey Story
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {specificStory.story}
      </p>
    </div>

    {/* About */}
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        About
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {specificStory.about}
      </p>
    </div>

  </div>
</div>

    );
};

export default page;