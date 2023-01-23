const React = require('react');
const ReactDom = require('react-dom');
// const { default: Lotto } = require('./Lotto.jsx');  
const { default: Lotto_Hooks } = require('./Lotto_Hooks.jsx');  


// ReactDom.render(<RSP />, document.querySelector('#root'));
// ReactDom.render(<RSP2_Hooks />, document.querySelector('#root')); // 17 버전
ReactDom.createRoot(document.querySelector('#root')).render(<Lotto_Hooks />); // 18 버전
