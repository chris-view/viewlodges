import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const googleAdId = 'ca-pub-7280354271908100';

const GoogleAdBanner = props => {
    const { currentPath } = props
    
    useEffect(() => {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }, [currentPath])
    
    return (
      <div key={currentPath}>
         <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7280354271908100"
            data-ad-slot="8164089920"
            data-ad-format="auto"
            data-full-width-responsive="true">

         </ins>
      </div>
    )
  }
export default GoogleAdBanner;
