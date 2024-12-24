import React, {useState} from "react";

const EncryptionForm = ({onSuccess}) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (input1 === "otte otte" && input2 === "sotte sotte") {
            onSuccess();
        } else {
            setError("Heyyy, you ain't my Disha Birla, get outta here!!!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-300">
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white rounded shadow-lg"
            >
                <h2 className=" mb-4 text-2xl font-bold text-center">Enter the Secret Phrases</h2>
                <input
                type="text"
                placeholder="Paga Puiiiii.... (hint: no leading spaces and no caps)"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                />
                <input 
                type="text"
                placeholder="Saga Suiiiiii.... (hint: no leading spaces and no caps)"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
                />
                {error && <p className="text-red-500">{error}</p>}

                <button
                className="w-full py-2 mt-2 text-white bg-purple-500 rounded hover:bg-purple-600"
                type="submit"
                >
                    Unlock 
                </button>
            </form>
        </div>
    );
};

export default EncryptionForm;
