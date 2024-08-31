export default function PopUp({ showPopUp, closePopUp, children }) {
    if (!showPopUp) { return null }
    return (
        <div className="PopUp bg-light" >
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={closePopUp}>close</button>
            </div>
            {children}
        </div>
    );
};