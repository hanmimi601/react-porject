// 建立天氣元件
const Weather = (props) => {
    return (
        <div className='wh'>
            <h2>日期:{props.date}</h2>
            <p>起始時間{props.StartTime}</p>
            <p>結束時間{props.EndTime}</p>
            <p>圖片{imgURL}</p>
            <p>預報內容{parameter}</p>
            <p>降雨機率{rainfall}</p>
        </div>
    )
}

export default Weather