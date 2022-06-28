import cache from "memory-cache";
import moment from "moment";

/**
 * Check if required environment variables are present
 */
const validateEnv = async () => {
    if (!process.env.YAZIO_EMAIL)
        throw new Error("`YAZIO_EMAIL` missing from environment");

    if (!process.env.YAZIO_PASSWORD)
        throw new Error("`YAZIO_PASSWORD` missing from environment");
};

/**
 * Get the access token and refresh token for the current user
 * - Uses caching to avoid unessecary requests
 * @returns Promise resolving the token object containing access token and refresh token
 */
export const getToken = async (): Promise<{
    access_token: string;
    expires_in: string;
    refresh_token: string;
    token_type: string;
}> => {
    // Check if token already exists in cache
    const token = cache.get("YAZIO_TOKEN");
    if (token) return token;

    // Validate environment
    await validateEnv();

    // Fetch token
    const newToken = await fetch("https://yzapi.yazio.com/v10/oauth/token", {
        method: "POST",
        body: JSON.stringify({
            client_id: "1_4hiybetvfksgw40o0sog4s884kwc840wwso8go4k8c04goo4c",
            client_secret: "6rok2m65xuskgkgogw40wkkk8sw0osg84s8cggsc4woos4s8o",
            username: process.env.YAZIO_EMAIL,
            password: process.env.YAZIO_PASSWORD,
            grant_type: "password",
        }),
    }).then((res) => res.json());

    // Cache token
    cache.put(
        "YAZIO_TOKEN",
        newToken,
        newToken.expires_in * 1000 || 172800 * 1000
    );

    return newToken;
};

/**
 * Get the user by the cached token
 * @returns Promise resolving user object
 */
export const getUser = async () => {
    // Get user token
    const token = await getToken();

    // Fetch user
    const user = await fetch("https://yzapi.yazio.com/v11/user", {
        headers: { Authorization: `Bearer ${token.access_token}` },
    }).then((res) => res.json());

    return user;
};

/**
 * Fetch the nutrition goals for a given date
 * @param date Optional moment input (or Moment object) defining the date to fet the goals for
 * @returns Object containing nutrition goals for the specified day
 */
export const getGoals = async (date?: moment.MomentInput) => {
    // Get user token
    const token = await getToken();

    // Fetch user
    const user = await fetch(
        `https://yzapi.yazio.com/v11/user/goals?date=${moment(date).format(
            "YYYY-MM-DD"
        )}`,
        {
            headers: { Authorization: `Bearer ${token.access_token}` },
        }
    ).then((res) => res.json());

    return user;
};
