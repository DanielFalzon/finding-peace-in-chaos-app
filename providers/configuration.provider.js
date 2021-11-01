import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const ConfigurationContext = createContext();

export const ConfigurationProvider = ({children}) => {
    const [configuration, setConfiguration] = useState(null);
    const [loading, setLoading] = useState(true);

    //TODO: getStaticProps call for the data being passed here
    const getConfigurationData = async () => {
        try{
            const res = await axios.get(`/api/config`);
            
            setConfiguration(res.data);
            setLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getConfigurationData();
    }, [])

    return(
        <ConfigurationContext.Provider value={{configuration, loading}}>
            {{...children}}
        </ConfigurationContext.Provider>
    )
}