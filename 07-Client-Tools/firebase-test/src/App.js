import logo from './logo.svg';
import './App.css';
import {firestore} from "./firebase.js";
import {collection, addDoc, doc, getDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";

function App() {

    const user = {
      id: "123ABC",
      name: "Natalie",
      isCoach: false,
      address: "London"

    }
    //Create
    const handleCreate = () => {
      const usersCollection = collection(firestore, "users");

      addDoc(usersCollection, user);


    }

    //Read
    const handleRead = () => {
      const usersCollection = collection(firestore, "users");

      getDocs(usersCollection).then(response => {
        console.log("Here's many users");
        response.docs.forEach(doc => {
          console.log(doc.data())
        })
      })

      const docRef = doc(firestore, "users", "iglIUCXKqS8BKNb88apR");
      getDoc(docRef).then(response => {
        console.log(response.data());
      })
    }

    //Update

    const handleUpdate = () => {
      const updateRef = doc(firestore, "users", "zyWwW3undixMz12dPRgl");
      updateDoc(updateRef, {name:"Fred"})
      getDoc(updateRef).then(response => {
        console.log(response.data());
      })
    }
    
    
    //Delete

    const handleDelete = () => {
      const deleteRef = doc(firestore, "users", "zyWwW3undixMz12dPRgl");
      deleteDoc(deleteRef)
      getDoc(deleteRef).then(response => {
        console.log(response.data());
      })
    }


  return (
    <div className="App">
      <h1>Welcome to my Firebase page</h1>
      <section>
        <h2>Create a User</h2>
        <button onClick={handleCreate}>Do it</button>
      </section>
      <section>
        <h2>Read a User</h2>
        <button onClick={handleRead}>Do it</button>
      </section>
      <section>
        <h2>Update a User</h2>
        <button onClick={handleUpdate}>Do it</button>
      </section>
      <section>
        <h2>Delete a User</h2>
        <button onClick={handleDelete}>Do it</button>
      </section>
    </div>
  );
}

export default App;
