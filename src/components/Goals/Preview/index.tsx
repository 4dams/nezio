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
            <h3 className="text-lg font-semibold text-gray-900">
                {props.name}
            </h3>

            <div className="flex items-center justify-between">
                <div className="mt-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-2.5 w-8/12 rounded-full bg-gradient-to-r from-sky-500 to-blue-500" />
                </div>

                <p className="inline-block w-40 text-right font-semibold text-gray-500">
                    <NumberFormat
                        value={Math.round(props.current)}
                        displayType="text"
                        thousandSeparator
                        suffix="g"
                    />{" "}
                    /{" "}
                    <NumberFormat
                        value={Math.round(props.target)}
                        displayType="text"
                        thousandSeparator
                        suffix="g"
                    />
                </p>
            </div>
        </div>
    );
};

const Preview = (): JSX.Element => {
    // Use User Hook
    const { data: goals, error } = useGoals();

    return (
        <>
            {goals && (
                <Card>
                    <h3 className="text-2xl font-semibold text-gray-900">
                        Goals
                    </h3>

                    <div className="mt-8 space-y-4">
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
                </Card>
            )}
        </>
    );
};

export default Preview;
