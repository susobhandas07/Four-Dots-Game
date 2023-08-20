
const Favicon = ({ ...props }) => {
    return (
        <svg
            viewBox="0 0 52 52"
            xmlns="http://www.w3.org/2000/svg"
            style={{ maxWidth: "120px", width: "1em" }}
            {...props}
        >
            <g>
                <circle className="outer-circle-front" cx="13" cy="15" r="11" />
                <circle className="outer-circle-shadow" cx="13" cy="13" r="10" fill="#ff7676" stroke="black" strokeWidth="2px" />
            </g>
            <g>
                <circle className="outer-circle-front" cx="38" cy="15" r="11" />
                <circle className="outer-circle-shadow" cx="38" cy="13" r="10" fill="#ffe763" stroke="black" strokeWidth="2px" />
            </g>
            <g>
                <circle className="outer-circle-front" cx="13" cy="40" r="11" />
                <circle className="outer-circle-shadow" cx="13" cy="38" r="10" fill="#ffe763" stroke="black" strokeWidth="2px" />
            </g>
            <g>
                <circle className="outer-circle-front" cx="38" cy="40" r="11" />
                <circle className="outer-circle-shadow" cx="38" cy="38" r="10" fill="#ff7676" stroke="black" strokeWidth="2px" />
            </g>
        </svg>);
};

const Smily = ({ fill = "white", width = "1em", stroke = "black", ...props }) => {
    return (
        <svg
            style={{ maxWidth: "120px", width: width }}
            {...props}
            viewBox="0 0 53 53"
            xmlns="http://www.w3.org/2000/svg" >
            <circle id="face-outer-shadow" cx="26" cy="28" r="25" fill="black" />
            <circle id="face-outer" cx="25" cy="25" r="23" fill={fill} stroke={stroke} strokeWidth="3px" />
            <circle id="smile-round" cx="25" cy="25" r="13" fill="none" stroke={stroke} strokeWidth="3px" />
            <rect id="smile-cover" x="10" y="10" width="30" height="15" fill={fill} />
            <rect id="e-1" x="15" y="15" width="4" height="8" fill={stroke} />
            <rect id="e-2" x="30" y="15" width="4" height="8" fill={stroke} />
        </svg>
    );
}

const ExpressionLess = ({ fill = "white", width = "1em", stroke = "black", ...props }) => {
    return (
        <svg style={{ maxWidth: "120px", width: width }} {...props} viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg" >
            <circle id="face-outer-shadow" cx="26" cy="28" r="25" fill="black" />
            <circle id="face-outer" cx="25" cy="25" r="23" fill={fill} stroke={stroke} strokeWidth="4px" />
            <rect id="e-1" x="15" y="15" width="4" height="8" fill={stroke} />
            <rect id="e-2" x="30" y="15" width="4" height="8" fill={stroke} />
            <rect id="mouth" x="13" y="26" width="23" height="2" fill={stroke} />
        </svg>
    );
}

const TiltedSmily = ({ fill = "white", width = "1em", stroke = "black", reversed = false, ...props }) => {
    return (
        <svg
            style={{ maxWidth: "120px", width: width, transform: reversed ? "scaleX(-1)" : "" }}
            {...props}
            viewBox="0 0 53 53"
            xmlns="http://www.w3.org/2000/svg">
            <circle id="outer-circle-shadow" cx="27" cy="28" r="23" fill="black" stroke="black" strokeWidth="2px" />
            <circle id="outer-circle-behind" cx="25" cy="25" r="23" fill={fill} stroke="black" strokeWidth="2px" />
            <circle id="smile-round" cx="22" cy="24" r="13" fill="none" stroke={stroke} strokeWidth="3px" />
            <rect id="smile-cover" x="7" y="9" width="30" height="15" fill={fill} />
            <rect id="e-1" x="13" y="15" width="4" height="8" stroke={fill} />
            <rect id="e-2" x="23" y="15" width="4" height="8" stroke={fill} />
            <circle id="outer-circle-front" cx="25" cy="25" r="23" fill="transparent" stroke="black" strokeWidth="2px" />
        </svg>
    );
}

export { Favicon, TiltedSmily, Smily, ExpressionLess };