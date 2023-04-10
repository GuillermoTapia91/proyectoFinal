
import discoImg from "../SectionBuscarPorDistritos/images/buscarPorDistrito_disco.jpg"
import barImg from "./images/buscarPorDistrito_bar.jpg"
import "./index.css"
import SectionFiltros from "../SectionFiltros"

export default function SectionBuscarPorDistritos() {

  return (
      <div className="SectionBuscarPorDistritos  d-sm-flex  justify-content-sm-center align-items-sm-center  gap-4 bg-black bg-gradient text-white p-2">
        <div className="gap-1 mb-3">
          <div>
            <h3 className="text-center tracking-in-contract-bck-bottom">Descubre bares y discotecas </h3>
            <h3 className="text-center tracking-in-contract-bck-bottom"> disponibles en tu distrito</h3>
          </div>
          <div className=" input-container mt-3 d-flex   justify-content-center align-items-center gap-3 ">
            <div className="input" >
              <input className="form-control" type="text" placeholder="Ej: San Miguel" />
            </div>
            <div>
              <button className="btn btn-color">Buscar</button>
            </div>
          </div>
        </div>
        <div className=" d-sm-flex justify-content-sm-center align-items-sm-center gap-5 mt-3 text-center " >
          <div className="mb-3"><img src={discoImg} width="380px" alt="" className="img-fluid heartbeat" /></div>
          <div className=""><img src={barImg} width="400px" alt="" className="img-fluid heartbeat" /></div>
        </div>
        {/* <SectionFiltros color="red"/> */}
      </div>    
  )
}