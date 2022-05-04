import "./App.scss";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";
import Footer from "./Components/Footer";


const App = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    onValue(dbRef, (response) => {
      setQuestions(response.val());
    });
  }, []);

  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header />
        <Quiz questions={questions} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
