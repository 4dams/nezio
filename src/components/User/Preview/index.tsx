import useUser from "@/hooks/userUser";

import Card from "@/components/Card";

const Preview = (): JSX.Element => {
    // Use User Hook
    const { data: user, error } = useUser();

    return (
        <>
            {user && (
                <Card>
                    <div className="space-y-6 xl:space-y-10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                            src={user.profile_image}
                            alt=""
                        />

                        <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                            <div className="space-y-1 text-lg font-medium leading-6">
                                <h3 className="text-2xl text-gray-900">
                                    {user.first_name} {user.last_name}
                                </h3>
                                <p className="text-blue-600">{user.email}</p>
                            </div>
                        </div>
                    </div>
                </Card>
            )}
        </>
    );
};

export default Preview;
