import "./NotFound.scss";

function NotFound() {
    return (
        <section className="not-found">
            <h1 className="not-found__title">404 Not Found</h1>
            <p className="not-found__description">Oops...looks like the page you're trying to access doesn't exist yet.</p>
        </section>
    );
}

export default NotFound;