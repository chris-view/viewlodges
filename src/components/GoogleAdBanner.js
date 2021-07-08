import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const googleAdId = 'ca-pub-7280354271908100';

class GoogleAdBanner extends Component {
  googleIUnit2 = null;
 

  componentDidMount() {
   
    const { timeout } = this.props;
    this.googleIUnit2 = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleIUnit2) clearTimeout(this.googleIUnit2);
  }

  render() {
    const { currentPath } = this.props;
    return (
      <div key = {currentPath} >
          
        <ins 
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7280354271908100"
            data-ad-slot="8164089920"
            data-ad-format="auto"
            data-full-width-responsive="true">

        </ins>
          
          
      </div>
    );
  }
}

GoogleAdBanner.propTypes = {
 // classNames: PropTypes.string,
  type: PropTypes.string,
  timeout: PropTypes.number,
};

GoogleAdBanner.defaultProps = {
 // classNames: '',
  timeout: 200,
//  type: "square",
};

export default GoogleAdBanner;

