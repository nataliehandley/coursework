import logo from './logo.svg';
import './App.css';
import {firestore} from "./firebase.js";
import {collection, addDoc, doc, getDoc, getDocs, updateDoc} from "firebase/firestore";

function App() {

    const user = {
      id: "123ABC",
      name: "Natalie",
      isCoach: false,
      address: "London"

    }

    const handleCreate = () => {
      const usersCollection = collection(firestore, "users");

      addDoc(usersCollection, user);

      const updateRef = doc("id", "name", "isCoach", "address");

      updateDoc(updateRef, {
        name : "Fred"
      })
    }

    const handleRead = () => {
      const usersCollection = collection(firestore, "users");

      getDocs(usersCollection).then(response => {
        console.log("Here's many users");
        response.docs.forEach(doc => {
          console.log(doc.data())
        })
      })

      const docRef = doc(firestore, "users", "OrNJ66VDmIXautofOzn7");
      getDoc(docRef).then(response => {
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
    </div>
  );
}

export default App;
