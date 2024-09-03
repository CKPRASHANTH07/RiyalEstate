import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import image from '../assets/handbuild.jpg';
import search from '../assets/search.jpg';
import mission from '../assets/mission.jpg';

export default function About() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className='bg-white'>
      {/* top */}
      <section className="pt-2 bg-gradient-to-t from-blue-200 to-red-500">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
           
            <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold my-5 leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Our Mission & Vision</h2>
                <p className="text-xl leading-relaxed text-white mt-2 mb-8">Our mission is simple: to simplify real estate transactions and make property searches accessible, transparent, and efficient for everyone. Riyal Estate is designed to cater to all your real estate needs with ease and confidence</p>
                <p className="text-xl leading-relaxed text-black mt-2">We envision a future where property transactions are streamlined and hassle-free, backed by technology and expert guidance. Riyal Estate aims to be the go-to platform for anyone looking to navigate the real estate market</p>
                 </div>
            <div className="relative lg:mb-12 pt-32">
                <div className="pl-12 pr-6">
                    <img className="relative rounded-2xl py-10" src={mission} alt="" />
                </div>
            </div>
        </div>
    </div>
</section>
<section className="py-10 bg-gradient-to-b from-blue-200 to-yellow-200 text-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
                <div className="pl-12 pr-6">
                    <img className="relative rounded-2xl" src={image} alt="" />
                </div>
                
            </div>

            <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Comprehensive Property Listings</h2>
                <p className="text-xl leading-relaxed text-gray-900 mt-9">Riyal Estate offers an extensive range of property listings that cater to various needs, preferences, and budgets. From cozy apartments to luxurious villas and commercial spaces, our platform provides detailed information, high-quality images, and virtual tours to help you explore your options thoroughly.</p>
            </div>
        </div>
    </div>
</section>
<section className="py-10 bg-gradient-to-b from-yellow-200 to-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Personalized Search Experience</h2>
                <p className="text-xl leading-relaxed text-gray-900 mt-9">Our advanced search filters and recommendation engine are designed to provide a personalized experience. Whether you’re looking for a property in a specific neighborhood or need features like a garden, parking, or proximity to schools, Riyal Estate lets you tailor your search to find the perfect match.</p>
            </div>
            <div className="relative lg:mb-12">
                <div className="pl-12 pr-6">
                    <img className="relative rounded-2xl" src={search} alt="" />
                </div>
                
            </div>
        </div>
    </div>
</section>



      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: 'cover',
                }}
                className='h-[500px]'
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}