interface FooterProps {
    text:string
}
 
const Footer: React.FC<FooterProps> = ({text}) => {
    return ( 
        <h1>From footer: {text}</h1>
     );
}
 
export default Footer;