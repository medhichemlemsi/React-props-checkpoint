import PropTypes from "prop-types";

const profilecomponent = (props) => {
    return (
        <div>
            <div style={{backgroundcolor:"blue" }}>{props.children}</div>
            <button onClick={()=>props.alertName(props.fullName)}>Click me</button> 
        </div>
    );
};
profilecomponent.prototype= {
    fullName: PropTypes.string,
    alertName:PropTypes.func,
};
profilecomponent.defaultProps= {
    fullName: "Hichem",
};

export default profilecomponent
