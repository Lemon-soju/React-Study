const React = require('react');
const ReactDom = require('react-dom');
// const { default: RSP } = require('./RSP');  
const { default: RSP2_Hooks } = require('./RSP2_Hooks');  


// ReactDom.render(<RSP />, document.querySelector('#root'));
// ReactDom.render(<RSP2_Hooks />, document.querySelector('#root')); // 17 버전
ReactDom.createRoot(document.querySelector('#root')).render(<RSP2_Hooks />); // 18 버전
