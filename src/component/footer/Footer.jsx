const Footer=()=>{
    const today =new Date();
    const date= today.getDate();
    const month=today.getMonth();
    const year =today.getFullYear();
    const formatteddate= `${month}/${date}/${year}`;
    return(
        <div className="footer">
            
            <p>&copy;  {formatteddate} Tonie All right reserved</p>
            </div>
    )
}
export default Footer;