import React from 'react'
import TopNav from '../components/topNav/topNav'
import { FooterThin, FooterWide } from '../components/footer/footer'
import ButtonSmall from '../components/buttonSmall/buttonSmall'
import ButtonBig from '../components/buttonBig/buttonBig';

const AboutPage = () => {
    return (
        <div>
            <TopNav />
            
            <FooterWide />
            <FooterThin />
        </div>
    )
}

export default AboutPage;
