function ShopText (props) {
    return (
        <div className={props.class}>
            <div className='shopTextInner'>
            <div className='shopTextDiv'>
                <h2 className='textTitle'>{props.title}</h2>
                <p className='textBody'>{props.text}</p>
            </div>
            </div>
        </div>
    )
}

export {ShopText};