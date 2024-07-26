import React from 'react';
import { motion } from 'framer-motion';
import { useRouteError , Link } from 'react-router-dom';


const Error = () => {
    const err = useRouteError();
    console.log(err)


  return (
    <div className="container">
      <motion.div
        className="error-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotateY: 360 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="error-code">{err.status}</h1>
        <p className="error-message">{err.data}</p>
        <button type="btn"><Link to="/">Go to Home Page</Link></button>
      </motion.div>
    </div>
  );
};

export default Error;
