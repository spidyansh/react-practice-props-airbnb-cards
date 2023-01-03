import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
      img="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" 
      title="Kashmir" content="It is Mountain state of india" rating="4.5" price="$450" link='' />
      <Card 
      img="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      title="Goa" content="It is Beach state of india" rating="5" price="$380" link='' />
      <Card 
      img="https://images.unsplash.com/photo-1470123808288-1e59739dea12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2VybGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
      title="Kashmir" content="It is Green land of india" rating="3.5" price="$550" link='' />
    </>
  );
}

export default App;
