import { useEffect, useState } from "react";
import missions from "../assets/secondary-missions";
function Missions() {
  const [cards, setCards] = useState(missions);
  const [card, setCard] = useState({});

  function onReset() {
    setCard({});
    setCards(
      cards.map((c) => {
        return { ...c, available: true };
      })
    );
  }
  function onDraw() {
    const availableCards = cards.filter((c) => c.available);
    if (availableCards.length === 0) {
      setCard({});
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = { ...availableCards[randomIndex], available: false };
    setCards(cards.map((c) => (c.id === randomCard.id ? randomCard : c)));
    setCard(randomCard);
  }

  useEffect(() => {
    console.log(cards);
  }, [cards]);
  useEffect(() => {
    console.log(card);
  }, [card]);

  return (
    <>
      <div>
        <button onClick={onDraw}>Draw card</button>
        <button onClick={onReset}>Reset</button>
      </div>
      <div>{card.name && <h3>{card.id + ". " + card.name}</h3>}</div>
      <div>{card.condition && <div>{card.condition}</div>}</div>
      <hr/>
      <div>
        {cards.map((c) => {
          return c.available ? (
            <p key={c.id}>{c.id + ". " + c.name}</p>
          ) : (
            <p>
              <strong key={c.id}>{c.id + ". " + c.name}</strong>
            </p>
          );
        })}
      </div>
    </>
  );
}
export default Missions;
