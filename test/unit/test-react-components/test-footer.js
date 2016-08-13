'use babel';

/* eslint-disable react/jsx-filename-extension */

import {test} from 'ava';

import React from 'react';
import {shallow} from 'enzyme';

const BASE_DIR = '../../../src/components/flow-coverage-html-report';

const REACT_COMPONENT = `${BASE_DIR}/footer`;

test('<HTMLReportFooter />', t => {
  const HTMLReportFooter = require(REACT_COMPONENT);
  const props = {
    coverageGeneratedAt: 'fakeGeneratedAt'
  };
  const wrapper = shallow(<HTMLReportFooter {...props}/>);

  t.regex(wrapper.find('footer').text(), /fakeGeneratedAt/);
});

test.todo('<HTMLReportFooter /> with missing props');
