import React from 'react'
import Employee from '../components/Employee'

// 建立陣列物件資料
const arrEmployee = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        h: "167",
        w: "55"
    },
    {
        id: 2,
        name: "員工2",
        age: "22",
        h: "177",
        w: "58"
    },
    {
        id: 3,
        name: "員工3",
        age: "23",
        h: "187",
        w: "75"
    }
]



const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {/* 呼叫員工元件，使用正列物件資料:搭配map */}
            {
                arrEmployee.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.name} h={emp.h} w={emp.w} />
                    )

                })
            }
            {/* <Employee name="員工1" age="21"/>
            <Employee name="員工2" age="22"/>
            <Employee name="員工3" age="23"/> */}
        </div>
    )
}

export default App