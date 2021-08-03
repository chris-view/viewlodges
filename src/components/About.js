import React from 'react'
import Title from "./Title";

export default function About() {
    return (
        <section className="services">
        <Title title="About Us" />
        <div className="services-center">
          
            <article className="service">
                <h6>Who We Are</h6>
                <div>
                    ViewLodges is a self-service platform, with the aim to primarily make Off-Campus accommodation search, both stress 
                    and danger free, by connecting prospective tenants to verified property owners, solicitors and caretakers.
                </div>
            </article>
            <article className="service">
                <h6>Our Story</h6>
                <div>
                    <p>
                        Viewlodges was first conceived in the heart of Christian at age 23, by the 
                        help of the Holy Spirit. The inspiration came to him while under the ministration
                        of David Ibiyeomie during one of his Week of Spiritual Empowerment programs, tagged 'WONDERS
                        OF WISDOM' in August 2017.
                    </p>
                    <p>
                        As at the time of this revelation, Christian had little or no knowledge on Web Development
                        or Programming but encouranged himself with what he was made to understand through the teachings 
                        of David Ibiyeomie, 'I have the Mind of Christ, with Him I can do all things'. With this mindset,
                        he believes this Vision could actually be fulfilled and so relies on the Help of God. Viewlodges 
                        was first launched in August 2019.
                    </p>
                    <p>
                        You too can help in this vision by telling someone about us.
                    </p>
                </div>
            </article>
    
    
            <article className="service">
                <h6>Our Vision</h6>
                <div>
                    Our vision is to ease Off-Campus accommodation search by users, especially students around
                    different Institutions accross Africa.
                </div>
            </article>
            
        </div>

            
      </section>

      
    )
}
