import React from "react";
 function Button(
    {children,
        // eslint-disable-next-line no-unused-vars
        type="button",
        bgColor="bg-blue-500",
        textColor="text-white",
        className="",
        ...props
    }
 ){
    return(
        <button className={`px-2 py-4 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
 }
 export default Button;