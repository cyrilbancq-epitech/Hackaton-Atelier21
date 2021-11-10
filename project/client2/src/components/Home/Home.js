import React, { useEffect, useState } from 'react';
import axios from 'axios';
// IMPORT COMPONENTS
import Timeline from '../Timeline/Timeline';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// IMPORT BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: 'http://localhost:8000/api/projects/get'
        }).then((response) => {
            setProjects(response.data.projects)
        }).catch((error) => {
            console.log(error);
        })
    }, []);
  return (
    <div className="home">
      <head>
        <title>Paléo H2O</title>
        <meta name="description" content="Atelier21" />
        <link rel="icon" href="/favicon.ico" />
      </head>
        <Header />
        <Timeline projects={projects} />
        <Footer />
      <div className="logo">
        <img src="./logo.png" alt="Atelier21"/>
      </div>
    </div>
  )
}

export default Home;
