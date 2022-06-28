import useSWR from "swr";

import fetcher from "@/lib/client/fetcher";

const useUser = () => useSWR("/api/user", fetcher);

export default useUser;
