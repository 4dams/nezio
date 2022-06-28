import Image from "next/image";

import backgroundImage from "~/images/background.jpg";

const Layout = (props: { children?: React.ReactNode }): JSX.Element => {
    return (
        <div className="relative pt-10 pb-20 sm:py-24">
            <div className="absolute -inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
                <div className="absolute top-0 left-0 -translate-y-[10%] -translate-x-[55%] -scale-x-100 sm:left-1/2 sm:-translate-y-[6%] sm:-translate-x-[98%] lg:-translate-x-[106%] xl:-translate-x-[122%]">
                    <Image
                        src={backgroundImage}
                        alt=""
                        layout="fixed"
                        width={918}
                        height={1495}
                        priority
                        unoptimized
                    />
                </div>

                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
