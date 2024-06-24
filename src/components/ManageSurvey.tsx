import { useNavigate } from "react-router-dom"
import logo from "../images/img.png"
import "../components/ManageSurvey.css"

const ManageSurvey = () => {

    const navigate = useNavigate()

    const HomeNavigate = () => {
        navigate("/admin")
    }

    const AddSurveyNavigate = () => {
        navigate("/addsurvey")
    }

    const ResultNavigate = () => {
        navigate("/surveyresult")
    }

    const LogoutNavigate = () => {
        navigate("/")
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
                                    <li><a className="dropdown-item" onClick={AddSurveyNavigate}>Add Survey</a></li>
                                    <li><a className="dropdown-item" >Manage Survey</a></li>
                                    <li><a className="dropdown-item" onClick={ResultNavigate}>Survey Result</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button className="btn btn-outline-primary" type="button" onClick={LogoutNavigate} >Sign Out</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { ManageSurvey }