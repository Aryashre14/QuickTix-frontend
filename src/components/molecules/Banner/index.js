import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { RiFolderInfoFill } from "react-icons/ri";
import { motion } from "framer-motion";
import bannerImg from '../../../assets/banerImg.png'
import { TypeAnimation } from 'react-type-animation';
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-semibold text-center mb-0 translate-y-[100%] sm:translate-y-[-0%] text-primary md:text-left">QuickTix  </h1>
        <div className="my-4 translate-y-[250%] sm:translate-y-[-0%]">
          <TypeAnimation
            className="text-2xl text-primary font-serif font-bold text-center  sm:text-2xl sm:mb-2 md:text-left"
            cursor={true}
            sequence={[
              "Ed Sheeran Concert",
              2000,
              "Gillette Stadium",
              2000,
              "Sept 22, 2023, 19:00 GMT",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-primary text-center max-w-xl mb-6 font-medium translate-y-[60%] sm:translate-y-[-0%] md:text-left">
        We're thrilled to announce an electrifying evening ahead as we prepare to welcome the one and only Ed Sheeran to the stage! 🎶🎤. </p>
        <p className="text-primary text-center max-w-xl mb-6 font-medium translate-y-[60%] sm:translate-y-[-0%] md:text-left">
        Get ready to be swept away by the melodious tunes and captivating performance of Ed Sheeran. This is your chance to immerse yourself in an unforgettable night filled with soulful lyrics and heartwarming melodies.     </p>

        <div className="grid justify-center sm:flex  sm:justify-start translate-y-[50%] sm:translate-y-[-0%]">
          <Link to="/dashboard" className="primary-button">
            <span>Buy Ticket</span>
            <span>
              <HiShoppingCart />
            </span>
          </Link>

          <Link to="/event" className="ml-4 py-8 sm:py-0">
            <SecondaryBtn>
              <span>Big Event</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0 ml-40 ">
          <img src={bannerImg} alt="Banner TiKons"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
