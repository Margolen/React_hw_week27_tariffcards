import  style from './style.module.scss'

export default function TariffCard(props) {
    const cardStyles = {
        0: style.card0,
        1: style.card1,
        2: style.card2,
        3: style.card3,
    }

    const cardStyle = cardStyles[props.index]
    
    return (
      <div className={[style.tariff_card, cardStyle].join(' ')}>
  
        <div className={style.title}>{props.title}</div>
        <div  className={style.tariff}><sup>руб</sup><span>{props.tariff}</span><sub>/мес</sub></div>
        <div className={style.speed}>{props.speed}</div>
        <div className={style.text}>{props.text}</div>
  
      </div>
    )
  }