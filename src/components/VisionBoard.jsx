import React, { useState } from "react";
import { createPortal } from "react-dom";

const VisionBoard = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newNote, setNewNote] = useState("");

    const addNote = () => {
        if (newNote.trim()) {
            const updatedNotes = [...notes, newNote];
            setNotes(updatedNotes);
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            setNewNote("");
            setIsModalOpen(false);
        }
    };

    const removeNote = (index) => {
        const updatedNotes = notes.filter((_, idx) => idx !== index);
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    };

    return (
        <div
            className="relative min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 p-8 flex flex-col items-center overflow-hidden"
            style={{
                backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")',
            }}
        >
            {/* Twinkling Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 3}px`,
                            height: `${Math.random() * 3}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 5 + 2}s infinite ease-in-out`,
                        }}
                    />
                ))}
            </div>

            {/* Vision Board Title */}
            <h2 className="text-5xl font-bold text-white mb-8 drop-shadow-lg animate-fade-in"
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                    color: "red"
                }}>
                Our Little Vision Board
            </h2>

            {/* Vision Board Canvas */}
            <div
                className="relative w-full h-[70vh] bg-gradient-to-b from-pink-100 to-purple-100 rounded-xl shadow-xl p-6 overflow-hidden animate-slide-up"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")',
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
            >
                {/* Notes */}
                {notes.map((note, idx) => (
                    <div
                        key={idx}
                        className="absolute text-center text-white font-bold shadow-lg flex items-center justify-center animate-float"
                        style={{
                            width: "150px",
                            height: "150px",
                            clipPath: "polygon(50% 0%, 75% 25%, 100% 40%, 80% 100%, 50% 85%, 20% 100%, 0% 40%, 25% 25%)", // Heart shape
                            backgroundColor: `hsl(${Math.random() * 360}, 70%, 70%)`, // Random pastel colors
                            top: `${Math.random() * 70}%`,
                            left: `${Math.random() * 80}%`,
                            transform: `rotate(${Math.random() * 20 - 10}deg)`,
                        }}
                    >
                        <span>{note}</span>
                        <button
                            onClick={() => removeNote(idx)}
                            className="absolute top-1 right-1 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center shadow hover:bg-red-700"
                            style={{
                                fontSize: "14px",
                                cursor: "pointer",
                                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {/* Add Note Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 px-8 py-3 text-xl bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-all"
                style={{
                    fontFamily: "'Dancing Script', cursive",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                }}
            >
                Add Note
            </button>

            {/* Add Note Modal */}
            {isModalOpen &&
                createPortal(
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Jada Party Vala Samaan Dalega to Bohot Pitegaaa</h3>
                            <textarea
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                rows="4"
                                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Modern Family, Potato Sandwich type cheeze chalenge :)"
                            />
                            <div className="flex justify-end space-x-4 mt-4">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={addNote}
                                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                                >
                                    Add Note
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
};

export default VisionBoard;
