import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

import TransformText from "../layouts/TransformText";

const Base64EncodePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleEncode = (text: string) => {
        try {
            const encoded = btoa(text);
            setOutputText(encoded);
        } catch (e) {
            toast.error("Error");
        }
    };

    useEffect(() => {
        handleEncode(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="Base64 Encode"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default Base64EncodePage;
