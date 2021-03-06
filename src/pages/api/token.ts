import consola from "consola";
import type { NextApiRequest, NextApiResponse } from "next";

import { getToken } from "@/lib/server/api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Disable endpoint outside of `development`
    if (process.env.NODE_ENV !== "development")
        return res
            .status(500)
            .json({ error: "endpoint disabled outside of `development`" });

    try {
        const data = await getToken();
        res.status(200).json(data);
    } catch (error) {
        consola.error("error fetching token");
        consola.error(error);
    }
};

export default handler;
