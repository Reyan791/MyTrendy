/* eslint-disable no-unused-vars */
import React from 'react';
import SkillCard from '../../Components/skillCard';
import './skills.css'

const Skills = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        The Most Sought-after Soft Skills Courses We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill1.jpg" title="Communication Skills" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill2.jpg" title="Behavioral Skills" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill3.jpg" title="Personality Development" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill4.jpg" title="Leadership" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill5.jpg" title="Negotiation" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill6.jpg" title="Presentation" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill7.jpg" title="Time Management" />
        <SkillCard imageSrc="https://www.excelr.in/softskills-training/assets/images/skills/skill8.jpg" title="Human Resources" />
      </div>
    </div>
  );
};

export default Skills;
