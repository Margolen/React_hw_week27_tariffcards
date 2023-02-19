import "./App.css";
import TariffCard from "./components/TariffCard/TariffCard";
import {useState} from  'react';

const tariffCards =[
  {
   title: 'Безлимитный 300',
   tariff: ' 300',
   speed: 'до 10 Мбит/сек',
   text: 'Объем включенного графика не ограничен',
  },
  {
  title: 'Безлимитный 450',
   tariff: ' 450',
   speed: 'до 50 Мбит/сек',
   text: 'Объем включенного графика не ограничен' 
  },
  {
    title: 'Безлимитный 550',
   tariff: '550',
   speed: 'до 100 Мбит/сек',
   text: 'Объем включенного графика не ограничен' 
  },
  {
    title: 'Безлимитный 1000',
   tariff: '1000',
   speed: 'до 200 Мбит/сек',
   text: 'Объем включенного графика не ограничен' 
  },
]

export default function App() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  
  return (
    <div className="App">
      <div>
        {tariffCards.map((tariffCard, index) => (
          <TariffCard
          title={tariffCard.title}
          tariff={tariffCard.tariff}
          speed={tariffCard.speed}
          text={tariffCard.text}
          isSelected={index === selectedCardIndex}
          index={index}
          onSelected={() => setSelectedCardIndex(index)}
          />
        ))}
      </div>
      
    </div>
  );
}
