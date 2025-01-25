import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

import TransformText from "../layouts/TransformText";

const Base64DecodePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleDecode = (text: string) => {
        try {
            const encoded = atob(text);
            setOutputText(encoded);
        } catch (e) {
            toast.error("Error");
        }
    };

    useEffect(() => {
        handleDecode(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="Base64 Decode"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default Base64DecodePage;
