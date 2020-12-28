export default function (lang) {
    let language = lang.toLowerCase();

    switch (language) {
        case "html":
            return "orangeForHtml"
        case "jupyter notebook":
            return "orange"
        case "javascript":
            return "warning"
        case "python":
        case "css":
            return "primary"
        case "scss":
            return "pink"
        default:
            return "gray-dark"
    }
}
