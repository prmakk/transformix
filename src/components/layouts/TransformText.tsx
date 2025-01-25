import { FC } from "react";
import toast from "react-hot-toast";

interface IProps {
    title: string;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
}

const TransformText: FC<IProps> = ({
    title,
    inputText,
    setInputText,
    outputText,
}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(outputText);
        toast.success("Text copied");
    };

    const handleClear = () => {
        setInputText("");
        toast.success("Input cleared");
    };

    return (
        <div className="pb-4">
            <h3 className="text-sky-400 text-xl font-bold">{title}</h3>
            <textarea
                className="w-full bg-sky-800 rounded text-white font-medium my-4 p-4 min-h-40 resize-none outline-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button
                className="bg-sky-400 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleClear}
            >
                Clear
            </button>
            <h3 className="text-sky-400 text-xl font-bold">Result</h3>
            <textarea
                className="w-full bg-sky-800 rounded text-white font-medium my-4 p-4 min-h-40 resize-none outline-none"
                disabled
                value={outputText}
            />
            <button
                className="bg-sky-400 text-white px-4 py-2 rounded cursor-pointer"
                onClick={handleCopy}
            >
                Copy
            </button>
        </div>
    );
};

export default TransformText;
