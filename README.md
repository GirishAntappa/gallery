# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import React, {useState, useEffect, useContext} from "react";
import { useCallback } from "react";

// guraCtbsgHeV62ntrJVhz__7ZMO6ZgTJrxfBYTh_HzY
// const URL = `https://api.unsplash.com/search/photos/?page=1&query=${searchTerm}&client_id=guraCtbsgHeV62ntrJVhz__7ZMO6ZgTJrxfBYTh_HzY`;

const AppContext =React.createContext();

const AppProvider = ({children})=> {
    const [searchTerm, setSearchTearm] = useState([]);
    const [images,setImages] = useState([]);
    const [loading, setLoading] = useState(true)
    const [resultTitle, setResultTitle] = useState("");
    const URL = `https://api.unsplash.com/search/photos/?page=5&query=${setSearchTearm}&client_id=guraCtbsgHeV62ntrJVhz__7ZMO6ZgTJrxfBYTh_HzY`;
    const fetchImages = useCallback(async()=>{
        setLoading(true);

        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const docs = data;
            console.log(docs);
            docs.images(item => {
                return <img key={item.id} src={item.urls.regular}/>
            })
        }
        catch(error){
            console.log(error);
            setLoading=false;
        }
    },(searchTerm));

    useEffect(()=>{
        fetchImages();
    },[searchTerm,fetchImages]);
    return(
        <AppContext.Provider value = {{
            loading, images,setSearchTearm,resultTitle,setResultTitle
        }}>
            {children}
            </AppContext.Provider>
    )
}

export const useGlobleContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider};

return <img className="item" key={item.id} src={item.urls.regular} alt={item.user.profile_image.large} />





<nav>
        <div className="mydiv">
          <span>Imagegallery</span>
          <input style={{width:"30%"}}
          type="text" 
          placeholder="search image" 
          value={value} 
          onChange={(e) => setvalue(e.target.value)}/>
          <button onClick={()=>{fetchImages()}}>send</button>
          <HiOutlineMenu/>
        </div>
      </nav>
      {!results ? (
        <h2>Loading........</h2>
      ) : (
      <div className="gallery">
        {
          results.map((item,index) =>{
            return <Image key={item.id} {...item}/>
          })
        }
      </div>
      )}


      .App{
  align-items: center;
}
.mydiv{
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 5px gray;
  margin: 10px 5%;
  padding: 8px;
}
.mydiv button {
  background-color: blue;
  color: white;
  font-size: 16px;
  padding: 6px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}
.gallery{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item{
  width: 20%;
  border-radius: 2rem;
  margin-top: 1rem;
}

