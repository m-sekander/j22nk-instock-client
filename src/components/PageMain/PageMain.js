import "./PageMain.scss";

// Component that contains main page styling
// Pass in your component as a prop of this component named content
// Go to App.js warehouses/add route to see an example

function PageMain({content}) {
    return (
        <main className="page-main">
            <div className="page-main__container">
                {content}
            </div>
        </main>
    );
};

export default PageMain;