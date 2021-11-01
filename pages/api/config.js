import { getData } from "../../lib/api";

export const getConfig = async (req, res) => {
    const output = await getData();

    res.status(200).json(output.results[0]);
}

export default getConfig;
