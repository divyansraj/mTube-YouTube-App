import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import Watchpage from './components/WatchPage,';
import SearchPage from './components/SearchPage';
function App() {

  const appLayout = createBrowserRouter([
		{
			path: "/",
			element: <Body />,
			children: [
				{
					path: "/",
					element: <VideoContainer />,
				},
				{
					path: "watch",
					element: <Watchpage />,
				},
				{
					path:"search",
					element:<SearchPage/>
				}
			],
		},
	]);
  return (
    <Provider store={store}>
      <RouterProvider router={appLayout}/>
    </Provider>
    
  );
}

export default App;
