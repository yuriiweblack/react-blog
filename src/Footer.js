
const year = new Date()

const Footer = ({length}) => {
    return(
        <div className="footer">
            <div className='container footer__container'>
                <p className='count-items'>
                    Total: {length} {length <= 1 ? "item" : "items"}
                </p>
                
            </div>
            <br/>
    
            <p className="footer__copy">React © {`${year.getFullYear()} year.`} All rights reserved</p>
        </div>
    )
}

export default Footer;