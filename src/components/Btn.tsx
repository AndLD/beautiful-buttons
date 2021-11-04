export default function Btn({
    index,
    pressedKeyState,
    icon,
    type,
    time,
    price
}: {
    index: number
    pressedKeyState: any
    icon: any
    type: string
    time: string
    price: string
}) {
    const [pressedKey, setPressedKey] = pressedKeyState

    return (
        <div onClick={() => setPressedKey(index)} className={`btn${pressedKey === index ? ' selected' : ''}`}>
            <div className="type-icon">{icon}</div>
            <div className={`type${pressedKey === index ? ' gradient-text' : ''}`}>{type}</div>
            <div className="estimated-time">{time}</div>
            <div className="estimated-price">{price}</div>
        </div>
    )
}
