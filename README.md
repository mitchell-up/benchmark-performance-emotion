Benchmark Performance Emotion
There are various ways to style with Emotion, one of the prominent CSS in JS libraries. With the library supporting multiple methods, users have the freedom to choose the format they prefer to complete the styling of their projects.

However, it's worth reconsidering whether utilizing all provided methods arbitrarily is truly an effective approach. Due to the inherent limitation of processing CSS at runtime, CSS in JS continues to face performance-related issues. Recently, zero-runtime CSS solutions like StyleX or vanilla-extract have emerged to overcome these limitations.

Yet, if there are several reasons to continue using or maintaining Emotion, it's essential to ponder on the most effective way to write styles. Thus, in this project, we aim to measure the performance of various styling methods using Emotion through 1:1 comparisons and provide metrics to aid in selecting the better approach.

How to Run the Project
Access the deployed page or clone the project and run the following command to access:

bash
Copy code
npm run dev 
Measurement Method
The performance measurement of each component is done using React's <Profiler/> component.

Comparison Criteria
The comparison of component performance is based on the metric baseDuration, measured in milliseconds (ms).

Comparison Method
Pressing the "Measure" button renders the components once, measures each speed, and calculates the average for all attempts. It's better to understand the results based on the average obtained after pressing the button multiple times, rather than relying on a single performance metric.

Comparison Targets
Styled vs CssProp (Object)
Compare the performance between styled and cssProp when styling using the Object format.

Styled vs CssProp (Literal)
Compare the performance between styled and cssProp when styling using the Template Literal format.

Object vs Literal (CssProp)
Compare the performance between Object and Template Literal styling when applying cssProp.

Inside vs Outside
Compare the performance between declaring styles within the component and declaring them outside and importing them.

Separate vs ClassName
Compare the performance between using separate cssProps for each element and combining a single cssProp with className.

Dynamic vs ClassName
Compare the performance between passing dynamic values through cssProp and passing pre-styled className when needing to handle dynamic values from the user.

Theme vs Constants
Compare the performance between using Emotion's ThemeProvider for styling with themes and using JavaScript constants with CSS Variables.

Support
If you encounter any issues or need assistance, please contact via the following email:

Author: mitchell-up
Email: kim3603di@gmail.com