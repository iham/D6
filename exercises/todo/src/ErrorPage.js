import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops</h1>
            <p>Ein Fehler ist aufgetreten!</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
}