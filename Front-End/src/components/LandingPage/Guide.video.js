import Video from '../img/Video.jpg'

function VideoPlay({setOpen}) {
    
    return (
        <div className="D1 Video-Container" id="Video">
            <div className="I1-Icon">
            <img src={Video} style={{ width: "748px", height: "499px" }}/>
            </div>
            <div>
                <h2>
                The Best Business Solutions Guide for You
                </h2>
                <button onClick={() => setOpen(true)}><i class="fas fa-play-circle"></i>Play Demo</button>
            </div>
        </div>
    )
}

export default VideoPlay