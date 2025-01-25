import { FC, useEffect, useState } from "react";

import TransformText from "../layouts/TransformText";

const ToLowerPage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleLower = (text: string) => {
        setOutputText(text.toLowerCase());
    };

    useEffect(() => {
        handleLower(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="To Lower Case"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default ToLowerPage;
