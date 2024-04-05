
import './App.css';
import {useState} from 'react'
import TodoList from './components/todolists';
import Addlist from './components/add_list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const showToastMessage = () => {
    toast.success("List Added !", {
      position:"top-center",
    });
  };
  const showToasterror = () => {
    toast.error("List already present", {
      position:"top-center",
    });
  };
  const showToastupdate = () => {
    toast.success("List updated successfully", {
      position:"top-center",
    });
  };

 
  const [myar,setArr]=useState([])
  const [editlistoption,seteditlist]=useState(null)

  function addnewlist(text) {
    if (myar.some(item => item === text)) {
        showToasterror() 
    } else {
      setArr(prevArr => [...prevArr, text])
      showToastMessage()
    }
  }

function deletelist(index){
  let newlist=myar.filter((lists,idx)=>idx!==index)
  setArr(newlist)
}

function editlist(index){
  console.log(index);
  seteditlist(null)
  seteditlist(myar[index])
  console.log(myar)
}

function updatelist(text, editablelistpara) {
  if (myar.some(item => item === text)) {
    showToasterror()
  } else {
    console.log(text);
    let myin = myar.indexOf(editablelistpara);
    console.log(myin);
    const newList = [...myar];
    newList.splice(myin, 1, text);

        setArr(newList);
        seteditlist(null);
        showToastupdate()
      
  }
}



  return (
   <>
      <Addlist addnewlist={addnewlist} editablelist={editlistoption} updatelist={updatelist}></Addlist>
      <TodoList todos={myar} deletelist={deletelist} editlist={editlist}></TodoList>
      <ToastContainer autoClose={2000} limit={1} closeButton={false} />
      
   </>
  );
}

export default App;

