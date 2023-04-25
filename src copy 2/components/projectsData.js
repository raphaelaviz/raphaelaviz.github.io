
import tradingJournal from "../assets/tradingJournal.png";
import cytThumbNail from "../assets/cytThumbNail.png";
import shoppingCart from "../assets/shoppingCart.png";
import pagination from "../assets/pagination.png";



const projectsData = [
    {
        title: 'Point-and-Click Game',
        image: cytThumbNail,
        description: (
            <>
              <p style={{ marginBottom: '16px' }}>
              C.Y.T is a demo point-and-click game fully developed in React, without the use of any third-party library. 
               The game features an item/inventory system, sound effects, dialogues and cool artwork.
              </p>
              <p>
              <strong>Concepts involved</strong>: JavaScript ES6 syntax, React hooks, 
              CSS animations, destructuring, higher-order functions, conditional rendering,
              event handling, many different array methods, and one or two <strong><em>somewhat</em></strong> clever algos written by me.
                {/* This is the second paragraph of the description. You can also include{' '}
                <strong>bold text</strong>, <em>italicized text</em>, and <u>underlined text</u> within
                the paragraphs. */}
              </p>
            </>
          ),
        linkGithub: 'https://github.com/rapharrrr/c.y.t',
        linkVideo: 'lllalalla'
    },
    {
        title: 'Shopping Cart App',
        image: shoppingCart,
        description: (
          <>
            <p style={{ marginBottom: '16px' }}>
            A shopping cart app that displays a list of products that can be added and removed from the cart.
            The app also includes six fully functional filters that condition which products are displayed, and
            a cart page that shows the order summary.
            </p>
            <p>
            <strong>Concepts involved</strong>: Context API + useReducer combo for state managament,
            ES6 syntax, React hooks, destructuring, conditional rendering, routes and more.
            </p>
            <p>
            <strong>Libraries</strong>: React Router, React Bootstrap and Faker.
            </p>
          </>
        ),
        linkGithub: 'lalalalla',
        linkVideo: 'lllalalla'
    },
    {
        title: 'Trading Journal Dashboard',
        image: tradingJournal,
        description: (
          <>
            <p style={{ marginBottom: '16px' }}>
            A trading journal with a form to add entries to the trades table, 
            a chart to track trading history, a calendar to monitor economic events, 
            and a kanban tool for notes. Fully styled with Tailwind CSS. This is an ongoing project.
            </p>
            <p>
            <strong>Concepts involved</strong>: Tailwind CSS, Context API, ES6 syntax, React hooks, 
            routes, conditional rendering and more.
            </p>
            <p>
            <strong>Libraries</strong>: React Router, React Table, Recharts and Syncfusion.
            </p>
          </>
        ),
        linkGithub: 'lalalalla',
        linkVideo: 'lllalalla'
    },
    {
        title: 'Pagination Exercise',
        image: pagination,
        description: (
          <>
            <p style={{ marginBottom: '16px' }}>
            This is a simple pagination system exercise that includes an API call using Fetch API. 
            It displays a list of products divided into chunks of 10 at a time, 
            which can be controlled by the pagination buttons below.
            </p>
            <p>
            <strong>Concepts involved</strong>: JavaScript ES6 syntax, React hooks, 
            Fetch API, async/await and conditional rendering.
            </p>
          </>
        ),
        linkGithub: 'lalalalla',
        linkVideo: 'lllalalla'
    },
]

export default projectsData;