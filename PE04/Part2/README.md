# Input
The app takes user input in the form of the TouchableHighlight. When pressed,
the showThumbnail boolean is toggled.

# Process
When the showThumbnail boolean is toggled, the component's state is modified to 
reflect the changes. This is possible through the immutability-helper library.
When a card is pressed, handleProfileCardPress toggles the boolean and sets the
new state, which updates the UI to show the newly resized card.

# Output
The app shows 6 profile cards. Each one is wrapped by a TouchableHighlight that
spans 40% height and 30% width in order to show all 6 cards (3 rows, 2 columns).
Each TouchableHighlight contains a View representing the card. This view is 
what changes from 20% scale to full size when the card is pressed, using the
two styles cardContainer and cardThumbnail. Inside this view is the profile card
itself. First is a view wrapping an image element, followed by a view wrapping 
a text element for the person's name, a view wrapping a text element for the 
person's occupation, and finally a view wrapping a text element for the person's
description.