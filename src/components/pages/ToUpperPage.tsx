import { FC, useEffect, useState } from "react";

import TransformText from "../layouts/TransformText";

const ToUpperPage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleUpper = (text: string) => {
        setOutputText(text.toUpperCase());
    };

    useEffect(() => {
        handleUpper(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="To Upper Case"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default ToUpperPage;
