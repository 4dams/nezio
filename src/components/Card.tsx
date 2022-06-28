const Card = (props: { children?: React.ReactNode }): JSX.Element => {
    return (
        <div className="h-full rounded-3xl bg-white/80 py-10 px-8 shadow-xl backdrop-blur-lg xl:px-10 xl:text-left">
            {props.children}
        </div>
    );
};

export default Card;
