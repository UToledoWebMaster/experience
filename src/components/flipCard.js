import React from "react"
import { gsap } from "gsap"
import "./css/flipCard.css"


class FlipCard extends React.Component {

    render() {
        return (
            <div className="flipCard" id="flipCard0" tabIndex="0">
                <div className="flipCard__front">
                    <p>{this.props.frontContent}</p>
                </div>
                <div className="flipCard__back">
                    <p>{this.props.backContent}</p>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // Get the card element (it really just gets the first one it finds that hasn't been given a unique ID yet)
        const element = document.querySelector("#flipCard0");

        // Create a unique ID for the flip card by iterating through possible IDs
        for (var i = 0; i < 100; i++) {
            const possibleID = "flipCard" + i;
            // If a flip card with this ID doesn't already exist...
            if (document.querySelector("#" + possibleID) === null) {
                //... assign this ID to this flip card
                element.id = possibleID;
                break;
            }
        }

        // Get front side and back side (animating the parent doesn't work)
        const frontCard = element.querySelector(".flipCard__front"),
            backCard = element.querySelector(".flipCard__back");

        // Give the flip some three-dimnesionality
        gsap.set(frontCard, { transformPerspective: 1000 });
        gsap.set(backCard, { transformPerspective: 1000 });

        // Hide the back of the card until the card is flipped
        gsap.set(backCard, { rotationY: -180 });

        // Create the animations (start them paused so nothing goes until the user clicks)
        const frontAni = gsap.to(frontCard, { duration: 0.4, rotationY: -180, ease: "power1.inOut", paused: true }),
            backAni = gsap.to(backCard, { duration: 0.4, rotationY: -360, ease: "power1.inOut", paused: true });

        // Function to call on click of a card
        const onClick = function () {
            // First play of the animation
            if (frontAni.paused()) {
                frontAni.resume();
                backAni.resume();
                return;
            }
            // Every other play of the animation, check for which direction to play in
            if (frontAni.reversed()) {
                frontAni.play();
                backAni.play();
            } else {
                frontAni.reverse();
                backAni.reverse();
            }
        }
        // Attach event handler
        element.addEventListener("click", onClick);

        // Also trigger card flip when enter key is pressed
        element.addEventListener("keydown", function (event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                element.click();
            }
        });
    }
}


export default FlipCard;