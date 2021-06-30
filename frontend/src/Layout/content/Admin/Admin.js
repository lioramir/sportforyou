import react, {useState} from 'react';
import './Admin.css'
import PopupOptionsAdmin from './PopupOptionsAdmin';


function Admin(props) {
   
    const [OpenAndClosePopup, setOpenAndClosePopup] = useState({  addItem:false ,delItem: false,Orders: false,reports:false });
    


    function Open(popup){
        setOpenAndClosePopup({
            ...OpenAndClosePopup,
            [popup]:!OpenAndClosePopup.popup });
    };
    function CloseOptions(){
        setOpenAndClosePopup({
            addItem:false ,delItem: false,Orders: false,reports:false});
    };
   
    return (
        <react.Fragment>
                <PopupOptionsAdmin openOptions={OpenAndClosePopup} CloseOptions={()=>CloseOptions()}/>
            <div className="Admin">
            <ul>
                <li><button onClick={   ()  =>  Open("addItem")}>הוספת מוצר</button></li>
                <li><button onClick={   ()  =>  Open("delItem")}>הסרת מוצר</button></li>
                <li><button onClick={   ()  =>  Open("Orders")}> הזמנות</button></li>
                <li><button onClick={   ()  =>  Open("reports")}> דוחות</button></li>
            </ul>
            </div>
        </react.Fragment>
    )
    
    
}



export default Admin;