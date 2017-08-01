import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import { siteName } from '../helpers/utils';

const Home = () => {
  return (
    <DocumentTitle title={`${siteName} | Home`}>
      <div className="home">
        <h1>Hello, this is a React <strong>Boilerplate</strong>.</h1>
      </div>
    </DocumentTitle>
  )
}

export default Home;
