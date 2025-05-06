
import {Fade} from 'react-awesome-reveal';
import React from 'react';

function Projects() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Projects</h1>

      <h3>TaskNest – React Web App</h3>
      <p>
        A dynamic task planner with login/auth, weekly view, filters, and CRUD support. Built using React.js, REST API, and deployed on GitHub Pages.
      </p>

      <h3>Operating System Simulation</h3>
      <p>
        A CLI-based system simulator in C that implements process scheduling (Round Robin, Priority), memory management, and file I/O simulation.
      </p>

      <h3>TCP/IP Networking Toolkit</h3>
      <p>
        A client-server chat app using TCP sockets in C++, including command parsing, packet simulation, and live debugging with Wireshark and netstat.
      </p>
    </div>
  );
}

export default Projects;
