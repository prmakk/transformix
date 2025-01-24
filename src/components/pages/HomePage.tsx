import { FC } from "react";

const HomePage: FC = () => {
    return (
        <div className="w-full flex justify-center py-15">
            <h1 className="text-white max-w-lg text-center text-base">
                TransoformiX is an OpenSource web application can encode and
                decode between different format systems. This happens fully in
                your browser using JavaScript, no content will be sent to any
                kind of server. Please note that the encryption methods offered
                below are very basic and therefore not considered as secure.
            </h1>
        </div>
    );
};

export default HomePage;
