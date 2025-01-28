import { FC } from "react";
import toast from "react-hot-toast";

interface IProps {
    title: string;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
    //caesar settings
    shift?: number;
    setShift?: React.Dispatch<React.SetStateAction<number>>;
}

const TransformText: FC<IProps> = ({
    title,
    inputText,
    setInputText,
    outputText,
    shift,
    setShift,
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

            {/* section for caesar */}
            {shift !== undefined && setShift && (
                <>
                    <input
                        type="number"
                        value={shift}
                        min={0}
                        max={26}
                        onChange={(e) => setShift(parseInt(e.target.value))}
                        className="bg-sky-400 w-20 text-white px-4 py-2 mt-2 rounded cursor-pointer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        disabled
                    />
                    <div className="mt-2 flex gap-6">
                        <button
                            className="bg-sky-400 text-white font-bold w-7 h-7 shrink-0 grow-0 rounded-full cursor-pointer"
                            onClick={() => setShift(shift + 1)}
                        >
                            +
                        </button>
                        <button
                            className="bg-sky-400 text-white font-bold w-7 h-7 shrink-0 grow-0 rounded-full cursor-pointer"
                            onClick={() => setShift(shift - 1)}
                        >
                            -
                        </button>
                    </div>
                </>
            )}
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
