import CreateInputField from "./CreateInputField";

function SubjectLine() {
    return (
            <CreateInputField headingText="Betreff" isRequired={true} isFullWidth={true}  />
    );
}

export default SubjectLine;