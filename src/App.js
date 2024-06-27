import Weather from "./components/Weather";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginTop: "20px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#007bff",
    fontSize: "36px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <Weather />      
    </div>
  );
}

export default App;
