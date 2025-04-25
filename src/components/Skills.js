import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";
import python from "../assets/img/python1.svg";
import csharp from "../assets/img/csharp.svg";
import fastapi from "../assets/img/fastapi.svg";
import kubernetes from "../assets/img/kubernetes.svg";
import ecs from '../assets/img/ecs.svg'
import docker from "../assets/img/docker.svg";
import cicd from "../assets/img/cicd.svg";
import postgresql from '../assets/img/postgresql.svg';
import S3 from '../assets/img/Simple Storage Service.svg';
import aws from '../assets/img/aws.svg';
import react from '../assets/img/react-2.svg';
import rabbitmq from '../assets/img/rabbitmq.svg'
import mysql from '../assets/img/mysql-svgrepo-com.svg'

import './Skills.css';
 
export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I'm crafting code and building digital solutions to transform ideas into reality.
                <br /> Here are some technologies I have been working with:
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <SkillItem image={python} altText="Python" />
                <SkillItem image={csharp} altText="C#" />
                <SkillItem image={fastapi} altText="FastAPI" />
                <SkillItem image={rabbitmq} altText="RabbitMQ" />
                <SkillItem image={aws} altText="AWS" />
                <SkillItem image={ecs} altText="ECS" />
                <SkillItem image={kubernetes} altText="Kubernetes" />
                <SkillItem image={docker} altText="Docker" />
                <SkillItem image={cicd} altText="CI/CD" />
                <SkillItem image={postgresql} altText="PostgreSQL" />
                <SkillItem image={S3} altText="S3" />
                <SkillItem image={mysql} altText="MySQL" />
                <SkillItem image={react} altText="React.js" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Color Sharp" />
    </section>
  );
};

const SkillItem = ({ image, altText }) => (
  <div className="item">
    <img src={image} alt={altText} />
    <h5>{altText}</h5>
  </div>
);
