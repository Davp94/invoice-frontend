//PROP DRILING
const MyComponent = ({ underline, text }) => {
    const greeting = 'hello world - good evening'
    return (
        <>
            {/* <p>CONDITIONAL RENDERING</p> */}
            {underline && (<div className="bg-blue-900 flex justi"><strong>{text}</strong></div>)}
        </>
    );
};

export default MyComponent;