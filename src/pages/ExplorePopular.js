import React from 'react'
import a1 from "../assets/a.png"
import a2 from "../assets/a (1).png"
import a3 from "../assets/a (2).png"
import a4 from "../assets/a (3).png"
import a5 from "../assets/a (4).png"
import a6 from "../assets/a (5).png"
import a7 from "../assets/a (6).png"
import a8 from "../assets/a (7).png"
// import a9 from "../assets/a (8).png"
import "../Styles/ExplorePopular.css"

function ExplorePopular() {
  return (
    <>
        <section className='container-fluid'>
        <div className="container">
          <div className="explore-txt">
            <h3>Explore by year</h3>
          </div>
          <div className="maincards-row">
            <div >
                <img src={a1} alt='img' />
            </div>
            <div><img src={a2} alt='img' />
            </div>
            <div>
            <img src={a3} alt='img' />
            </div>
            <div >
            <img src={a4} alt='img' />
            </div>
            <div >
            <img src={a5} alt='img' />
            </div>
            <div >
            <img src={a6} alt='img' />
            </div>
            <div >
            <img src={a7} alt='img' />
            </div>
            <div >
            <img src={a8} alt='img' />
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default ExplorePopular