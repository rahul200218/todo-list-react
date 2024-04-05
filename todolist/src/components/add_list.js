import { useState ,useEffect} from "react"
import "./style/add_list.css"

function Addlist({addnewlist,editablelist,updatelist}){

    const [text,setText]=useState('')

    function handleform(e){
        e.preventDefault()
        if(editablelist){
            console.log(editablelist);
            updatelist(text,editablelist)
        }else{
            addnewlist(text)
            setText('')
        }
    }

    useEffect(() => {
        if (editablelist !== null) {
            setText(editablelist);
        }
    }, [editablelist]);

    function change(e){
        setText(e.target.value)
    }
    return(
        <>
            <div className="form_div">
                <form onSubmit={handleform}>
                    <input type="text" onChange={change} value={text} placeholder="Enter the item name"/>
                    <input type="submit" value={editablelist ? "Update" : "Add"} className="form_button"/>
                </form>
            </div>
        </>
    )
}


export default Addlist