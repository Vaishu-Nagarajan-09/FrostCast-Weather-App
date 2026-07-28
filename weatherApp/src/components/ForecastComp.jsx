import React from "react";

const ForecastComp = ({ forecastWeather, location }) => {
    return (

        <div className="container mt-3">
            <h4 className="text-center text-light">Forecast Weather of {location.name}, {location.region}, {location.country}</h4>

            {forecastWeather.forecastday.map((data, index) => {
                return (
                    <div key={index} className="accordion glass-accordion accordion accordion-flush p-2" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                     <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-2 text-center w-100">
                                        <div className="p-2 p-md-3">Day: {data.date}</div>
                                        <div className="p-2 p-md-3"><img src={data.day.condition.icon} /> {data.day.condition.text}</div>
                                        <div className="p-2 p-md-3">Min Temp: {data.day.mintemp_c}  °C</div>
                                        <div className="p-2 p-md-3">Max Temp: {data.day.maxtemp_c}°C</div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="hour-container">
                                        {data.hour.map((data, index) => {
                                        return (
                                            <>
                                            <h6 className="d-flex justify-content-center p-2"> {data.time} [ {data.temp_c} °C]</h6> 
                                            <div key={index} className="progress" role="progressbar" aria-label="secondary example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar bg-secondary p-2" style={{ width: `${data.temp_c}%` }}></div>
                                            </div>
                                            </>
                                           
                                        )
                                    })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>

    )
}
export default ForecastComp;