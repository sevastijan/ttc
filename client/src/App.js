function App() {
  fetch("/api/get-recent-viewed-trips").then((res) => console.log(res));
  return <>Base template</>;
}

export default App;
