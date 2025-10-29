import { useCallback, useEffect, useState } from "react";

export const ReactSpecific = ({ children }) => {
    const [code, setCode] = useState(
        localStorage.getItem("code").replace(/"/g, "") || null,
    );

    const callback = useCallback((event) => {
        if (event.detail.key === "code") {
            setCode(event.detail.value.replace(/"/g, ""));
        }
    }, []);

    useEffect(() => {
        window.addEventListener("storage", callback);
        window.addEventListener("localStorageUpdate", callback);

        return () => {
            window.removeEventListener("storage", callback);
            window.removeEventListener("localStorageUpdate", callback);
        };
    });

    if (code !== "React") {
        return null;
    }

    return children;
};
