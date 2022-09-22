import FeedBubble from "./feed-bubble";

import './index.css';

function Feed() {
    return (
        <div>
            <h3>Feed</h3>
            <div className="feed-gap">
                <FeedBubble header="Interview CEO" body="‘For founders, by founders’, he said. Today I am interviewing Floris van Hoogenhuyze on how ... " />
                <FeedBubble header="Hackathon with Codam" body="This week we are hosting a hackathon in our WE.VESTR office in Amsterdam. Sign up for  ..."/>
                <FeedBubble header="In-depth explanation new Release" body="We asked our amazing developer Kirill to explain the added value of the new feature    ..."/>
                <FeedBubble header="TNW 2022 Takeaways" body="The pending economic slowdown was the talk of TNW Conference this year, and we’ve got ..."/>
                <FeedBubble header="Hackathon with Codam" body="This week we are hosting a hackathon in our WE.VESTR office in Amsterdam. Sign up for  ..."/>
            </div>
        </div>
    );
}

export default Feed;