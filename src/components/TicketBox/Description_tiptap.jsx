import * as React from 'react';

import {
    Box,
    Paper,
    Typography,
} from '@mui/material';

import StarterKit from "@tiptap/starter-kit";
import {
    MenuButtonBold,
    MenuButtonItalic,
    MenuButtonUnderline,
    MenuButtonEditLink,
    MenuButtonAlignLeft,
    MenuButtonAlignCenter,
    MenuButtonAlignRight,
    MenuControlsContainer,
    MenuButtonBulletedList,
    MenuButtonOrderedList,
    MenuButtonImageUpload,
    MenuDivider,
    LinkBubbleMenu,
    LinkBubbleMenuHandler,
    RichTextEditorProvider,
    RichTextField,
} from "mui-tiptap";
import { useEditor, EditorContent } from "@tiptap/react";
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
// import FileHandler from '@tiptap-pro/extension-file-handler'

function Description({ inputValue, setInputValue, error }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            LinkBubbleMenuHandler,
            Image,
            // FileHandler,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right'],
            }),
            Placeholder.configure({
                placeholder: 'Beschreibung',
            }),
        ],
        content: inputValue,
        onUpdate: ({ editor }) => {
            const content = editor.getHTML();
            setInputValue(content);
        },
    });

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

            <RichTextEditorProvider editor={editor}>
                <RichTextField
                    id="rich-text-field"
                    error={error}
                    helperText={error ? "Bitte fügen Sie eine Beschreibung ein." : ""}
                    sx={{
                        border: error ? "1px solid red" : "1px solid #ccc",
                        borderRadius: "4px",
                        padding: "0.5em",
                        height: "calc(1.5em * 6 + 1em)", // 1.5em ist die Zeilenhöhe, 6 Zeilen + Padding
                        minHeight: "calc(1.5em * 6 + 1em)", // Gleiche Mindesthöhe wie die feste Höhe
                        maxHeight: "calc(1.5em * 6 + 1em)", // Gleiche maximale Höhe wie die feste Höhe
                        overflowY: "auto", // Ermöglicht vertikales Scrollen bei zu viel Inhalt
                        whiteSpace: "pre-wrap", // Zeilenumbrüche und Leerzeichen beibehalten
                        wordWrap: "break-word", // Lange Wörter umbrechen
                        backgroundColor: "#fff", // Weißer Hintergrund
                    }}
                >
                    <EditorContent editor={editor} />
                </RichTextField>
                <MenuControlsContainer>
                    <MenuButtonBold />
                    <MenuButtonItalic />
                    <MenuButtonUnderline />
                    <MenuDivider />
                    <MenuButtonBulletedList />
                    <MenuButtonOrderedList />
                    <MenuDivider />
                    <MenuButtonAlignLeft />
                    <MenuButtonAlignCenter />
                    <MenuButtonAlignRight />
                    <MenuDivider />
                    <LinkBubbleMenu />
                    <MenuButtonEditLink />
                    <MenuButtonImageUpload />
                </MenuControlsContainer>
            </RichTextEditorProvider>
        </Box>
    )
}

export default Description;