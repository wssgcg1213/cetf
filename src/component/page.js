/**
 * Created by jf on 15/12/10.
 */

"use strict";

import React from 'react';
import './page.less';
import banner from './images/banner.png';

export default class Page extends React.Component {
    render() {
        const {title, subTitle, spacing, className, children} = this.props;

        return (
            <section className={`page ${className}`}>
                <div className="banner">
                  <img src={banner} />
                </div>
                <div className={`bd ${spacing ? 'spacing' : ''}`}>
                    {children}
                </div>
            </section>
        );
    }
};
