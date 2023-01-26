const React = require('react');
const ReactDom = require('react-dom');
const { default: MineSearch } = require('./MineSearch');  


// ReactDom.render(<RSP />, document.querySelector('#root'));
// ReactDom.render(<RSP2_Hooks />, document.querySelector('#root')); // 17 버전
ReactDom.createRoot(document.querySelector('#root')).render(<MineSearch />); // 18 버전
