import video from "../../assets/video/discoteca.mp4"
import "./index.css"
export default function Cuerpo() {
    return (
    <div className="container-video">
        <video  src={video} autoPlay loop muted className="filter" >
        </video>
        <div className="presentacion">
        <h1>
            Vuelve la Fiesta
        </h1>
        <h2>
            Busca la Mejor Diversion en tu Zona
        </h2>
        <button className=" btn btn-pantalla ">
            Buscar por Distritos
        </button>
        </div>
        
    </div>
        )
}