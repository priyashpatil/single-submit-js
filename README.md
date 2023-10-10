# Single Submit

The Single Submit JavaScript library offers a convenient solution for enhancing button functionality in server-side
applications. When dealing with scenarios like file uploads or form submissions, waiting for a server response can be
time-consuming. By integrating the Single Submit JS library, you can improve the user experience by displaying a
processing indicator and preventing duplicate submissions until a response is received from the server. This leads to a
smoother and more efficient interaction between the user and the application.

<p align="center">
  <img src="marketing/single-submit.gif" alt="Single Submit Example">
</p>

## Features

- [x] Supports native HTML form validation.
- [x] Independent of any CSS framework.
- [x] Compact file size of less than 1KB.
- [x] Quick setup with CDN link.
- [x] Recently added: Additional process indicators.

## Quick Start

To start using Single Submit JS, include the following CDN script tag in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/priyashpatil/single-submit-js@1.0.1/dist/single-submit.min.js"
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

After adding the script to your page, you have two options for implementing the Single Submit JS functionality:

1. Form Submission:

   Add the `data-ss-type="single-submit-form"` attribute to your form and optionally include the `data-loading-text`
   attribute to specify the text displayed during processing. Here's an example:

   ```html
   <form method="post" data-ss-type="single-submit-form">
       <!-- Your form fields here -->
       <button type="submit">Submit</button>
   </form>
   ```

2. Button Submission:

   If you prefer to apply Single Submit JS to a single button instead of an entire form, add
   the `data-ss-type="single-submit-button"` attribute to the button element. Additionally, include
   the `data-loading-text` attribute to specify the processing text. For instance:

   ```html
   <button data-ss-type="single-submit-button" data-loading-text="Loading...">Click Me</button>
   ```

### Changing the Indicator

There are two available indicators out of the box: `spinner-border-single-submit` and `spinner-grow-single-submit`. By
default, `spinner-border-single-submit` is used. You can switch to the grow-shrink indication by adding
the `data-ss-indicator` attribute to the form or button. For example:

```html
<button data-ss-type="single-submit-button" data-ss-indicator="spinner-grow-single-submit">Click Me</button>
```

By utilizing Single Submit JS using either of the above methods, you can enhance the user experience during server-side
operations by providing visual feedback and preventing duplicate submissions.