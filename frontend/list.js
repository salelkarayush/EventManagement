import createeventtmpl from "./event.js";


const createlisttmpl = () => /*html*/`
    <ul>
        <!--insert data from db here-->
        <!-- ${BOOKS_DATA.map((event) => createeventtmpl(eevent)).join('')} -->
    </ul>
`;
export default createlisttmpl;