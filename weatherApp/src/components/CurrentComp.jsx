import React from "react";

const CurrentComp = ({ currentWeather, location }) => {
    return (
        <>
            <div className="container mt-4">
                <h4 className="text-center text-light">Current Weather of {location.name},{location.region},{location.country}</h4>
                <div className="row mt-4">
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body d-flex align-items-center">
                                <img src={currentWeather.condition.icon} style={{width:"50px"}} className="card-img" alt="weather-icon" />
                                <h5 className="card-title ms-2">{currentWeather.condition.text}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Temp [in C] {currentWeather.temp_c}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Temp [in F] {currentWeather.temp_f}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Humidity {currentWeather.humidity}</h5>
                            </div>
                        </div>
                    </div>

                </div>

                {/* row 2 */}
                <div className="row mt-4">
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title ">Wind Degree: {currentWeather.wind_degree}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Wind Dir:  {currentWeather.wind_dir}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Wind Speed[kph]: {currentWeather.wind_kph}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 mb-2">
                        <div className="card d-flex align-items-center">
                            <div className="card-body">
                                <h5 className="card-title"> Wind Speed[mph] {currentWeather.wind_mph}</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}
export default CurrentComp;