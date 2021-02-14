import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Subscribe from '../components/Subscribe';
import Header from '../components/Header';

import demoImage2 from '../assets/images/demo-image-02.jpg';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Software Engineer</h2>
            <p className="text-white-50">
              Software Developer, Certified Nursing Assistant<br />
              <a href="https://github.com/tiggerman120">My Github</a>
            </p>
          </div>
        </div>
        
      </div>
    </section>
    
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src="https://i.imgur.com/SBnUHoM.png" alt="" width="500px"/>
          </div>
          {/* credit to chop-chop.org for this image */}
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Hall of Fame</h4>
              <a href="https://github.com/TeamUndeclared/HallOfFameAPI">Github</a>
              <p className="text-black-50 mb-0">
                   A virtual trophy case
                
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src="https://developer.okta.com/assets-jekyll/blog/node-token-auth/token-authentication-flow-69804c12334715c597128cd9273bca5e32ed516b62987902310efc54d1840a40.png" alt="" />
          </div>
          {/* credit to Macy Ngan https://developer.okta.com/blog/2019/02/14/modern-token-authentication-in-node-with-express for this image */}
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Bearer Auth</h4>
                  <a href="https://github.com/tiggerman120/bearer-auth">Github</a>
                  <p className="mb-0 text-white-50">
                    Full CRUD back-end application
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src="https://chop-chop.org/app/uploads/2019/05/logo-react-blue-1.svg" alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">React JS To Do List</h4>
                  <p className="mb-0 text-white-50">
                    <a href="https://github.com/tiggerman120/react-webhooks">Github</a><br />
                  A to-do list front-end application built using the React JS framework
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Subscribe />

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
