import { About } from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export {
    About,
    Contact,
    Experiences,
    Footer,
    Main,
    Navbar,
    Projects
}

export const navLinks = [
    {
        title: 'Home',
        id: 1
    },
    {
        title: 'About',
        id: 2
    },
    {
        title: 'Experiences',
        id: 3
    },
    {
        title: 'Projects',
        id: 4
    },
    {
        title: 'Contact',
        id: 5
    },
];

export const projects = [
    {
        name: 'Nike App!',
        id:1,
        paragraph: 'Design is belongs to JavaScript Mastery on Youtube but the whole designing code belongs to me. I used the assets file and index.js file to bring the project`s pngs, icons, lists. Modern looking Nike website!',
        url: '/assets/project2.png',
        urlgit: "https://github.com/34atmaca18/nikeApp",
        livedemo: "https://nikeappaydo.netlify.app"
    },
    {
        name: 'Cryptosan!',
        id:2,
        paragraph: 'I built a cryptocurrency tracking platform using React,Tailwind CSS that displays real-time data from the CoinGecko API. Users can view current prices, market caps, and other details for various cryptocurrencies in a simple, user-friendly interface.',
        url: '/assets/project3.png',
        urlgit: "https://github.com/aydoganuyanikoglu/cryptosan",
        livedemo: "https://cryptosann.netlify.app"
    },
    {
        name: 'Horse Racing App!',
        id:3,
        paragraph: 'I developed a horse racing app using Vue.js and Vue CLI. The app allows users to view real-time race information, track horses, and see race results. ',
        url: '/assets/project6.png',
        urlgit: "https://github.com/aydoganuyanikoglu/insiderRacingApp",
        livedemo: "https://aydoganhorseracing.netlify.app"
    },
    {
        name: 'NeoflemaTV!',
        id:4,
        paragraph: 'I created NeoflemaTV, a movie app built with Next.js 14 and Sass. Users can browse a list of movies, log in or out and like their favorite films or they can go to the movie detail page to see the trailer.',
        url: '/assets/project5.png',
        urlgit: "https://github.com/aydoganuyanikoglu/movie-app",
        livedemo: "https://movie-app-ashy-seven.vercel.app"
    },
    {
        name: 'Flemman!',
        id:5,
        paragraph: 'I developed an e-commerce platform using Next14(TypeScript) and Sass, featuring real-time product data, admin CRUD functionality for adding and removing products,shopping cart and a responsive design. Used Context API, api route, cookies, local storage, server-side authentication, vercel postgresql.',
        url: '/assets/project4.png',
        urlgit: "https://github.com/aydoganuyanikoglu/e-commerce",
        livedemo: "https://e-commerce-gamma-vert.vercel.app"
    },
]

export const experiences = [
    {
        title: 'Work and Travel',
        place: 'Frammingham/Massachussets',
        date: 'June 2023/September 2023',
        paragraph: 'I was working as a lifeguard in U.S for three months and I travelled different places after the job finished. So I found some chance to improve myself and my skills for english.',
    },
    {
        title: 'Park Yeri [Internship]',
        place: 'Beşiktaş/Istanbul',
        date: 'April 2023/June 2023',
        paragraph: 'I was working as a Frontend Developer in this company so I was implementing the websites.',
    },
    {
        title: 'Radison Blue',
        place: 'Kağıthane/Istanbul',
        date: 'July 2022 / August 2022',
        paragraph: 'I worked for the restaurant of the hotel. I was serving the tables.',
    },
    {
        title: 'NG Event',
        place: 'Beşiktaş/Istanbul',
        date: 'July 2019 / September 2021',
        paragraph: 'I took part in various concerts, festivals and many other events.I was responsible for a well start and well finish of the events and also the safety of the people in the area.',
    },
    {
        title: 'Yaren Bakery',
        place: 'Kağıthane/Istanbul',
        date: 'March 2016 / September 2019',
        paragraph: 'It was our company actually. So I was in everywhere in this place, background and foreground.',
    },
]