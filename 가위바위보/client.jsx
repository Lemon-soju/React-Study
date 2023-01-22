const React = require('react');
const ReactDom = require('react-dom');
const { default: RSP } = require('./RSP');  


ReactDom.render(<RSP />, document.querySelector('#root'));
