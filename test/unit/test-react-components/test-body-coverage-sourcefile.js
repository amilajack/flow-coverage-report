'use babel';

/* eslint-disable react/jsx-filename-extension */

import {test} from 'ava';

import React from 'react';
import {render} from 'enzyme';

import {FLOW_COVERAGE_SUMMARY_DATA} from '../fixtures';

const BASE_DIR = '../../../src/components/flow-coverage-html-report';

const REACT_COMPONENT = `${BASE_DIR}/body-coverage-sourcefile`;

test('<HTMLReportBodySourceFile />', t => {
  const HTMLReportBodySourceFile = require(REACT_COMPONENT);
  const fileName = 'src/a.js';
  const props = {
    coverageData: FLOW_COVERAGE_SUMMARY_DATA.files[fileName],
    summaryRelLink: '../index.html',
    fileName
  };

  const wrapper = render(<HTMLReportBodySourceFile {...props}/>);

  t.is(wrapper.find('body').length, 1);
});

test.todo('<HTMLReportBodySourceFile /> with missing props');
