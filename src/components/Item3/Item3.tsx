import './Item3.css'

export const Item3 = () => {
    return(
        <div className='flame3'>
            <div className='company'>
                <img className='img' src='./images/company.jpg'/>
                <div className='text1'>ABOUT</div>
                <div className='text2'>会社情報</div>
            </div>
            <div className='product'>
                <img className='img' src='./images/product.jpg'/>
                <div className='text1'>PRODUCTS</div>
                <div className='text2'>商品情報</div>
            </div>
            <div className='recruit'>
                <img className='img' src='./images/recruit.jpg'/>
                <div className='text1'>RECRUIT</div>
                <div className='text2'>採用情報</div>
            </div> 
        </div>
    )
}