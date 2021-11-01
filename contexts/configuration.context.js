//Figure out proper way to handle state management.

import { createContext } from "react";

export const ConfigurationContext = createContext({
    data: {},
    isLoading: true
})