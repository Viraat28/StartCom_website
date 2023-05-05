import React from 'react'
import './LandingPage.css'
import  virat from '../images/attachments/virat.jpg'
import boo from '../images/attachments/boo.jpeg'
import jayanth from '../images/attachments/jayanth.jpeg'
import kartheek from '../images/attachments/kartheek.jpeg'
import lokesh from '../images/attachments/lokesh.jpg'
import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from '../Auth/Auth'

const LandingPage = () => {
    const navigate = useNavigate();

    const authHandler=(event)=>{
        event.preventDefault();
        navigate("/auth");
    }
  return (
    <div className="temp"> 
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
        <div className="container">
            <a className="aclass navbar-brand" href="#">StartCom</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
             
        </div>
    </nav>

    <div className="hero vh-100 d-flex align-items-center" id="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 mx-auto text-center">
                    <h1 className="h1class display-4 text-white">Welcome to StartCom</h1>
                    <p className="text-white my-3">StartCom gives you a chance to express your ideas to the ever-growing
                        world and also to become part of this community. </p>
                    {/* <a href="/index" className="aclass btn me-2 btn-primary">Get Started</a> */}
                    <button type="submit" className="btn btn-primary" onClick={authHandler}>GET STARTED</button>
                </div>
            </div>
        </div>
    </div>
    <section className="sectionclass" id="Features">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 mx-auto text-center">
                    <h1 className="h1class text-primary">Features</h1>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect bounceInUp">
                        <div className="iconbox">
                            <i className="bx bxs-check-shield"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">Pages</h5>
                        <p>User can create pages and express their ideas efficiently with the help of images, links
                            etc..
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect">
                        <div className="iconbox">
                            <i className="bx bxs-comment-detail"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">Groups</h5>
                        <p>User can colloborate with another user by forming groups if he/she likes the idea</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect">
                        <div className="iconbox">
                            <i className="bx bxs-cog"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">Connectivity</h5>
                        <p>This platform helps to connect Startup aspirants
                        </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect">
                        <div className="iconbox">
                            <i className="bx bxs-heart"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">Privacy</h5>
                        <p>Everyone has their own privacy about their ideas and information</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect">
                        <div className="iconbox">
                            <i className="bx bxs-rocket"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">Individuality</h5>
                        <p>Each individual has their own pertained account </p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="service card-effect">
                        <div className="iconbox">
                            <i className="bx bxs-doughnut-chart"></i>
                        </div>
                        <h5 className="h5class mt-4 mb-2">community</h5>
                        <p>join the best community to nurture your idea </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="sectionclass" id="team">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-8 mx-auto text-center">
                    <h1 className="h1class text-primary">TEAM</h1>
                    <h6 className="h6class">Meet Our Team Members</h6>
                </div>
            </div>
            <div className="row text-center g-5">
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member card-effect">
                        <img className="imgclass" src={virat} alt=""/>
                        <h5 className="h5class mb-0 mt-4">Viraat</h5>
                        <p>Student</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member card-effect">
                        <img className="imgclass" src={boo} alt=""/>
                        <h5 className="h5class mb-0 mt-4">Samrat</h5>
                        <p>Student</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member card-effect">
                        <img className="imgclass" src={lokesh} alt=""/>
                        <h5 className="h5class mb-0 mt-4">Lokesh</h5>
                        <p>Student</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member card-effect">
                        <img className="imgclass" src={jayanth} alt=""/>
                        <h5 className="h5class mb-0 mt-4">Jayanth</h5>
                        <p>Student</p>
                    </div>
                </div>
                <center>
                    <div className="col-lg-3 col-sm-6">
                        <div className="team-member card-effect">
                            <img className="imgclass" src={kartheek} alt="" />
                            <h5 className="h5class mb-0 mt-4">Kartheek</h5>
                            <p>Student</p>
                        </div>
                    </div>
                </center>
            </div>
        </div>
    </section>
    <footer>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4">
                        <a className="aclass footer-logo" href="#">StartCom</a>
                    </div>
                </div>
            </div>
        </div>
        <Routes>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    
    </footer>
    
    </div>
    
  )
}

export default LandingPage