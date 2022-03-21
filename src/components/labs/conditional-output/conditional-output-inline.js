import React from "react";
const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            {/* if loggedIn is true, then this expression evaluates */}
            { loggedIn && <h2>Welcome Inline</h2>}
            {/* if loggedIn is false, then this expression evaluates */}
            {!loggedIn && <h2>Please login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;
