// 建立子元件

// 直接使用props物件
function MyComponent(props) {
    // console.log(props)
    // props.c
    return <>
        <div>Hello</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()};
    </>
}

function MyComponent2({ a, b, c }) {
    // c()
    return <>
        <div>Hello!簡化寫法</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()};
    </>
}


function MyComponent3({ a, b = "我是預設值", c }) {
    // c()
    return <>
        <div>Hello!簡化寫法</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()};
    </>
}




// 父元件
const App0819a = () => {
    return (
        // 呼叫元件
        <>
            <MyComponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <MyComponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
            <MyComponent3 a="我是屬性a" b="王小名"c={() => { console.log("456") }} />
        </>
    )
}

export default App0819a