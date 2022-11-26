import React from 'react'
import Bounce from 'react-reveal/Bounce';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import A1 from "../award-1.jpg"
import A2 from "../award-2.jpeg"
import A3 from "../award-3.jpg"
import A4 from "../award-4.jpg"
import StarIcon from "../StarIcon.png"
import WorkIcon from "../WorkIcon.png"
import SchoolIcon from "../SchoolIcon.png"

const HistoryScreen = () => {
    return (
        <main className='bg-gradient-to-r from-green-200 to-yellow-200'>
        <section className="flex flex-col gap-10 max-w-screen-xl py-36 mx-auto px-6 overflow-y-hidden bg-white">
            {/* heading  */}
            <Bounce left>
                <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-gray-700 poppins text-3xl">Our {" "} <span className="text-green-500 font-semibold select-none">History</span></h1>
                    <div className="bg-green-500 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                </div>
                <div className="flex flex-col min-w-full rounded-lg overflow-hidden shadow-green-500/50 md:shadow-xl md:shadow-green-500">
                    <VerticalTimeline lineColor='#11c3e7'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">The manufacturing Unit set-up is fully designed as per GMP-Schedule M, Drug and Cosmetics Act, 1940 and drugs Authorities have approved our works and awarded Drugs manufacturing License on 2nd February 2006</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2007"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Setup Head Office in Lucknow</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Start working with Zydus Cadila</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2009"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Elaborate the Third party business with Top 10 MNCs Companies</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">GMP and GLP Approved from SLA</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2012"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Star Achiever Award 2012-2013 Intas Pharmaceuticals</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2013"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Star Achiever Award 2013-2014 Intas Pharmaceuticals</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2014"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Star Achiever Award 2014-2015 Intas Pharmaceuticals</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2015"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Star Achiever Award 2015-2016 Intas Pharmaceuticals</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2017"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Star Achiever Award 2017-2018 Intas Pharmaceuticals</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Expansion in Plant & Introduce Own products in Domestic Market</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">WHO-GMP, ISO 9001:2015 & DPML IVORY COAST Approved</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2020"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Start the Export in Different Countries own product and third party</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2021"
                            contentStyle={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,245,71,1) 0%, rgba(17,195,231,1) 100%)' }}
                            contentArrowStyle={{ borderRight: '7px solid  #11c3e7' }}
                            iconStyle={{ background: '#11c3e7', color: '#fff' }}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Approved PPB Kenya</h4>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                <div className="flex flex-col min-w-full shadow-lg rounded-lg py-12 pt-4 border-2 align-content-center pl-24">
                    <div className='flex flex-row align-middle items-center text-center justify-center poppins text-2xl text-green-500 pr-24 pt-2'>Awards</div>
                    <div className='flex flex-row align-content-center'>
                        <img src="https://lucentbiotech.com/wp-content/uploads/2020/06/Untitled-3-1.jpg" height={200} width={200}>
                        </img>
                        <img src={A1} height={200} width={200}>
                        </img>
                        <img src={A2} height={200} width={200}>
                        </img>
                        <img src={A3} height={200} width={200}>
                        </img>
                        <img src={A4} height={200} width={200}>
                        </img>
                    </div>

                </div>

            </Bounce>
        </section>
        </main>
    )
}

export default HistoryScreen