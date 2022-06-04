import React, {Component} from 'react'
import Text from "antd/es/typography/Text";
import ('../../../index.css')


const targetTime = new Date().getTime() + 4000000;

class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <header id='header'>
                        <div className='intro'>
                            <div className='overlay'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-md-8 col-md-offset-2 intro-text'>
                                            <div className='headerTop'>
                                                
                                                <span></span>
                                            </div>
                                            <p >
                                                
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

                <div id='about'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xs-12 col-md-6'>
                                {' '}
                                <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
                            </div>
                            <div className='col-xs-12 col-md-6'>
                                <div className='about-text'>
                                    <br/>
                                    <h2>About Us</h2>
                                    <p>Manage your Research work here.Communicate with Our Supervisors and Get in touch with Panel Members! Make sure to keep track of your Marks, and Improve your experience..</p>
                                    <h2>Discover Research</h2>
                                    <p>Stay up to date with the progress of your Research. Reach Maximum heights by discovering your Coding Skills</p>
                                    <h2>Measure your Impact</h2>
                                    <p>Get in-depth stats on who's been supervising your work and keep track of your citations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default LandingPage;
