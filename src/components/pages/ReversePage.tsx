import { FC, useEffect, useState } from "react";
import TransformText from "../layouts/TransformText";

const ReversePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleReverse = () => {
        setOutputText(inputText.split("").reverse().join(""));
    };

    useEffect(() => {
        handleReverse();
    }, [inputText]);

    return (
        <TransformText
            title="Reverse string"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default ReversePage;
