

// 建立員工元件
const Employee = (props) => {
    return (
        <div className='emp'>
            <h2>姓名:{props.name}</h2>
            <p>年齡{props.age}</p>
            <p>身高{props.h}</p>
            <p>體重{props.w}</p>
            <p>BMI{(w / Math.pow(h / 100, 2)).toFixed(2)}</p>
        </div>
    )
}

export default Employee