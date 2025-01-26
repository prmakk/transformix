import { FC, useRef, useState } from "react";
import toast from "react-hot-toast";
import { QRCodeSVG } from "qrcode.react";

const GenerateQrPage: FC = () => {
    const svgRef = useRef(null);
    const [inputText, setInputText] = useState("");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [fgColor, setFgColor] = useState("#000000");

    const handleClear = () => {
        setInputText("");
        toast.success("Input cleared");
    };

    const handleDownloadQr = () => {
        const svgElement: any = svgRef.current;
        const svgString = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgString], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transformix_qrcode.svg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        toast.success("Download finished");
    };

    return (
        <div className="pb-4">
            <h3 className="text-sky-400 text-xl font-bold">Generate QR</h3>
            <div className="flex justify-between gap-4 max-md:flex-col max-md:items-center">
                <div className="w-2/4 max-md:w-full">
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
                </div>

                <div className="w-2/4 flex-col items-center">
                    {inputText.trim() !== "" && (
                        <>
                            <QRCodeSVG
                                ref={svgRef}
                                className="w-full min-h-60"
                                value={inputText}
                                bgColor={bgColor}
                                fgColor={fgColor}
                            />
                            <div className="mt-4 flex gap-5 items-center justify-center max-sm:flex-col">
                                <div className="flex items-center gap-2">
                                    <label
                                        htmlFor="bgColor"
                                        className="text-sky-400 font-semibold w-25"
                                    >
                                        Background:
                                    </label>
                                    <input
                                        id="bgColor"
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) =>
                                            setBgColor(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex items-center gap-2">
                                    <label
                                        htmlFor="fgColor"
                                        className="text-sky-400 font-semibold w-25"
                                    >
                                        Main color:
                                    </label>
                                    <input
                                        id="fgColor"
                                        type="color"
                                        value={fgColor}
                                        onChange={(e) =>
                                            setFgColor(e.target.value)
                                        }
                                    />
                                </div>

                                <button
                                    onClick={handleDownloadQr}
                                    className="bg-sky-400 text-white px-4 py-2 rounded cursor-pointer"
                                >
                                    Download QR
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GenerateQrPage;
