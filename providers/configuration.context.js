import React, {useState, useEffect} from "react";
import { ConfigurationContext } from "../contexts/configuration.context";
import axios from "axios";

const ConfigurationProvider = ({children}) => {
    const [configuration, setConfiguration] = useState(null);
    const [loading, setLoading] = useState(true);

    //TODO: getStaticProps call for the data being passed here
    const getConfigurationData = async () => {
        try{
            const res = await axios.get(`/api/config`);
            
            setLoading(false);
            setConfiguration(res.data);
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

export default ConfigurationProvider;