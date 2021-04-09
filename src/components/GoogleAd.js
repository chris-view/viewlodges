import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const googleAdId = 'ca-pub-7280354271908100';

class GoogleAd extends Component {
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
    const { type } = this.props;
    return (
      <div>
          {type === "square" ? 
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7280354271908100"
                data-ad-slot="7345832275"
                ></ins>
            :
            <ins 
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-7280354271908100"
                data-ad-slot="8164089920"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
          }
      </div>
    );
  }
}

GoogleAd.propTypes = {
 // classNames: PropTypes.string,
  type: PropTypes.string,
  timeout: PropTypes.number,
};

GoogleAd.defaultProps = {
 // classNames: '',
  timeout: 200,
  type: "square",
};

export default GoogleAd;

