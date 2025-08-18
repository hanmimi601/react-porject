import React, { useState } from 'react'

const App0818d = () => {
    const [subject, setSubject] = useState('');
    // 建立下接清單內容
    const opList=['HTML','CSS','JavaScript','React'];
    // 建立下接清單內容
    const opListValue=['html','css','javascript','react'];
    return (
        <div>
            <h2>捕捉下拉方塊內容</h2><hr />
            <p>目前被選取的項目:{subject}</p>
            <select
                name=""
                id=""
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                    console.log(e.target.value);
                }}>
                    {/* disabled=>失能 */}
                <option value="" disabled>請選擇</option>
                {/* 使用陣列map方法 */}
                {
                    opList.map((item,index)=>{
                      return<option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/* <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option> */}
            </select>

          

        </div>
    )
}

export default App0818d