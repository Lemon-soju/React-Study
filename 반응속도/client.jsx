const React = require('react');
const ReactDom = require('react-dom');
const { default: ResponseCheck } = require('./ResponseCheck');  

ReactDom.render(<ResponseCheck />, document.querySelector('#root'));
