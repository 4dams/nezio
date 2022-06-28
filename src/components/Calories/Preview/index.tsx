import NumberFormat from "react-number-format";

import useGoals from "@/hooks/useGoals";

import Card from "@/components/Card";

const Preview = (): JSX.Element => {
    // Use User Hook
    const { data: goals, error } = useGoals();

    return (
        <>
            {goals && (
                <Card>
                    {/* <h3 className="text-2xl font-semibold text-gray-900">
                        Calories
                    </h3> */}

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <NumberFormat
                                value={Math.round(1003)}
                                displayType="text"
                                thousandSeparator
                                suffix=" kcal"
                                className="inline-block w-40 text-2xl font-semibold text-gray-900"
                            />

                            <NumberFormat
                                value={Math.round(2451)}
                                displayType="text"
                                thousandSeparator
                                suffix=" kcal"
                                className="inline-block w-40 text-right text-gray-500"
                            />
                        </div>
                        <div className="mt-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                            <div className="h-2.5 w-8/12 rounded-full bg-gradient-to-r from-sky-500 to-blue-500" />
                        </div>
                    </div>
                </Card>
            )}
        </>
    );
};

export default Preview;
