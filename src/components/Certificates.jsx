import React from 'react';

const Certificates = props =>(
    <div className="Certificates">
        <div className="Certificates-container">
        <h2>Certificates</h2>

            {props.data.map((cert,index)=>(
            <div className="Certificates-item" key={`Cert-${index}`}>
                <h3>{cert.name} @{cert.institution} {cert.date}</h3>
                <p>{cert.description}</p>
            </div>
            ))
            }

        </div>
    </div>
)

export default Certificates;