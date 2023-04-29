import Card from "./Components/Card/Card"
import nft from "./Components/images/image-equilibrium.jpg"
import avatar from "./Components/images/image-avatar.png"

function App() {
  return (
    <div className="App">
      <Card name="Equilibrium #3429" 
        desc="Our Equilibrium collection promotes balance and calm" 
        price="0.041" 
        duration="3 days left"
        image={nft} 
        creatorImage={avatar}
        creatorName="Jules Wyvern"
      />
    </div>
  );
}

export default App;
