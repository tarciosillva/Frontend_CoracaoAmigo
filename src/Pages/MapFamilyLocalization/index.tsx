import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

import { localizationProps } from "./type";

const MapFamilyLocalization: React.FC = () => {
    const token = localStorage.getItem('token')
    const [selected, setSelected] = useState<any>({});
    const [location, setLocaion] = useState<localizationProps[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/listCordinatesGeolocalizationFamilyAdress`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            setLocaion(res.data)
        })
    }, [])

    return (
        <div>
            <LoadScript googleMapsApiKey={`AIzaSyCGRZXBKQbSon25klWMs1r-luoPYeFT93Y`}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: -5.3397504, lng: -49.0941968 }}
                    zoom={15}
                >

                    {/* Child components, such as markers, info windows, etc. */}
                    {location.map((element, index) => (
                        <Marker onClick={() => setSelected({ lat: Number(element.geolocalizacao[0]), lng: Number(element.geolocalizacao[1]) })} position={{ lat: Number(element.geolocalizacao[0]), lng: Number(element.geolocalizacao[1]) }}>
                            {/*  <InfoWindow
                                position={selected}
                                onPositionChanged={() => setSelected({})}
                            >
                                <p>Casa dona Rosa</p>
                            </InfoWindow> */}
                        </Marker>
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapFamilyLocalization