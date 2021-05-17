### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The React router is used for client-side routing, to enable us to render components based on changes in the URL without making server-side requests or reloading the entire page.

- What is a single page application?
  A single page application has only one HTML file and uses client-side routing to determine which "view" of a website should be rendered based on changes to the URL.

- What are some differences between client side and server side routing?
  In server-side routing, changing a URL causes a request to be made to the server, which then determines what HTML should be sent to the browser based on changes to the URL. The entire page refreshes when a request is made to the server. In client-side routing, on the other hand, URL changes don't trigger a request to the server. Instead, the route is handled by JS that has been loaded as part of the application. When the URL changes, this JS effects a change in the webpage without the need for refreshing the page or re-rendering previously loaded components.

- What are two ways of handling redirects with React Router? When would you use each?
  Redirects can either be done by using the useHistory hook or the Redirect component. The Redirect component is typically used in cases where a user shouldn't be going to a page, either because of authorization or because the page does not exist. The useHistory hook is used when a user action is completed, like submitting a form.

- What are two different ways to handle page-not-found user experiences using React Router?
  These can be handled either by using a Redirect component, usually to take the user back to a page that does exist higher up in the hierarchy (i.e., if the user tried to go to "foods/nope", they would be redirected to "/foods"), or by including a 404 page using a NotFound component.

- How do you grab URL parameters from within a component using React Router?
  This is accomplished by employing the useParams hook.

- What is context in React? When would you use it?
  Context is a way of providing access to a piece of data to many components without passing it as props. This is especially useful in complex component hierarchies, where a parent component is managing a piece of state that will be needed by a child component more than one level below itself in the hierarchy. Without context, passing such a piece of state would require us to use prop drilling, i.e., passing in the piece of state as a prop to each child in the hierarchy, whether that child needed access to the piece of state or not.

- Describe some differences between class-based components and function
  components in React.
  In class-based components, state is defined in a component's constructor and there is only one state object which is updated with the setState instance method. In contrast, with functional components, there is a lot more flexibility. You can define multiple pieces of state, functions that can be passed to other components as props, custom hooks for commonly used logic, and because of closure, inner functions can "remember" variables defined in outer functions after the outer function has returned.

- What are some of the problems that hooks were designed to solve?
  Hooks enable us to write fewer lines of code than classes for the same component and get around the potential issues caused by having to use this and to method bind our functions in the constructor. Hooks also eliminate the need to use the methods that make up the component lifestyle, resulting in more flexible code with less repeated lines and logic that can also be more easily shared with other components. Though React tried to solve these problems in previous iterations by using mixins, this resulted in snowballing complexity, implicit dependencies that made debugging difficult, and issues with naming conventions due to the need for the same names for mixin items to be used across components. The React team's next attempt to solve these problems involved using higher order functions, but they were not very customizable once defined, could quickly get confusing and precarious in terms of logic, and were difficult to debug. They also tried using render props, but the syntax was tricky and led to similar challenges.
