import { useState } from "react"
import logo1 from "../../assets/Sanmiguel/MiTercerLugar/logo.jpg"
import logo2 from "../../assets/Sanmiguel/PachaInti/logo.jpg"
import logo3 from "../../assets/Sanmiguel/EnLounge&Bar/logo.jpg"
import logo4 from "../../assets/Sanmiguel/FestivalSanMiguel/logo.jpg"
import "./index.css"

export default function SectionFiltros() {
  const [listas, setlistas] = useState([
    {
      establecimiento: "bar",
      id:1,
      distrito: "san miguel",
      nombre: "Mi tercer lugar",
      direccion: "Av. La Mar 2261, San Miguel ",
      logo: logo1,
      carta: "https://www.mitercerlugar.com.pe/static/documentos/carta.pdf",//si es que hay
      horario: {
        lun: "5:00pm a 11:00pm",
        mar: "5:00pm a 11:00pm",
        mie: "5:00pm a 11:00pm",
        jue: "4:00pm 11:00pm",
        vie: "4:00pm a 11:00pm",
        sab: "4:00pm a 11:00pm",
        dom: "5:00pm a 11:00pm"
      },
      fotos: [],
      web: "https://www.mitercerlugar.com.pe/"
      
    },
    {
      establecimiento: "bar",
      id:2,
      distrito: "san miguel",
      nombre: "EN lounge & bar",
      direccion: "Av. Riva Agüero 754, San Miguel",
      logo: logo3,
      carta: "",//si es que hay
      horario: {
        lun: "5:00pm a 01:00am",
        mar: "5:00pm a 01:00am",
        mie: "5:00pm a 01:00am",
        jue: "5:00pm a 01:00am",
        vie: "5:00pm a 11:30pm",
        sab: "5:00pm a 03:00am",
        dom: "5:00pm a 12:00pm"
      },
      fotos: [],
      web: "https://www.facebook.com/ENLoungeBar/"
    },
    {
      establecimiento: "bar",
      id:3,
      distrito: "san miguel",
      nombre: "Festival San Miguel",
      direccion: "Av. la Marina 2517, San Miguel",
      logo: logo4,
      carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
      horario: {
        lun: "11:30am a 01:00am",
        mar: "11:30am a 01:00am",
        mie: "11:30am a 01:00am",
        jue: "11:30am a 01:00am",
        vie: "11:30am a 03:00am",
        sab: "11:30am a 03:00am",
        dom: "11:30am a 01:00am"
      },
      fotos: [],
      web: "https://www.facebook.com/festivalsanmiguel"
    },
    {
      establecimiento: "bar",
      id:4,
      distrito: "san miguel",
      nombre: "Pacha Inti",
      direccion: "Mercedes Gallagher de Parks 396, San Miguel",
      logo: logo2,
      carta: "https://drive.google.com/file/d/1PUuIF7nO0bZa_5IW1g3UhDEDyB9LLLV0/view",//si es que hay
      horario: {
        lun: "No hay atención",
        mar: "06:00pm a 01:00am",
        mie: "06:00pm a 01:00am",
        jue: "06:00pm a 01:00am",
        vie: "06:00pm a 03:00am",
        sab: "06:00pm a 03:00am",
        dom: "No hay atención"
      },
      fotos: [],
      web: "https://www.facebook.com/pachainti"
    },
    {
      establecimiento: "discoteca",
      distrito: "san miguel",
      id:5,
      nombre: "Sopranos",
      direccion: "Av. La Marina 3151,San Miguel",
      logo: "",
      carta: "",//si es que hay
      horario: {
        lun: "07:00pm a 01:00am",
        mar: "07:00pm a 01:00am",
        mie: "07:00pm a 01:00am",
        jue: "07:00pm a 01:00am",
        vie: "07:00pm a 01:00am",
        sab: "07:00pm a 01:00am",
        dom: "No hay atención"
      },
      fotos: [],
      web: "https://sopranos.com.pe/"
    },
    {
      establecimiento: "bar",
      distrito: "san miguel",
      id:6,
      nombre: "Sopranos",
      direccion: "Av. La Marina 1687,San Miguel",
      logo: "",
      carta: "",//si es que hay
      horario: {
        lun: "07:00pm a 01:00am",
        mar: "07:00pm a 01:00am",
        mie: "07:00pm a 01:00am",
        jue: "07:00pm a 01:00am",
        vie: "07:00pm a 01:00am",
        sab: "07:00pm a 01:00am",
        dom: "No hay atención"
      },
      fotos: [],
      web: "https://sopranos.com.pe/"
    },
    {
      establecimiento: "bar",
      distrito: "san miguel",
      id:7,
      nombre: "Rustica",
      direccion: "Av. La Marina 2631, San Miguel",
      logo: "../../assets/Sanmiguel/FestivalSanMiguel/logo.jpg",
      carta: "",//si es que hay
      horario: {
        lun: "12:00pm a 12:30am",
        mar: "12:00pm a 12:30am",
        mie: "12:00pm a 12:30am",
        jue: "12:00pm a 03:00am",
        vie: "12:00pm a 03:00am",
        sab: "12:00pm a 03:00am",
        dom: "12:00pm a 03:00am"
      },
      fotos: [],
      web: "https://www.rustica.com.pe/"
    },
    {
      establecimiento: "bar",
      distrito: "san miguel",
      id:8,
      nombre: "Fridays",
      direccion: "Av. La Marina 2355 - C.C. La Marina Open Plaza,San Miguel",
      logo: "",
      carta: "",//si es que hay
      horario: {
        lun: "07:00pm a 11:30am",
        mar: "07:00pm a 11:30am",
        mie: "07:00pm a 11:30am",
        jue: "07:00pm a 11:30am",
        vie: "07:00pm a 11:30am",
        sab: "07:00pm a 11:30am",
        dom: "07:00pm a 11:30am"
      },
      fotos: [],
      web: "https://fridaysperu.com/"
    },
    {
      establecimiento: "bar",
      distrito: "san miguel",
      id:9,
      nombre: "Fridays",
      direccion: "Av. La Marina 2000, C.C Plaza San Miguel",
      logo: "",
      carta: "",//si es que hay
      horario: {
        lun: "07:00pm a 11:30am",
        mar: "07:00pm a 11:30am",
        mie: "07:00pm a 11:30am",
        jue: "07:00pm a 11:30am",
        vie: "07:00pm a 11:30am",
        sab: "07:00pm a 11:30am",
        dom: "07:00pm a 11:30am"
      },
      fotos: [],
      web: "https://fridaysperu.com/"
    },
    {
      establecimiento: "bar",
      distrito: "san miguel",
      id:10,
      nombre: "Chilis",
      direccion: "Calle Mantaro Nro. 220, C.C. Plaza San Miguel",
      logo: "",
      carta: "",//si es que hay
      horario: {
        lun: "07:00pm a 11:00am",
        mar: "07:00pm a 11:00am",
        mie: "07:00pm a 11:00am",
        jue: "07:00pm a 11:00am",
        vie: "07:00pm a 12:00am",
        sab: "07:00pm a 12:00am",
        dom: "07:00pm a 11:30am"
      },
      fotos: [],
      web: "https://www.chilis.pe/"
    },
  ])
  return (
    <div className="SectionBuscarFiltros bg-black bg-gradient p-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">  
          {listas.length > 0 && listas.map((lista) => 
            (
              <div key={lista.id} className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img src={lista.logo} className="img-thumbnail" width="200px" alt="..."/>
                    </div>
                    <p className="mb-1 mt-1">Nombre: {lista.nombre}</p>
                    <p>Dirección: {lista.direccion}</p>
                    {/* <p className="new-line">
                      Horario:\n Lunes:${lista.horario.lun}\nMartes:${lista.horario.mar}\n Miércoles:${lista.horario.mie}\nJueves:${lista.horario.jue}\nViernes:${lista.horario.vie}\nSábado:${lista.horario.sab}\nDomingo:${lista.horario.dom}
                    </p> */}
                    <div className="text-center"  > 
                      <button type="button" className="btn btn-color2" data-bs-toggle="modal" data-bs-target="#exampleModal">Horario</button>
                    
                      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby={lista.nombre}     aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1 className="modal-title fs-5" id="exampleModalLabel">Horario</h1>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              Horario:Lunes:{lista.horario.lun}
                              Martes:{lista.horario.mar} 
                              Miércoles:{lista. horario.mie}
                              Jueves:{lista.horario.jue}
                              Viernes:{lista.horario.vie}
                              Sábado:${lista.horario.sab}
                              Domingo:${lista.horario.dom}
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-color2 m-1">Fotos</button>
                      <button className="btn btn-color2">Opiniones</button>
                    </div>   
                  </div>
                </div>
              </div>
            
            ))}
        </div>
      </div>
    </div>  
  )
}