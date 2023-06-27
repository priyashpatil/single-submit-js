# Single Submit

The Single Submit JavaScript library offers a convenient solution for improving button functionality in server-side applications. In scenarios such as file uploads or form submissions, waiting for a server response can be time-consuming. By incorporating Single Submit JS, you can enhance the user experience by displaying a processing indicator and preventing duplicate submissions until a response is received from the server. This results in a smoother and more efficient interaction between the user and the application.

<div style="text-align: center"><img src="marketing/single-submit.gif" alt="Single Submit Example"></div>

## Features

- [x] Provides support for native HTML form validation.
- [x] No reliance on any CSS framework.
- [x] Compact file size of less than 1KB.
- [x] Quick setup with CDN link.
- [ ] Upcoming feature: Additional process indicators.
- [ ] Upcoming feature: Customization support for process indicators.

## Quick Start

To begin using Single Submit JS, you can install it by including the following CDN script tag in your HTML:

```html
<script src="https://cdn.priyashpatil.studio/products/single-submit/releases/single-submit-1.0.0-alpha_2.min.js"
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

After adding the script to your page, you have two options for applying the Single Submit JS functionality:

1. Form Submission:

   Add the attribute `data-ss-type="single-submit-form"` to your form and optionally include
   the `data-loading-text` attribute to specify the text that will be displayed during processing. Here's an example:

   ```html
   <form method="post" data-ss-type="single-submit-form">
       <!-- Your form fields here -->
       <button type="submit">Submit</button>
   </form>
   ```

2. Button Submission:

   If you prefer to apply Single Submit JS to a single button instead of an entire form, add the attribute `data-ss-type="single-submit-button"` to the button element. Additionally, include the `data-loading-text` attribute to specify the processing text. For instance:

   ```html
   <button data-ss-type="single-submit-button" data-loading-text="Loading...">Click Me</button>
   ```

By utilizing Single Submit JS in either of the above ways, you can enhance the user experience during server-side operations by providing visual feedback and preventing duplicate submissions.