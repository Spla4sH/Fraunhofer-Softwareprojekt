import "./Stylesheet.css"
import CreateInputField from "./CreateInputField";

function SubjectLine() {
    return (
        <div>
            <CreateInputField headingText="Betreff" isRequired={true} isFullWidth={true}  />
        </div>
    );
}

export default SubjectLine;