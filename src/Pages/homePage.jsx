import React from 'react'
import TopNav from '../components/topNav/topNav'
import { FooterThin, FooterWide } from '../components/footer/footer'
import ButtonSmall from '../components/buttonSmall/buttonSmall'
import ButtonBig from '../components/buttonBig/buttonBig';

const HomePage = () => {
    return (
        <div>
			<TopNav />
            <div style={{height: '400px'}}>
                <ButtonSmall />
                <div style={{marginTop: '20px'}}>
                    <ButtonBig />
                </div>
            </div>
            <FooterWide />
            <FooterThin />
        </div>
    )
}

export default HomePage
