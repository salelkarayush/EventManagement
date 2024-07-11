const createeventtmpl = require('./event.js')

const createlisttmpl = (eventData) => /*html*/`
    <ul>
        <!--insert data from db here-->
        ${eventData.map((event) => createeventtmpl(event)).join('')}
    </ul>
`;
module.exports = createlisttmpl;