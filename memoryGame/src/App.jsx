import styles from "./App.module.css"


function App() {
	return <div className={styles.container}>
   
      <h1 className={styles.header}>MEMORY NUMBERS</h1>
      
        <h2 className={styles.playerMove}>Ruch gracza 1</h2>
        <div className={styles.itemsBox}>
          <div>1</div>
          <div>2</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>7</div>
          <div>8</div>
        </div>
        <div>Gracz 1: 0</div>
        <div>Gracz 2: 0</div>
      
    

  </div>;
}

export default App;
