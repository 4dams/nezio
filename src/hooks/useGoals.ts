import useSWR from "swr";

import fetcher from "@/lib/client/fetcher";

const useUser = () => useSWR("/api/goals", fetcher);

export default useUser;
