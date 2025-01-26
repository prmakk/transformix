import { FC, useEffect, useState } from "react";

import TransformText from "../layouts/TransformText";
import toast from "react-hot-toast";

const BinaryEncodePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleBinaryEncode = (text: string) => {
        try {
            let binary = "";
            for (let i = 0; i < text.length; i++) {
                let charCode = text.charCodeAt(i).toString(2);
                while (charCode.length < 8) {
                    charCode = "0" + charCode;
                }
                binary += charCode + " ";
            }
            return setOutputText(binary.trim());
        } catch (e) {
            toast.error;
        }
    };

    useEffect(() => {
        handleBinaryEncode(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="Binary Encode"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default BinaryEncodePage;
