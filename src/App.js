import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cardData = Data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        content={item.content}
        rating={item.rating}
        price={item.price}
        link={item.link}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      {cardData}
    </>
  );
}

export default App;
