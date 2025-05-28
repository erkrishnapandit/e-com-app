import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';

const About = ()=>{
    return (
        <div>
            <div className='text-2xl text-center border-t border-gray-300 pt-8'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>
            <div className='flex flex-col md:flex-row gap-15'>
                <img className='w-full md:max-w-[450px] border border-gray-200 ' src={assets.about_icon} alt="" />
                <div className='flex flex-col gap-5 justify-center md:w-2/4 text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure mollitia impedit sint excepturi animi similique, rerum veniam inventore soluta quas earum, non saepe optio dolorum labore aspernatur tenetur nisi reiciendis at assumenda aut, fuga placeat? Quod repudiandae consequuntur quasi accusantium ab dolorem porro neque numquam et at? Nesciunt tempore dolorem sed cupiditate eaque, odio nulla dolore mollitia, consectetur, quo soluta excepturi sint officiis aut aliquam! Dolores, modi. At commodi nihil tenetur eos debitis consequuntur aliquid. Quod omnis sapiente pariatur, quo minima ex. Qui cumque aut maxime sequi possimus. Reiciendis, culpa. Dicta perspiciatis officiis dignissimos repellendus dolorum soluta similique eum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, consectetur eius provident eligendi repellat cumque eveniet ullam, asperiores dignissimos deleniti quisquam eaque consequatur reiciendis quod, ex itaque molestias? Magni ex deserunt ut vitae dignissimos! Quod, beatae! Deleniti, illum et, quos vero, explicabo deserunt magnam excepturi porro ratione nemo dolorum placeat accusantium obcaecati repellat voluptates cumque consequuntur mollitia reprehenderit quis. Veritatis!</p>
                    <b>Our Mission</b>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quia culpa? Aut ex illo blanditiis ab inventore consequuntur exercitationem autem alias officia quae laudantium explicabo expedita laborum suscipit veritatis officiis, velit totam pariatur ipsum veniam.</p>
                </div>
            </div>

            <div className='text-2xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
            </div>

            <div className='flex flex-col md:flex-row gap-5 text-sm mb-10'>
                <div className='flex flex-col gap-5 text-center border border-gray-300 px-10 py-8 md:px-15 md:py-20'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aperiam dolore facere. Quaerat eos, perferendis sit, vero quas quis dolore eligendi recusandae ipsum consectetur omnis culpa sint. Qui, mollitia quasi.</p>
                </div>

                <div className='flex flex-col gap-5 text-center border border-gray-300 px-10 py-8 md:px-15 md:py-20'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque rerum omnis minus odit asperiores? Nihil error deleniti voluptatibus eos eveniet eius fuga odit fugit provident explicabo, in sed ducimus?</p>
                </div>

                <div className='flex flex-col gap-5 text-center border border-gray-300 px-10 py-8 md:px-15 md:py-20'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eaque rerum omnis minus odit asperiores? Nihil error deleniti voluptatibus eos eveniet eius fuga odit fugit provident explicabo, in sed ducimus?</p>
                </div>
            </div>
            <NewsLetter/>
        </div>
    )
}

export default About;
