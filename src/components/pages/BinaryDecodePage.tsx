import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

import TransformText from "../layouts/TransformText";

const BinaryDecodePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");

    const handleBinaryDecode = (text: string) => {
        if (!inputText.trim()) {
            setOutputText("");
            return;
        }

        try {
            const binaryArray = text.split(" ");
            let result = "";
            binaryArray.forEach((bin) => {
                if (bin) {
                    const charCode = parseInt(bin, 2);
                    if (!isNaN(charCode)) {
                        const char = String.fromCharCode(charCode);
                        result += char;
                    }
                }
            });

            setOutputText(result);
        } catch (e) {
            toast.error("Error");
        }
    };

    useEffect(() => {
        handleBinaryDecode(inputText);
    }, [inputText]);

    return (
        <TransformText
            title="Binary Decode"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
        />
    );
};

export default BinaryDecodePage;
