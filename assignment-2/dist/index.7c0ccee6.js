const heading = React.createElement("h1", {
    id: "heading"
}, "Namaste React");
const title = React.createElement("h2", {
    id: "title"
}, "React element is nothing just an Object");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    title
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
