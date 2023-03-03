

export default function Footer(){
    const copytext = "Copyright © 2023 Documentos"
    const style = {
        width:"100%",
        hieght:"2em",
        padding:"1em",
        backgroundColor:"#924f3e",
        textAlign:"center",
        position:"relative",
        bottom:"0",
        left:"0"
    }
    const styleText = {
        color:"#d6d6d6",
    }

    return(
        <div style={style}>
            <p style={styleText}>{copytext}</p>
        </div>
    )
}