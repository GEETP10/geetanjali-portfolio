import {Fade} from 'react-awesome-reveal';

function Experience() {
  return (
    <Fade directiom ="up" trigger0nce>
      <section className="container text-center py-5">
      <h2>Experience</h2>
      <div style={{ marginBottom: '2rem' }}>
        <h3>Software Developer – USA (Feb 2024 – Present)</h3>
        <ul>
          <li>Designed and implemented frontend components using React and backend services with Java.</li>
          <li>Integrated REST APIs and optimized dashboard performance, reducing latency by 40%.</li>
          <li>Wrote modular, testable code with JUnit and maintained over 90% test coverage.</li>
          <li>Collaborated in Agile teams using Git, Jira, and CI/CD pipelines for deployment.</li>
        </ul>
      </div>

      <div>
        <h3>Software Developer – India (Sep 2020 – Dec 2021)</h3>
        <ul>
          <li>Built UI interfaces and backend workflows using Java, HTML/CSS, and JavaScript.</li>
          <li>Participated in QA testing, bug fixing, and API integration across engineering teams.</li>
          <li>Helped deliver production-ready features in iterative, fast-paced product cycles.</li>
        </ul>
        </div>
      <h1>Skills</h1>
      <ul>
        <li><strong>Languages:</strong> C, C++, Java, Python, JavaScript</li>
        <li><strong>Systems:</strong> Linux OS, OS Scheduling, TCP/IP Networking, Virtualization</li>
        <li><strong>Frontend:</strong> React.js, HTML/CSS</li>
        <li><strong>Backend:</strong> REST API, Distributed Systems</li>
        <li><strong>Tools:</strong> Git, GitHub Actions, Postman, Figma</li>
        <li><strong>Testing:</strong> JUnit, Agile Collaboration</li>
      </ul>
      </section>
    </Fade> 
  );
}

export default Experience;
