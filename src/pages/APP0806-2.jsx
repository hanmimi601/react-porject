import Card from '../components/Card';
import '../css/App0806-1.css'
// import App from './APP0805-2';

// const Card = (props) => {
//     return (
//         <div className='emp'>
//             <h2>{props.imgURL}</h2>
//             <p>{props.title}</p>
//             <p>{props.desc}</p>
//             <p>{props.btnName}</p>
//             <p>{props.btnURL}</p>
//         </div>
//     )
// }

const arrPhotos = [
    {
        id: 1,
        imgURL: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '狗狗1',
        desc: "小狗1號",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 2,
        imgURL: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '狗狗2',
        desc: "小狗2號",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        imgURL: 'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '狗狗3',
        desc: '小狗3號',
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]
// const APP = () => {
//     // 資料抽離
//     const photos = {
//         photo1: {
//             imgURL: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             title: '狗狗1',
//             desc: "小狗1號",
//             btnName: '圖片來源',
//             btnURL: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//         },
//         photo2: {
//             imgURL: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             title: '狗狗2',
//             desc: "小狗2號",
//             btnName: '圖片來源',
//             btnURL: 'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//         },
//         photo3: {
//             imgURL: 'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             title: '狗狗3',
//             desc: '小狗3號',
//             btnName: '圖片來源',
//             btnURL: 'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//         }
// }
const App = () => {
    return (
        <>
            <div className='container'>
                {
                    arrPhotos.map((photo) => {
                        return (
                            <Card key={photo.id} imgURL={photo.imgURL} title={photo.title} desc={photo.desc} btnName={photo.btnName} btnURL={photo.btnURL} />
                        )
                    })
                }
            </div>
        </>
    )
}


export default App;