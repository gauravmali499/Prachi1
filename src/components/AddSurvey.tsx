import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../images/img.png"
import "../components/AddSurvey.css"


const AddSurvey = () => {
    const navigate = useNavigate()
    const ManageSurveyNavigate = () => {
        navigate("/managesurvey")
    }

    const ResultNavigate = () => {
        navigate("/surveyresult")
    }

    const LogoutNavigate = () => {
        navigate("/")
    }

    const HomeNavigate = () => {
        navigate("/admin")
    }


    type info = {
        techName: string,
        techdes: string
    }

    const [techData, setTechData] = useState<info>({
        techName: "",
        techdes: ""
    })

    const handleData = (e: any) => {
        const { name, value } = e.target;
        console.log(value);

        setTechData({ ...techData, [name]: value })

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-light" id="navbar">
                <div className="container-fluid">
                    <img src={`${logo}`} id="logo" />
                    <a className="navbar-brand" href="#">Online Survey</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" onClick={HomeNavigate} >Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item">Add Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ManageSurveyNavigate}>Manage Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ResultNavigate}>Survey Result</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button" onClick={LogoutNavigate} >Sign Out</button>
                    </div>
                </div>
            </nav>

            <div style={{ margin: "150px 400px" }}>
                <div className="card">
                    <div className="card-header" style={{ backgroundColor: "#11aaab" }}>
                        Add a Survey
                    </div>
                    <div className="card-body">
                        <form>
                            Name of Technology: <input type="text" id="name" name="name" onChange={(e) => handleData(e)} /><br /><br />
                            Description of Technology: <textarea id="description" name="description" onChange={(e) => handleData(e)} /><br /><br />
                            <button type="button" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AddSurvey }