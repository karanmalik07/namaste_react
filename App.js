const parent = React.createElement(
    "div", 
    {id : "parent"}, 
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement(
            "h1",
            {},
            "nested loop"
        ),
        React.createElement(
            "h2",
            {},
            "nested loop2"
        )]
    )        
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);