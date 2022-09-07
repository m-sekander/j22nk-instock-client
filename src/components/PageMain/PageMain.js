import "./PageMain.scss";

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