import React from "react"
import { gsap } from "gsap"


class FlipCard extends React.Component {

    render = () => {
        return (
        <div className="flipCard" id={this.props.id} tabIndex="0">
            <div className="flipCard__front">
                <p>{this.props.frontContent}</p>
            </div>
            <div className="flipCard__back">
                <p>{this.props.backContent}</p>
            </div>
        </div>
        );  
    }

    componentDidMount = () => {
        // - - - - Flipping card script - - - -
        const cardID = this.props.id;
        // Give the flip some three-dimnesionality
        gsap.defaultTransformPerspective = 1000;

        // Hide the back of the card until the card is flipped 
        gsap.set(".flipCard__back", {rotationY:-180});

        // Get this card
        var element = document.querySelector("#" + cardID);
        
        // Get front side and back side (animating the parent doesn't work)
        var frontCard = element.querySelector(".flipCard__front"),
            backCard = element.querySelector(".flipCard__back");

        // Create the animations (start them paused so nothing goes until the user clicks)
        var frontAni = gsap.to(frontCard,  {duration: 0.4, rotationY:-180, ease: "power1.inOut", paused: true}),
            backAni = gsap.to(backCard, {duration: 0.4, rotationY:-360, ease: "power1.inOut", paused: true});

        // Function to call on click of a card
        var onClick = function() {
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
        element.addEventListener("keydown", function(event) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                element.click();
            }
        });


        // - - - - - - - - - - - - - - - - - -
    }
            
}


export default FlipCard;