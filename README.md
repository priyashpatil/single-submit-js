**Simplified Form Submission Handling**

The Single Submit JavaScript library simplifies the handling of form submissions in server-side applications. In
scenarios involving actions like file uploads or form submissions, waiting for server responses can be time-consuming.
By integrating the Single Submit JS library, you can enhance user experiences by displaying a processing indicator and
preventing duplicate submissions until a response is received. This results in a smoother and more efficient interaction
between users and the application.

![Single Submit Example](marketing/single-submit.gif)

**Key Features**

- Supports native HTML form validation.
- Works independently of any CSS framework.
- Compact file size of less than 1KB.
- Quick setup with a CDN link.
- Recently added: Additional processing indicators.

**Getting Started**

To start using Single Submit JS, simply include the following CDN script tag in your HTML:

```html

<script src="https://cdn.jsdelivr.net/gh/priyashpatil/single-submit-js@1.0.1/dist/single-submit.min.js"
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

After adding the script to your page, you have two options for implementing Single Submit JS functionality:

**1. Form Submission:**

Add the `data-ss-type="single-submit-form"` attribute to your form and optionally include the `data-loading-text`
attribute to specify the text displayed during processing. Here's an example:

```html

<form method="post" data-ss-type="single-submit-form">
    <!-- Your form fields here -->
    <button type="submit">Submit</button>
</form>
```

**2. Button Submission:**

If you prefer to apply Single Submit JS to a single button instead of an entire form, add
the `data-ss-type="single-submit-button"` attribute to the button element. Additionally, include the `data-loading-text`
attribute to specify the processing text. For instance:

```html

<button data-ss-type="single-submit-button" data-loading-text="Loading...">Click Me</button>
```

**Customize the Indicator**

Out of the box, there are two available indicators: `spinner-border-single-submit` and `spinner-grow-single-submit`. By
default, `spinner-border-single-submit` is used. You can switch to the grow-shrink indication by adding
the `data-ss-indicator` attribute to the form or button. For example:

```html

<button data-ss-type="single-submit-button" data-ss-indicator="spinner-grow-single-submit">Click Me</button>
```

By utilizing Single Submit JS through either of the above methods, you can enhance the user experience during
server-side operations by providing visual feedback and preventing duplicate submissions.