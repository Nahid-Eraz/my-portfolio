import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faGraduationCap, faBriefcase} from '@fortawesome/free-solid-svg-icons'

const Qualification = () => {
    return (
        <div className='mt-3'>
            <h2 style={{ color: 'white' }} className='text-center'>EDUCATIONAL QUALIFICATION</h2>
            <VerticalTimeline className='mt-5'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faBriefcase} />}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Front-End, MERN</h4>
                    <p>
                        Ready To Hire
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2020 - Enrolling"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Professional Master Degree</h4>
                    <p>Jahangirnagar University</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap} />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science & Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>Daffodil International University</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faStar} />}
                />
            </VerticalTimeline>
        </div>
    );
};

export default Qualification;