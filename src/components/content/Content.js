import React from 'react'
export default class Content extends React.PureComponent{
    render(){
        return(
            <div className="contentBody">
                <div className="asynamite">
                    <img src = "/image/Asynamite.png" alt="asynamite.png"/>
                </div>
                <div className="tagline">
                    <h3>Become a true</h3>
                    <h3>programming Master</h3>
                </div>
                <div className="info">
                    <p>Practice with 300+ challenges. Become a better developer</p>
                </div>
                {/* <ContentFooter /> */}
                <div className="social-links">
                    <ul>
                        <li><img src="/image/facebook.png" alt="facebook"></img> </li>
                        <li><img src="/image/instagram.png" alt="instagram"></img> </li>
                        <li><img src="/image/twitter.png" alt="twitter"></img> </li>
                    </ul>
                </div>
            </div>
        )
    }
}