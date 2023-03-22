
const OutputGewonnen = props => {
    const versuche = props.versuche;

    let image = versuche;
    if (versuche >= 4)
        image = 4;

    return (
        <div className="mt-5">
            <figure className="figure">
                <img src={`/images/image_${image}.png`} className="figure-img img-fluid rounded" alt="nice try..." />
                <figcaption className="figure-caption">
                    <div className="mt-3 alert alert-success" role="alert">
                        Du hast in <strong>{versuche} Versuchen</strong> gewonnen!
                    </div>
                </figcaption>
            </figure>
            <div className="mt-2">
                <button type="button" onClick={(evt) => props.resetGame()} className="btn btn-primary">Neues Spiel?</button>
            </div>
        </div>
    )
}

export default OutputGewonnen;