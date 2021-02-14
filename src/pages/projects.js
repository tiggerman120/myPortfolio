import React from 'react'

import Layout from '../components/Layout';
import Header from '../components/Header';
const secondpage = () => (
  <Layout>
    <Header></Header>
    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src="https://chop-chop.org/app/uploads/2019/05/logo-react-blue-1.svg" alt="" width="500px"/>
          </div>
          {/* credit to chop-chop.org for this image */}
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>React JS To Do List</h4>
              <p className="text-black-50 mb-0">
                A to-do list front-end application built using the React JS framework
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
                  <p className="mb-0 text-white-50">
                    Full CRUD back-end application
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>



)
export default secondpage