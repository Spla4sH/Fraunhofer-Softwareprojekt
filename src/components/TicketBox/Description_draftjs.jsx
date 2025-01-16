import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

function Description({ inputValue, setInputValue, error }) {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty() // Initialer Editor-Zustand
    );

    // Event-Handler für Editor-Updates
    const handleEditorChange = (newEditorState) => {
        setEditorState(newEditorState);
        const contentState = newEditorState.getCurrentContent();
        const htmlContent = convertContentToHTML(contentState); // Eigene Konvertierung zu HTML
        setInputValue(htmlContent); // Inhalt zurückgeben
    };

    // Text-Styling anwenden (z.B. fett, kursiv, unterstrichen)
    const toggleInlineStyle = (style) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    };

    // Text-Ausrichtung anwenden (zentriert, links, rechts)
    const toggleBlockType = (blockType) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    return (
        <Box
            className='Container__Description'
            noValidate
            autoComplete="off"
        >

            {/* H3 */}
            <Typography
                variant="h3"
                sx={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    fontSize: "16px",
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "normal",
                    marginBottom: "0.5em",
                }}
            >
                Beschreibung

                <Box
                    component="span"
                    sx={{
                        color: "red",
                        marginLeft: "0.2em",
                    }}
                >
                    *
                </Box>
            </Typography>

            <div
                style={{
                    border: error ? "1px solid red" : "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "0.5em",
                    height: "calc(1.5em * 6 + 1em)", // Höhe für 6 Zeilen
                    overflowY: "auto",
                    whiteSpace: "pre-wrap",
                    backgroundColor: "#fff",
                    fontFamily: "Arial, sans-serif",
                }}
                onClick={() => document.querySelector(".DraftEditor-root").focus()} // Fokus auf Editor setzen
            >
                <Editor
                    editorState={editorState}
                    onChange={handleEditorChange}
                    placeholder="Beschreibung"
                />
            </div>
            {error && (
                <div style={{ color: "red", marginTop: "0.5em" }}>
                    Bitte fügen Sie eine Beschreibung ein.
                </div>
            )}
            <div style={{ marginTop: "1em", display: "flex", gap: "0.5em" }}>
                <button onClick={() => toggleInlineStyle("BOLD")}>B</button>
                <button onClick={() => toggleInlineStyle("ITALIC")}>I</button>
                <button onClick={() => toggleInlineStyle("UNDERLINE")}>U</button>
                <button onClick={() => toggleBlockType("unordered-list-item")}>
                    • Liste
                </button>
                <button onClick={() => toggleBlockType("ordered-list-item")}>
                    1. Liste
                </button>
                <button onClick={() => toggleBlockType("left")}>Links</button>
                <button onClick={() => toggleBlockType("center")}>Zentriert</button>
                <button onClick={() => toggleBlockType("right")}>Rechts</button>
            </div>
        </Box>
    )
}

export default Description;