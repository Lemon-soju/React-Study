const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');
const WordRelay2 = require('./WordRelay2');

ReactDom.render(<WordRelay />, document.querySelector('#root'));
ReactDom.render(<WordRelay2 />, document.querySelector('#root2'));