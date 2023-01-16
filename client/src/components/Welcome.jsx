import React from 'react';
import {  SiEthereum} from "react-icons/si";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

import Loader from './Loader';

const Welcome = () => {

  const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  const connectWallet = () => {

  }

  return (
   <div className='flex w-full justify-center items-center'>
    <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4  '>
      <div className='flex flex-1 justify-start flex-col md:mr-10 '>
        <h1 className='text-white text-3xl sm:text-5xl text-gradient py-1'>
          Send Crypto <br/> Around the Globe
        </h1>
        <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
          Explore the Crypto World. Buy and Sell Coins easily on Hermes.
        </p>
        <button type='button' 
        onClick={connectWallet}
        className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-[30px] cursor-pointer hover:bg-[#2546bd] '>
          <p className='text-white text-base font-semibold'>
            Connect Wallet</p>
          </button>

          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-l-2xl ${commonStyles}`}>
              Reliable
            </div>

            <div className={`${commonStyles}`}>
              Secure
            </div>

            <div className={`rounded-r-2xl ${commonStyles}`}>
              Low Fees
            </div>
          </div>
      </div>

      <div className='flex flex-col flex-1 items-center justify-center w-full md:mt-0 mt-10'>
        <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'></div>
      </div>

    </div>
   </div>
  )
}

export default Welcome