// const { Children } = require("react");

function customRender(reactElememt,container){
    /*
    const domElement= document.createElement(reactElememt.type)
    domElement.innerHTML= reactElememt.Children
    domElement.setAttribute('href',reactElememt.props.href)
    domElement.setAttribute('target', reactElememt.props.target)
    container.appendChild(domElement)
*/
//use upper Written or down written
const domElement=document.createElement(reactElememt.type)
domElement.innerHTML=reactElememt.Children
for(const prop in reactElememt.props){
    if(prop=== 'Children')continue;
    domElement.setAttribute(prop, reactElememt.props[prop])
}
container.appendChild(domElement)

}

let reactElememt={
    type: 'a',
    props:
    {
        href:"https://google.com",
        target:"_blank"
    },
    Children:" Click me to Visit google"
}
const mainContainer=document.querySelector('#root');
customRender(reactElememt, mainContainer)