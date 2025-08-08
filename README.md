# Card Form

<img src="public/screenshots/Screenshot 2025-08-08 at 16-14-50 Card Form.png" alt="">

# Welcome

Thanks for checking out my project

This is an interactive card details form.

Users should be able to:

* Fill in the form and see the card details update in real-time.
* Receive error messages when the form is submitted if:
  * Any input field is empty
  * The card number, expiry date or CVC fields are in the wrong format.
* View the optimal layout depending on their device's screen size.
* See hover, active and focus states for interactive elements on the page.

## Build

Project was carried out using React + Vite. First point of focus was the structure, keeping in mind that the page must be responsive.

Styling kicked-off with setting the margin and padding to 0 and box-sizing to border box to have full control of height and weight of elements of the page.

Body is divided into 2 parts with two distinct colours, the cards were positioned in the first part while the form was positioned in the second. Cards were positioned according to design using the transform-translate property with required values to recreate the design. Flex used to arrange elements where necessary and media queries ensured responsiveness. Inspect and responsive mode on the browser where applied to aid responsiveness and a browser extension called Mobile simulator also helped to preview screen on mobile.

<img src="public/screenshots/Screenshot 2025-08-08 at 16-16-51 .png" alt="">

<img src="public/screenshots/Screenshot 2025-08-08 at 16-17-18 .png" alt="">

<img src="public/screenshots/Screenshot 2025-08-08 at 16-18-02 .png" alt="">


## Issues:

Using JavaSript in a different repo worked completely but the react and vite posed a challenge I couldn't complete. The error messages are not appearing in real-time and the completed state UI doesn't render after submitting the form. Help is welcomed.