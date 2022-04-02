import styles from "./App.module.scss";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className={styles.form}>
      <div className={styles.title}>
        <h1>Register your interest for Nologists 2022!</h1>
        <h4>Something very very exciting is happening shortly!</h4>
      <Form/>
     
      </div>
    </div>
  );
}

export default App;
