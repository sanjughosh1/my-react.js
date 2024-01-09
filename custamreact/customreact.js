function customeRender(ReractElement,maincontainor){
    const domElement = document.createElement(ReractElement.type)
    domElement.innerHTML = ReractElement.children
    domElement.setAttribute('href',ReractElement.props.href)
    domElement.setAttribute('terget', ReractElement.props.target)
    containor.appendChild(domElement)
}

const ReractElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target :'_blank'
    },
    children:'clickme to visit google'
}

const maincontainor= document.querySelector('#root')