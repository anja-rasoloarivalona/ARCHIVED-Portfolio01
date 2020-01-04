import React, { Component } from 'react'
import './Home.css';


class Home extends Component {

    componentDidMount(){
        let sectionsPos = {};

        let positionsData = {
            me : this.me.offsetTop,
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
                            ref={ el => this.me = el}>
                        Me
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