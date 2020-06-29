import React, {useRef, useEffect} from 'react'
import Welcome from  '../Welcome'

const DummyProd = ({num, type, width}) => {
    const  arr = []
    while(num > 0){
        arr.unshift(num)
        num--
    }
    return(
        <>
            {
                arr.map(num => {
                    return <div key={num} className={`dummy-${type}`} style={{width: width}}></div>
                })
            }
        </>
    )
}

const Home = () => {
    const num = 3
    const banners = useRef()
    const prodthumbs = useRef()

    useEffect(() => {
        banners.current.style.width = `${100 * num}%`
        prodthumbs.current.style.width = `${100 * num}%`
    },[])

    return (
        <>
        <div className="page" id="home">
            <Welcome url="https://www.youtube.com/watch?v=oqvpx2K_35c"/>
            <section>
                <div className="banners" ref={banners}>
                    <DummyProd num={num} type="banner" width={`${(90 / num ) - num}%`} />
                </div>
                <div className="prodthumbs" ref={prodthumbs}>
                    <DummyProd num={num} type="prod" width={`${(60 / num ) - num}%`} />
                </div>
            </section>
        </div>
        </>
    )
}

export default Home
