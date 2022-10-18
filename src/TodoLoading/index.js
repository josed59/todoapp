import React from "react";
import ContentLoader from "react-content-loader";
import './TodoLoading.css'

const MyLoader = () => (
    <div className="todoLoadingContainer">
        <ContentLoader
            speed={2}
            width={550}
            height={50}
            viewBox="0 5 550 50"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="5" y="15" rx="0" ry="0" width="50" height="50" /> 
            <rect x="60" y="15" rx="5" ry="5" width="480" height="100" /> 
        </ContentLoader>
    </div>
  
);

export {MyLoader};