import { useState, useEffect } from 'react';
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import requests from '../../utils/requests';
import './home.css';

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setUser(userData);
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <Header user={user} />
      <div className="homeContainer">
        <Featured fetchUrl={requests.fetchCity} />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList fetchUrl={requests.fetchPropType} />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties fetchUrl={requests.fetchTopRate} />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
