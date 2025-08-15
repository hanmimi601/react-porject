import'../css/App0806-1.css'
const APP = () => {
    // 資料抽離
    const photos={
        photo1:{
            imgURL:'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'狗狗1',
            desc:"小狗1號",
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
          photo2:{
            imgURL:'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'狗狗2',
            desc:"小狗2號",
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1629740067905-bd3f515aa739?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
          photo3:{
            imgURL:'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'狗狗3',
            desc:'小狗3號',
            btnName:'圖片來源',
            btnURL:'https://images.unsplash.com/photo-1709771818873-57feeea88f41?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }

    return (
        <>
        <div className='container'>
        <div className="card">
            <img src={photos.photo1.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo1.title}</h5>
                    <p className="card-text">{photos.photo1.desc}</p>
                    <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                </div>
                
        </div>
        <div className="card">
            <img src={photos.photo2.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo2.title}</h5>
                    <p className="card-text">{photos.photo2.desc}</p>
                    <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                </div>
                
        </div>
        <div className="card">
            <img src={photos.photo3.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{photos.photo3.title}</h5>
                    <p className="card-text">{photos.photo3.desc}</p>
                    <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                </div>
                
        </div>
        </div>

        </>
    )
}

export default APP;