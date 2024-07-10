const createeventtmpl = require('"./event.js"')


const createlisttmpl = () => /*html*/`
    <ul>
        <!--insert data from db here-->
        <!-- ${BOOKS_DATA.map((event) => createeventtmpl(event)).join('')} -->
    </ul>
`;
export default createlisttmpl;