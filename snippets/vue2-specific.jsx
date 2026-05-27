export const Vue2Specific = ({ children }) => {
    const [code, setCode] = useState(() => {
        if (typeof window === "undefined") {
            return null;
        }
        return localStorage.getItem("code")?.replace(/"/g, "") || null;
    });

    useEffect(() => {
        const handler = (event) => {
            if (event.detail?.key === "code") {
                setCode(event.detail.value?.replace(/"/g, ""));
            }
        };

        window.addEventListener("localStorageUpdate", handler);
        return () => window.removeEventListener("localStorageUpdate", handler);
    }, []);

    if (code !== "Vue 2") {
        return null;
    }

    return children;
};
