### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The React router is used for client-side routing, to enable us to render components based on changes in the URL without making server-side requests or reloading the entire page.

- What is a single page application?
  A single page application has only one HTML file and uses client-side routing to determine which "view" of a website should be rendered based on changes to the URL.

- What are some differences between client side and server side routing?
  In server-side routing, changing a URL causes a request to be made to the server, which then determines what HTML should be sent to the browser based on changes to the URL. The entire page refreshes when a request is made to the server. In client-side routing, on the other hand, URL changes don't trigger a request to the server. Instead, the route is handled by JS that has been loaded as part of the application. When the URL changes, this JS effects a change in the webpage without the need for refreshing the page or re-rendering previously loaded components.

- What are two ways of handling redirects with React Router? When would you use each?

- What are two different ways to handle page-not-found user experiences using React Router?

- How do you grab URL parameters from within a component using React Router?
  This is accomplished by employing the useParams hook.

- What is context in React? When would you use it?
  Context is a way of providing access to a piece of data to many components without passing it as props. This is especially useful in complex component hierarchies, where a parent component is managing a piece of state that will be needed by a child component more than one level below itself in the hierarchy. Without context, passing such a piece of state would require us to use prop drilling, i.e., passing in the piece of state as a prop to each child in the hierarchy, whether that child needed access to the piece of state or not.

- Describe some differences between class-based components and function
  components in React.

- What are some of the problems that hooks were designed to solve?
