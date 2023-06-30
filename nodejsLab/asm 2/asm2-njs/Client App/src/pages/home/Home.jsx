import Navbar from "../../component/navbar/navbar";
import ImgCity from "../../component/hotel/imgCity";
import ImgHotel from "../../component/hotel/imgHotel";
import ImgHotelList from "../../component/hotel/imgHotelList";
import Form from "../../component/form/form";
import Footer from "../../component/footer/footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <ImgCity />
      <ImgHotel />
      <ImgHotelList />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
