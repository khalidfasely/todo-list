import Header from "./Header";
import NewItem from "./NewItem";
import '../firebase/firebase';
import { useEffect } from "react";
import database from "../firebase/firebase";

function App() {
  //useEffect(() => {
  //  database.ref('users')
  //  .once('value')
  //  .then((snapshot) => {
  //    const todoListData = [];
  //  
  //    snapshot.forEach((childSnapshot) => {
  //      todoListData.push({
  //        //id: childSnapshot.key,
  //        ...childSnapshot.val()
  //      });
  //    });
  //  
  //    console.log(todoListData);
  //  });
  //}, [])
  return (
    <div className="App">
      <Header />
      <NewItem />
    </div>
  );
};

export default App;
