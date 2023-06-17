const head = React.createElement("div",{id:"head", abc:"react"},[
    React.createElement("div",{id:"child", child:"chilsn"},[
        React.createElement("h1",{id:"head1", abc:"react"},"Hello world by h1" ),
        React.createElement("h2",{id:"head2", abc:"react"},"Hello world by h2" )
    ]),
    React.createElement("div",{id:"child", child:"chilsn"},[
        React.createElement("h1",{id:"head1", abc:"react"},"Hello world by h1" ),
        React.createElement("h2",{id:"head2", abc:"react"},"Hello world by h2" )
    ])
]);

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(head);