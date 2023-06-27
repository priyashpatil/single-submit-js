The Single Submit JS library provides a convenient solution for improving button functionality in server-side
applications. When performing tasks such as file uploads or processing form submissions, it can often take a while to
receive a response from the server. By incorporating Single Submit JS, you can enhance the user experience by displaying
processing indicator and preventing duplicate submissions until a response is received from the server. This results in
a smoother and more efficient interaction between the user and the application.

> Limitation: only supports Bootstrap 5.

## Usage

To get started, you can install Single Submit JS by including the following CDN script tag in your HTML:

```html
<script src="https://cdn.priyashpatil.studio/products/single-submit/releases/single-submit-1.0.0-alpha-1.min.js"
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

After adding the script to your page, you have two options for applying Single Submit JS functionality:

1. Form Submission:

   Add the CSS class `form-single-submit` to your form and include the `data-loading-text` attribute to specify the text
   that will be displayed during processing. For example:

   ```html
   <form method="post" class="form-single-submit" data-loading-text="Submitting...">
       <!-- Your form fields here -->
       <button type="submit">Submit</button>
   </form>
   ```

2. Button Submission:

   If you prefer to apply Single Submit JS to a single button instead of an entire form, add the CSS
   classes `btn-single-submit`. Also, include the `data-loading-text` attribute to specify the processing text. For
   example:

   ```html
   <button class="btn-single-submit" data-loading-text="Loading...">Click Me</button>
   ```

By using Single Submit JS in either of the above ways, you can improve the user experience during server-side operations
by providing visual feedback and preventing duplicate submissions.