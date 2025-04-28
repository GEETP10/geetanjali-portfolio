
import {Fade} from 'react-awesome-reveal';
function Projects() {
  return (
    <Fade direction="up" trigger0nce>
      <section className="container py-5">
      <h2 className="text-center mb-4">🎯 Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h4>AWS IAM Audit Scripts</h4>
            <p>Python scripts for IAM security auditing 🔐</p>
            <a href="https://github.com/GEETP10/aws-iam-audit-scripts" className="btn btn-primary">View Project</a>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow p-3">
            <h4>Incident Response Bot</h4>
            <p>AI-powered GuardDuty threat triage and automation 🤖☁️</p>
            <a href="https://github.com/GEETP10/incident-response-bot" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
     </section>
    </Fade>
  );
}

export default Projects;
