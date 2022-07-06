import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ReactPaginate from "react-paginate";
import "./Paginator.css"
import { Download, CheckBox, Proyect_Data, Project_Information_D, Contact, Personal_Information_D, Project_Information, Cross, Mask, Personal_Information, Form, Tbody, ScrolledTable, Table, MyTHead, Options, Search_input, Filtrar, Add, Add_innovator_btn, Add_excel_btn, Search } from './innovators-style'
import { FaFilter, FaUserPlus, FaFileExcel, FaSearch } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import * as XLSX from 'xlsx'
import { db } from '../Firebase'
import { collection, addDoc, connectFirestoreEmulator } from 'firebase/firestore'
const InnovatorArea = styled.td`


`;
const Tab = ({ onClick, isSelected, children }) => {
    const TabWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    margin: 1px;
    font-size: 3em;
    color: ${props => (isSelected ? `white` : `black`)};
    background-color: ${props => (isSelected ? `black` : `#C4C4C4`)};
    cursor: ${props => (isSelected ? 'default' : `pointer`)};
    `

    return <TabWrapper onClick={onClick}>{children}</TabWrapper>
}

export default function Innovators({ innovators, add, addMultiple, toggleNav }) {
    const [searchTerm, setSearchTerm] = useState('')

    const [activeFilter, setActiveFilter] = useState(false)
    const [filter, setFilter] = useState(false)

    const [addInnovator, setAddInnovator] = useState(false)

    const [mostrarInnovador, setMostrarInnovador] = useState(false)
    const [selectedInnovator, setSelectedInnovator] = useState({})

    //funcion para mostrar el panel de registro
    const toggle = () => {
        setAddInnovator(addInnovator => !addInnovator)
    };

    useEffect(() => {
        console.log('isLoading is: ', addInnovator);
    }, [addInnovator]);

    //referencias al ingresar un nuevo innovador:
    const nombre = useRef()
    const apellido = useRef()
    const ci = useRef()
    const email = useRef()
    const telefono = useRef()
    const estado = useRef()
    const ciudad = useRef()
    const nombreProyecto = useRef()
    const motor = useRef()
    const area = useRef()
    const prototipo = useRef()
    const descripcion = useRef()
    const procesoProductivo = useRef()
    const aplicabilidad = useRef()
    const requerimientos = useRef()

    const [filterState, setFilterState] = useState("todos")
    const [filterMotor, setFilterMotor] = useState("todos")

    //Function to download Excel
    function downloadExcel() {
        let aux = []
        if(activeFilter){
            aux = innovators
            .filter((val) => {
                if (filterState === filterMotor) {
                    return val
                } else if (filterState === "todos") {
                    if (val.motor.toLowerCase().includes(filterMotor.toLowerCase())) {//deberia ser motor
                        if (searchTerm == "") {
                            return val
                        }
                        else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.área.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }
                } else if (filterMotor === "todos") {
                    if (val.estado.toLowerCase().includes(filterState.toLowerCase())) {
                        if (searchTerm == "") {
                            return val
                        }
                        else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.área.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }
                } else if (val.motor.toLowerCase().includes(filterMotor.toLowerCase()) &&
                    val.estado.toLowerCase().includes(filterState.toLowerCase())) {
                    if (searchTerm == "") {
                        return val
                    }
                    else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else if (val.área.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }
            })
        
        }else{
            aux = innovators
            .filter((val) => {
                if (searchTerm == "") {
                    return val
                }
                else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
                else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
                else if (val.cédula.toString().includes(searchTerm)) {
                    return val
                }
                else if (val.área.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }

            })
        }
        var wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(aux);

        XLSX.utils.book_append_sheet(wb, ws, "Mysheet1");

        XLSX.writeFile(wb, "test.xlsx")
    }

    let innovator
    //Function to find an user data an displaying it
    function displayInnovator(ci) {
        const inno = innovators.findIndex(function (innovator, index) {
            return innovator.cédula === ci
        })
        console.log(innovators[inno])
        setSelectedInnovator(innovators[inno])
        setMostrarInnovador(true)
    }

    //Funcion para agregar innovador individual
    async function handleSubmit(e) {
        e.preventDefault()

        const currentTime = new Date()

        var inno = {
            nombres: nombre.current.value,
            apellidos: apellido.current.value,
            cédula: parseInt(ci.current.value, 10),
            email: email.current.value,
            teléfono: telefono.current.value,
            estado: estado.current.value,
            ciudad: ciudad.current.value,
            nombreProyecto: nombreProyecto.current.value,
            motor: motor.current.value,
            área: area.current.value,
            prototipo: prototipo.current.value,
            descripción: descripcion.current.value,
            procesoProductivo: procesoProductivo.current.value,
            aplicabilidad: aplicabilidad.current.value,
            requerimientos: requerimientos.current.value,
            diaRegistro: currentTime.getDate(),
            mesRegistro: currentTime.getMonth()+1,
            añoRegistro: currentTime.getFullYear()
        }

        add(inno)

        nombre.current.value = apellido.current.value
            = ci.current.value = email.current.value
            = telefono.current.value = estado.current.value
            = ciudad.current.value = nombreProyecto.current.value
            = motor.current.value = area.current.value
            = prototipo.current.value = descripcion.current.value
            = procesoProductivo.current.value = aplicabilidad.current.value
            = requerimientos.current.value = ""

    }

    //Function to add multiple innovators from an excel
    function handleFile(e) {
        addMultiple(e)
    }

    //Paginator variables and functions
    const [pageNumber, setPageNumber] = useState(0);
    const innoPerPages = 20;
    const pagesVisited = pageNumber * innoPerPages;
    var displayUsers;
    if (activeFilter) {
        displayUsers = innovators
            .filter((val) => {
                if (filterState === filterMotor) {
                    return val
                } else if (filterState === "todos") {
                    if (val.motor.toLowerCase().includes(filterMotor.toLowerCase())) {//deberia ser motor
                        if (searchTerm == "") {
                            return val
                        }
                        else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }
                } else if (filterMotor === "todos") {
                    if (val.estado.toLowerCase().includes(filterState.toLowerCase())) {
                        if (searchTerm == "") {
                            return val
                        }
                        else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                        else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }
                } else if (val.motor.toLowerCase().includes(filterMotor.toLowerCase()) &&
                    val.estado.toLowerCase().includes(filterState.toLowerCase())) {
                    if (searchTerm == "") {
                        return val
                    }
                    else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    else if (val.cédula.toString().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }
            })
            .slice(pagesVisited, pagesVisited + innoPerPages)
            .map((innovator) => {
                return (
                    <tr key={innovator.id} onClick={() => { displayInnovator(innovator.cédula) }}>
                        <td>{innovator.cédula}</td>
                        <td>{innovator.nombres}</td>
                        <td>{innovator.apellidos}</td>
                        <td className='hidde-column'>{innovator.teléfono}</td>
                        <td className='hidde-column'>{innovator.email}</td>
                        <InnovatorArea>{innovator.área}</InnovatorArea>
                    </tr>
                )
            })
    } else {
        displayUsers = innovators
            .filter((val) => {
                if (searchTerm == "") {
                    return val
                }
                else if (val.nombres.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
                else if (val.apellidos.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
                else if (val.cédula.toString().includes(searchTerm)) {
                    return val
                }
                else if (val.área.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }

            })
            .slice(pagesVisited, pagesVisited + innoPerPages)
            .map((innovator) => {
                return (
                    <tr key={innovator.id} onClick={() => { displayInnovator(innovator.cédula) }}>
                        <td>{innovator.cédula}</td>
                        <td>{innovator.nombres}</td>
                        <td>{innovator.apellidos}</td>
                        <td className='hidde-column'>{innovator.teléfono}</td>
                        <td className='hidde-column'>{innovator.email}</td>
                        <InnovatorArea>{innovator.área}</InnovatorArea>
                    </tr>
                )
            })
    }

    const pageCount = Math.ceil(innovators.length / innoPerPages)

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div>
            {filter &&
                <div>
                    <Mask >
                    </Mask>
                    <Form >
                        <Cross onClick={() => { setFilter(false) }}><ImCross /></Cross>
                        <div style={{
                            background: 'white', overflow: 'hidden', borderRadius: '5px',
                            height: '40vh', width: '300px', display: 'flex', flexDirection: 'column', padding: '10px'
                        }}>
                            <h3>FILTRO:</h3>
                            <div style={{ display: 'flex', margin: '10px' }}>
                                <p style={{ paddingRight: '20px' }}>Activar:</p>
                                <CheckBox>
                                    <label class="toggle" for="myToggle">
                                        <input class="toggle__input" name="" type="checkbox" id="myToggle" checked={activeFilter}
                                            onChange={() => { setActiveFilter(activeFilter => !activeFilter) }} />
                                        <div class="toggle__fill"></div>
                                    </label>
                                </CheckBox>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                                <label for="Estado">Estado</label>
                                <select name="Estado" id="Estado" onChange={event => { setFilterState(event.target.value) }}>
                                    <option value="todos">todos</option>
                                    <option value="Amazonas">Amazonas</option>
                                    <option value="Anzoátegui">Anzoátegui</option>
                                    <option value="Apure">Apure</option>
                                    <option value="Aragua">Aragua</option>
                                    <option value="Barinas">Barinas</option>
                                    <option value="Bolívar">Bolívar</option>
                                    <option value="Carabobo">Carabobo</option>
                                    <option value="Cojedes">Cojedes</option>
                                    <option value="Delta Amacuro">Delta Amacuro</option>
                                    <option value="Distrito Capital">Distrito Capital</option>
                                    <option value="Falcón">Falcón</option>
                                    <option value="Guárico">Guárico</option>
                                    <option value="Lara">Lara</option>
                                    <option value="Mérida">Mérida</option>
                                    <option value="Miranda">Miranda</option>
                                    <option value="Monagas">Monagas</option>
                                    <option value="Nueva Esparta">Nueva Esparta</option>
                                    <option value="Portuguesa">Portuguesa</option>
                                    <option value="Sucre">Sucre</option>
                                    <option value="Táchira">Táchira</option>
                                    <option value="Trujillo">Trujillo</option>
                                    <option value="Vargas">Vargas</option>
                                    <option value="Yaracuy">Yaracuy</option>
                                    <option value="Zulia">Zulia</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                                <label for="Motor">Motor</label>
                                <select name="Motor" id="Motor" onChange={event => { setFilterMotor(event.target.value) }}>
                                    <option value="todos">todos</option>
                                    <option value="Agroalimentario">Agroalimentario</option>
                                    <option value="Farmacéutico">Farmacéutico</option>
                                    <option value="Industrial">Industrial</option>
                                    <option value="Exportador">Exportador</option>
                                    <option value="Economía Comunal, Social y Socialista">Economía Comunal, Social y Socialista</option>
                                    <option value="Hidrocarburos">Hidrocarburos</option>
                                    <option value="Petroquímico">Petroquímico</option>
                                    <option value="Minero">Minero</option>
                                    <option value="Turismo">Turismo</option>
                                    <option value="Construcción">Construcción</option>
                                    <option value="Forestal">Forestal</option>
                                    <option value="Industrial Militar">Industrial Militar</option>
                                    <option value="Telecomunicaciones e Informática">Telecomunicaciones e Informática</option>
                                    <option value="Banca y Finanzas">Banca y Finanzas</option>
                                    <option value="Industrias Básicas, Estratégicas y Socialistas">Industrias Básicas, Estratégicas y Socialistas</option>
                                    <option value="Criptomoneda petro">Criptomoneda petro</option>
                                    <option value="Automotriz">Automotriz</option>
                                    <option value="Emprendedores y emprendedoras">Emprendedores y emprendedoras</option>
                                </select>
                            </div>
                        </div>
                    </Form>
                </div>}

            {mostrarInnovador &&
                <div>
                    <Mask >
                    </Mask>
                    <Form >
                        <div style={{ background: 'white', overflow: 'hidden', borderRadius: '5px', height: '80vh', width: '80vw', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'end', padding: '3px', background: '#15548f' }}>
                                <Cross onClick={() => { setMostrarInnovador(false) }}><ImCross /></Cross>
                            </div>
                            <div style={{ overflowY: 'scroll' }}>
                                <Personal_Information_D>
                                    <h3>{selectedInnovator.nombres} {selectedInnovator.apellidos}</h3>
                                    <div className='person-info'>
                                        <div style={{ flexGrow: '1' }}>
                                            <div className='location-ci'><b>CI: </b> {selectedInnovator.cédula}</div>
                                            <div className='location-ci'><b>Estado: </b>{selectedInnovator.estado}</div>
                                            <div className='location-ci'><b>Ciudad: </b>{selectedInnovator.ciudad}</div>
                                        </div>
                                        <div className='right-section' style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
                                            <Contact><MdOutlineAlternateEmail size='30px' style={{ background: '#8cb2d0', padding: '5px', borderRadius: '10px 0px 0px 10px' }} /><p>{selectedInnovator.email}</p></Contact>
                                            <Contact><BsFillTelephoneFill size='30px' style={{ background: '#8cb2d0', padding: '5px', borderRadius: '10px 0px 0px 10px' }} /><p>{selectedInnovator.teléfono}</p></Contact>
                                        </div>
                                    </div>
                                </Personal_Information_D>
                                <Project_Information_D>
                                    <Proyect_Data><h3 style={{ padding: '10px' }}>{selectedInnovator.nombreProyecto}</h3></Proyect_Data>

                                    <div className='project-details' >
                                        <Proyect_Data><b>Motor:</b><p>{selectedInnovator.motor}</p></Proyect_Data>
                                        <Proyect_Data><b>Área:</b><p>{selectedInnovator.área}</p></Proyect_Data>
                                        <Proyect_Data><b>Prototipo:</b><p>{selectedInnovator.prototipo}</p></Proyect_Data>
                                    </div>

                                    <div style={{ paddingTop: '10px' }}>
                                        <div style={{ margin: '10px', padding: '7px', border: '1px solid #8cb2d0', borderRadius: '5px' }}>
                                            <b>Descripción:</b><p>{selectedInnovator.descripción}</p>
                                        </div>
                                        {selectedInnovator.procesoProductivo && <div style={{ margin: '10px', padding: '7px', border: '1px solid #8cb2d0', borderRadius: '5px' }}>
                                            <b>Proceso Productivo:</b><p>{selectedInnovator.procesoProductivo}</p>
                                        </div>}
                                        {selectedInnovator.aplicabilidad && <div style={{ margin: '10px', padding: '7px', border: '1px solid #8cb2d0', borderRadius: '5px' }}>
                                            <b>Aplicabilidad:</b><p>{selectedInnovator.aplicabilidad}</p>
                                        </div>}
                                        {selectedInnovator.requerimientos && <div style={{ margin: '10px', padding: '7px', border: '1px solid #8cb2d0', borderRadius: '5px' }}>
                                            <b>Requerimientos:</b><p>{selectedInnovator.requerimientos}</p>
                                        </div>}
                                    </div>
                                </Project_Information_D>
                            </div>
                        </div>
                    </Form>
                </div>}

            {addInnovator &&
                <div>

                    <Mask>
                    </Mask>
                    <Form >
                        <Cross onClick={toggle}><ImCross /></Cross>
                        <form onSubmit={handleSubmit}>
                            <div className='sections'>
                                <Personal_Information>

                                    <h3>Datos del Innovador</h3>
                                    <div>
                                        <label>Nombre</label>
                                        <input type='text' ref={nombre} required />
                                    </div>
                                    <div>
                                        <label>Apellido</label>
                                        <input type='text' ref={apellido} required />
                                    </div>
                                    <div>
                                        <label>CI</label>
                                        <input type='number' ref={ci} required />
                                    </div>
                                    <div>
                                        <label>email</label>
                                        <input type='email' ref={email} />
                                    </div>
                                    <div>
                                        <label>Teléfono</label>
                                        <input type='number' ref={telefono} />
                                    </div>
                                    <div>
                                        <h4 style={{ paddingBottom: '10px' }}>Dirección:</h4>
                                        <div>
                                            <label for="Estado">Estado</label>
                                            <select name="Estado" id="Estado" ref={estado} >
                                                <option value="Amazonas">Amazonas</option>
                                                <option value="Anzoátegui">Anzoátegui</option>
                                                <option value="Apure">Apure</option>
                                                <option value="Aragua">Aragua</option>
                                                <option value="Barinas">Barinas</option>
                                                <option value="Bolívar">Bolívar</option>
                                                <option value="Carabobo">Carabobo</option>
                                                <option value="Cojedes">Cojedes</option>
                                                <option value="Delta Amacuro">Delta Amacuro</option>
                                                <option value="Distrito Capital">Distrito Capital</option>
                                                <option value="Falcón">Falcón</option>
                                                <option value="Guárico">Guárico</option>
                                                <option value="Lara">Lara</option>
                                                <option value="Mérida">Mérida</option>
                                                <option value="Miranda">Miranda</option>
                                                <option value="Monagas">Monagas</option>
                                                <option value="Nueva Esparta">Nueva Esparta</option>
                                                <option value="Portuguesa">Portuguesa</option>
                                                <option value="Sucre">Sucre</option>
                                                <option value="Táchira">Táchira</option>
                                                <option value="Trujillo">Trujillo</option>
                                                <option value="Vargas">Vargas</option>
                                                <option value="Yaracuy">Yaracuy</option>
                                                <option value="Zulia">Zulia</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label>Ciudad/Pueblo</label>
                                            <input type='text' ref={ciudad} />
                                        </div>
                                    </div>
                                </Personal_Information>
                                <Project_Information>
                                    <div className='title'>
                                        <h3 >Proyecto</h3>
                                    </div>
                                    <div className='fields'>
                                        <div className='left-fields'>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                                <label>Nombre del proyecto</label>
                                                <input type='text' ref={nombreProyecto} required />
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label for="Motor">Motor</label>
                                                <select name="Motor" id="Motor" ref={motor}>
                                                    <option value="Agroalimentario">Agroalimentario</option>
                                                    <option value="Farmacéutico">Farmacéutico</option>
                                                    <option value="Industrial">Industrial</option>
                                                    <option value="Exportador">Exportador</option>
                                                    <option value="Economía Comunal, Social y Socialista">Economía Comunal, Social y Socialista</option>
                                                    <option value="Hidrocarburos">Hidrocarburos</option>
                                                    <option value="Petroquímico">Petroquímico</option>
                                                    <option value="Minero">Minero</option>
                                                    <option value="Turismo">Turismo</option>
                                                    <option value="Construcción">Construcción</option>
                                                    <option value="Forestal">Forestal</option>
                                                    <option value="Industrial Militar">Industrial Militar</option>
                                                    <option value="Telecomunicaciones e Informática">Telecomunicaciones e Informática</option>
                                                    <option value="Banca y Finanzas">Banca y Finanzas</option>
                                                    <option value="Industrias Básicas, Estratégicas y Socialistas">Industrias Básicas, Estratégicas y Socialistas</option>
                                                    <option value="Criptomoneda petro">Criptomoneda petro</option>
                                                    <option value="Automotriz">Automotriz</option>
                                                    <option value="Emprendedores y emprendedoras">Emprendedores y emprendedoras</option>
                                                </select>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Área</label>
                                                <input type='text' ref={area} required />
                                            </div>


                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Prototipo</label>
                                                <input type='text' ref={prototipo} />
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Descripción</label>
                                                <textarea id="w3review" name="w3review" rows="6" cols="20" ref={descripcion} />

                                            </div>

                                        </div>
                                        <div className='right-fields'>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Proceso Productivo</label>
                                                <textarea id="w3review" name="w3review" rows="6" cols="20" ref={procesoProductivo} />

                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Aplicabilidad</label>
                                                <textarea id="w3review" name="w3review" rows="6" cols="20" ref={aplicabilidad}>
                                                </textarea>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <label>Requerimientos</label>
                                                <textarea id="w3review" name="w3review" rows="6" cols="20" ref={requerimientos}>
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <input type='submit' name='Agregar' />
                                </Project_Information>
                            </div>

                        </form>
                    </Form>
                </div>}

            <Options>
                <Add>

                    <Add_innovator_btn onClick={toggle}><p>Agregar Innovador</p> <FaUserPlus size="1rem" /></Add_innovator_btn>
                    <Add_excel_btn>
                        <p>Agregar Excel</p> <FaFileExcel size="1rem" />
                        <input type="file" onChange={(e) => handleFile(e)} />
                    </Add_excel_btn>
                    <Download onClick={downloadExcel}>
                        <p>Descargar</p>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.3em" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                    </Download>
                </Add>
                <Search>
                    <Search_input>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="buscar"
                                            onChange={event => { setSearchTerm(event.target.value) }} />
                                    </td>
                                    <td>
                                        <button><FaSearch size="1rem" /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Search_input>


                    <Filtrar onClick={() => { setFilter(true) }}>
                        <FaFilter />
                        Filtrar
                    </Filtrar>
                </Search>
            </Options>

            <ScrolledTable>
                <Table clicked={toggleNav} >
                    <MyTHead>
                        <tr >
                            <th>CI</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th className='hidde-column'>Teléfono</th>
                            <th className='hidde-column'>Correo</th>
                            <th>Área</th>
                        </tr>
                    </MyTHead>

                    <Tbody>
                        {displayUsers}
                        <tr>
                            <td colSpan={6}>

                                <ReactPaginate
                                    previousLabel="previous"
                                    nextLabel="next"
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={"paginationBttns"}
                                    previousLinkClassName={"previousBttn"}
                                    nextLinkClassName={"nextBttn"}
                                    disabledClassName={"paginationDisabled"}
                                    activeClassName={"paginationActive"}
                                />
                            </td>
                        </tr>


                    </Tbody>
                </Table>
            </ScrolledTable>
        </div>
    )
}
