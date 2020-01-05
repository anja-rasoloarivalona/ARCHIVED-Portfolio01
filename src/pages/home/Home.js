import React, { Component } from 'react'
import './Home.css';


class Home extends Component {

    componentDidMount(){
        let sectionsPos = {};

        let positionsData = {
            home : this.home.offsetTop,
            about : this.about.offsetTop,
            portfolio: this.portfolio.offsetTop,
            skills: this.skills.offsetTop,
            contact: this.contact.offsetTop
        }

        let sectionsName = Object.keys(positionsData);

        sectionsName.forEach( (pos, index) => {
            let nextSection = `${sectionsName[index + 1]}`;
              sectionsPos = {
                ...sectionsPos,
                [pos] : {
                  min: positionsData[pos],
                  max: positionsData[nextSection] || positionsData[pos]
                }
              }
           })

        this.props.setSectionsPos(sectionsPos);
    }

    render() {
            return (
                <div className="home">            
                    <section className="home__section"
                            ref={ el => this.home = el}>
                        
                        <h4 className="home__section__subtitle">
                            Hello, my name is Anja Rasoloarivalona
                        </h4>
                        <h1 className="home__section__title">
                            I'm a developer
                        </h1>
                        <p className="hone__section__para">
                            I am passionate about creating elegant, unique and functional websites and applications. If you have something in mind, feel free to contact me! In the meantime, enjoy your little ride in my portfolio.
                        </p>
                        <div className="home__section__cta">
                            
                        </div>
                    </section>
                    <section className="home__section"
                            ref={ el => this.about = el}>
                        About
                    </section>
                    <section className="home__section home__section--red"
                            ref={ el => this.portfolio = el}>
                        Portfolio
                    </section>
                    <section className="home__section home__section--green"
                            ref={ el => this.skills = el}>
                        Skills
                    </section>
                    <section className="home__section home__section--salmon"
                            ref={ el => this.contact = el}>
                        Contact
                    </section>
                </div>
            )
        
    }
}


export default Home; 