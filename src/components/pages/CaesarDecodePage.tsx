import { FC, useEffect, useState } from "react";

import TransformText from "../layouts/TransformText";

const CaesarDecodePage: FC = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [shift, setShift] = useState(0);

    const handleCaesarDecode = (text: string, shift: number) => {
        let result = "";

        for (let i = 0; i < text.length; i++) {
            let char = text[i];

            if (char.match(/[a-z]/i)) {
                let code = text.charCodeAt(i);

                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(
                        ((code - 65 - shift + 26) % 26) + 65
                    );
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(
                        ((code - 97 - shift + 26) % 26) + 97
                    );
                }
            }

            result += char;
        }

        return setOutputText(result);
    };

    useEffect(() => {
        handleCaesarDecode(inputText, shift);
    }, [inputText]);

    useEffect(() => {
        handleCaesarDecode(inputText, shift);
    }, [inputText, shift]);

    useEffect(() => {
        if (shift < 0 || shift > 26) {
            setShift(0);
        }
    }, [shift]);

    return (
        <TransformText
            title="Caesar Decode"
            inputText={inputText}
            setInputText={setInputText}
            outputText={outputText}
            shift={shift}
            setShift={setShift}
        />
    );
};

export default CaesarDecodePage;
