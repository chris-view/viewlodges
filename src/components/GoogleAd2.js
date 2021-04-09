import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoogleAd2 extends Component {
  googleInit = null;

  componentDidMount() {
    const { timeout } = this.props;
    this.googleInit = setTimeout(() => {
      if (typeof window !== 'undefined')
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  }

  componentWillUnmount() {
    if (this.googleInit) clearTimeout(this.googleInit);
  }

  render() {

    return (
      <div style = {{width:"100%", height:"30vh"}}>
          
            <ins
               className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-7280354271908100"
               data-ad-slot="8164089920"
               data-ad-format="horizontal"
               data-full-width-responsive="true"
            ></ins>
            
            
      </div>
    );
  }
}

GoogleAd2.propTypes = {
 // classNames: PropTypes.string,
  timeout: PropTypes.number,
};

GoogleAd2.defaultProps = {
 // classNames: '',
  timeout: 200,
};

export default GoogleAd2;

