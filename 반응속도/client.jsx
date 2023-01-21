const React = require('react');
const ReactDom = require('react-dom');
// const { default: ResponseCheck } = require('./ResponseCheck');  
const { default: ResponseCheckHook } = require('./ResponseCheckHook');  


// ReactDom.render(<ResponseCheck />, document.querySelector('#root'));
ReactDom.render(<ResponseCheckHook />, document.querySelector('#root'));
