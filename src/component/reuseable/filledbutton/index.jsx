import React from "react";
import style from "./index.module.css";

const IconButton = ({
                        color,
                        textColor,
                        text,
                        icon,
                        height,
                        width,
                        iconPosition = "left",
                        onClick,
                        link
                    }) => {
    const buttonContent = (
        <button
            style={{
                backgroundColor: color,
                color: textColor,
                height: height,
                width: width,
                display: "flex",
                alignItems: "center",
                justifyContent: iconPosition === "left" ? "flex-start" : "space-between",
                gap: "8px",
                padding: "0 12px",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px", // Optional: For rounded corners
            }}
            className={style.iconButton}
            onClick={onClick}
        >
            {icon && iconPosition === "left" && <span>{icon}</span>}
            <span>{text}</span>
            {icon && iconPosition === "right" && <span>{icon}</span>}
        </button>
    );

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            {buttonContent}
        </a>
    ) : (
        buttonContent
    );
};

export default IconButton;
