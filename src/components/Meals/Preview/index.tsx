import Card from "@/components/Card";

const Meal = (props: {
    name: string;
    icon: string;
    items: string[];
}): JSX.Element => {
    return (
        <div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
                <span className="mr-2 text-2xl">{props.icon}</span>
                {props.name}
            </h3>
        </div>
    );
};

const Meals = (): JSX.Element => {
    return (
        <>
            <Card>
                <h3 className="text-2xl font-semibold text-gray-900">Meals</h3>

                <div className="mt-8 space-x-8">
                    <div className="space-y-4 divide-y">
                        <Meal icon="☕" name="Breakfast" items={[]} />
                        <Meal icon="🍲" name="Lunch" items={[]} />
                        <Meal icon="🥗" name="Dinner" items={[]} />
                        <Meal icon="🍎" name="Snacks" items={[]} />
                    </div>
                </div>
            </Card>
        </>
    );
};

export default Meals;
