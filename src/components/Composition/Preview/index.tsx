import NumberFormat from "react-number-format";

import useGoals from "@/hooks/useGoals";

import Card from "@/components/Card";

const Goal = (props: {
    name: string;
    current: number;
    target: number;
}): JSX.Element => {
    return (
        <div>
            <h3 className="text-sm font-semibold text-gray-900">
                {props.name}
            </h3>

            <p className="text-4xl text-gray-900">
                <NumberFormat
                    value={Math.round(props.current)}
                    displayType="text"
                    thousandSeparator
                    suffix=" g"
                />
            </p>
            <p className="text-sm text-gray-500">
                <NumberFormat
                    value={Math.round(props.target)}
                    displayType="text"
                    thousandSeparator
                    suffix=" g"
                />
            </p>
        </div>
    );
};

const Composition = (): JSX.Element => {
    // Use User Hook
    const { data: goals, error } = useGoals();

    return (
        <>
            {goals && (
                <Card>
                    <h3 className="text-2xl font-semibold text-gray-900">
                        Calorie Composition
                    </h3>

                    <div className="jusify-start mt-8 flex items-start space-x-8">
                        <div className="mt-2 flex h-64 w-2.5 flex-wrap items-end rounded-full bg-gray-200 dark:bg-gray-700">
                            <div className="h-48 w-2.5 rounded-full bg-gradient-to-t from-sky-500 to-blue-500" />
                        </div>

                        <div className="space-y-4">
                            <Goal
                                name="Carbs"
                                current={8}
                                target={Number(goals["nutrient.carb"])}
                            />

                            <Goal
                                name="Protein"
                                current={8}
                                target={Number(goals["nutrient.protein"])}
                            />

                            <Goal
                                name="Fat"
                                current={8}
                                target={Number(goals["nutrient.fat"])}
                            />
                        </div>
                    </div>
                </Card>
            )}
        </>
    );
};

export default Composition;
