import React from 'react';
import './Page.module.sass';

const Page = ({ children }) => (
  <div className="page">
    {children}
  </div>
);

export default Page;