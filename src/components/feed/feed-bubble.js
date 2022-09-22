function FeedBubble(props) {
    return (
        <div className="rounded-div">   
            <p className="header-text">{props.header}</p>
            <p>{props.body}</p>
        </div>
    );
}

export default FeedBubble;