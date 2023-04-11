import video from "../../assets/video/discoteca.mp4"
import "./style.css"
export default function Cuerpo() {
    return (
    <div  className="container">
        <video src={video} muted autoPlay loop></video>
        <div className="capa"></div>
        <div className="intro">
            <h1>Que comienze la Fiesta</h1>
            <h3>Encuentra la juerga mas cerca de tu zona</h3>
            <button className="busqueda btn btn-outline-primary">Bares/Discotecas</button>
        </div>
    </div>
        )
}
