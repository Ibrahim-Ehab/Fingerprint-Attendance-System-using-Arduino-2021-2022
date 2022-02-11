
function PopUpWindow({setOpen}) {

    return  (
        <div className="popup-window">
            <div className="popup-box">
                <button className="close-icon" onClick={() => setOpen(false)}><i class="fas fa-times"></i></button>
                <iframe className="Video-Size" width="560" height="315" src="https://www.youtube.com/embed/F9GNXzQlkUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default PopUpWindow;