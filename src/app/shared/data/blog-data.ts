import { IBlogDT } from "../types/blog-d-t";

const  blog_data:IBlogDT[] = [
  // home blogs
  {
    id: 1,
    img: '/assets/img/blog/1/blog-1.jpg',
    tag: 'Work Life',
    title: 'Helping BIPOC employees fight burnout and find community',
    date: 'January 14, 2023',
    read: '4 Min',
    author_img: '/assets/img/users/user-1.jpg',
    author_name: 'Penny Tool',
    page:'home_main',
  },
  {
    id: 2,
    img: '/assets/img/blog/1/blog-2.jpg',
    tag: 'Consulting',
    title: 'How To Build Trust, Increase Authority, And Rank High With Google',
    date: 'January 16, 2023',
    read: '7 Min',
    author_img: '/assets/img/users/user-2.jpg',
    author_name: 'Naim',
    page:'home_main',
  },
  {
    id: 3,
    img: '/assets/img/blog/1/blog-3.jpg',
    tag: 'Harry Design',
    title: 'The Key To A Successful Non-Profit Marketing Campaign',
    date: 'January 18, 2023',
    read: '10 Min',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Mamun',
    page:'home_main',
  },
  {
    id: 4,
    img: '/assets/img/blog/1/blog-4.jpg',
    tag: 'Events',
    title: 'I stopped checking social media before noon, Here’s how it improved.',
    date: 'January 20, 2023',
    read: '12 Min',
    author_img: '/assets/img/users/user-4.jpg',
    author_name: 'Fahim',
    page:'home_main',
  },
  // lawyer blogs
  {
    id: 5,
    img: '/assets/img/blog/4/blog-1.jpg',
    tag: 'Immigration',
    title: 'Social Media Postings Lead to Defense.',
    sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
    author_img: '/assets/img/users/user-1.jpg',
    author_name: 'Penny Tool',
    date: 'April 10, 2023',
    comment: 3,
    page:'home_lawyer',
  },
  {
    id: 6,
    img: '/assets/img/blog/4/blog-2.jpg',
    tag: 'Criminal Law',
    title: 'This is war, and in war the only crime is to lose.',
    sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
    author_img: '/assets/img/users/user-2.jpg',
    author_name: 'Jackson Pot',
    date: 'March 12, 2023',
    comment: 5,
    page:'home_lawyer',
  },
  {
    id: 7,
    img: '/assets/img/blog/4/blog-3.jpg',
    tag: 'Finance Law',
    title: 'How to Manage Business’s Online Reputation',
    sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Tensin',
    date: 'January 15, 2023',
    comment: 7,
    page:'home_lawyer',
  },
  {
    id: 8,
    img: '/assets/img/blog/4/blog-4.jpg',
    tag: 'Finance Law',
    title: 'Can anyone report a case againest a boy',
    sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
    author_img: '/assets/img/users/user-4.jpg',
    author_name: 'Steaven',
    date: 'May 08, 2023',
    comment: 10,
    page:'home_lawyer',
  },
  {
    id: 9,
    img: '/assets/img/blog/4/blog-5.jpg',
    tag: 'Finance Law',
    title: 'In 1922 there is a pledge of fundamental',
    sm_text: 'Quis autem iure qui voluptate velit ess quam molestiae was.',
    author_img: '/assets/img/users/user-5.jpg',
    author_name: 'Weir Doe',
    date: 'Jun 05, 2023',
    comment: 10,
    page:'home_lawyer',
  },

  // home freelancer blogs
  {
    id: 10,
    img: '/assets/img/blog/2/blog-1.jpg',
    tag: 'Marketing',
    title: 'Curating a workplace that inspires all of us',
    sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
    author_img: '/assets/img/users/user-1.jpg',
    author_name: 'Naim',
    date: '26 Mar 2023',
    page:'home_freelancer',
  },
  {
    id: 11,
    img: '/assets/img/blog/2/blog-2.jpg',
    tag: 'Design',
    title: 'How to deliver clients a design system without any problem',
    sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
    author_img: '/assets/img/users/user-2.jpg',
    author_name: 'Naim',
    date: '15 Apr 2023',
    page:'home_freelancer',
  },
  {
    id: 12,
    img: '/assets/img/blog/2/blog-3.jpg',
    tag: 'Animation',
    title: 'World’s most famous app developers and designers',
    sm_text: 'Amet minim mollit non deserunt est sit aliqua dolor do amet.',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Fahim',
    date: '18 Feb 2023',
    page:'home_freelancer',
  },

  // agency blogs

  {
    id: 13,
    img: '/assets/img/blog/5/blog-1.jpg',
    tag: 'Startup',
    title: "Free advertising <br /> your online business.",
    sm_text: 'Content king that means bringing and strategic approach',
    author_img: '/assets/img/users/user-1.jpg',
    comment: 4,
    author_name: 'Naim',
    date: '26 July, 2023',
    page:'home_agency',
  },
  {
    id: 14,
    img: '/assets/img/blog/5/blog-2.jpg',
    tag: 'Business',
    title: "Investment <br /> monitor top 2023",
    sm_text: 'Content king that means bringing and strategic approach',
    author_img: '/assets/img/users/user-2.jpg',
    comment: 2,
    author_name: 'Smith',
    date: '12 March, 2023',
    page:'home_agency',
  },

  // home start-up

  {
    id: 15,
    img: '/assets/img/blog/7/blog-1.jpg',
    tag: 'Resources',
    title: '10 Quick tips about blogging',
    sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
    author_img: '/assets/img/users/user-6.jpg',
    comment: 45,
    see: '234,5k',
    author_name: 'Angela',
    date: 'October 24, 2023',
    page:'home_start_up',
  },
  {
    id: 16,
    img: '/assets/img/blog/7/blog-2.jpg',
    tag: 'Startups',
    title: 'Reed’s UK salary guides 2023',
    sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
    author_img: '/assets/img/users/user-5.jpg',
    comment: 40,
    see: '155,5k',
    author_name: 'Wildner',
    date: 'November 10, 2023',
    page:'home_start_up',
  },
  {
    id: 17,
    img: '/assets/img/blog/7/blog-3.jpg',
    tag: 'Business',
    title: 'Ideahub X is great for Startups',
    sm_text: 'Optio odit nam aut recusandae consequatur  Accusantium voluptatem.',
    author_img: '/assets/img/users/user-7.jpg',
    comment: 35,
    see: '140,5k',
    author_name: 'James Roy',
    date: 'March 08, 2023',
    page:'home_start_up',
  },

  // home creative

  {
    id: 18,
    img: '/assets/img/blog/6/blog-1.jpg',
    icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M18.3307 9.99984C18.3307 5.39984 14.5974 1.6665 9.9974 1.6665C5.3974 1.6665 1.66406 5.39984 1.66406 9.99984C1.66406 14.5998 5.3974 18.3332 9.9974 18.3332"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.4961 2.5C13.3044 4.93333 13.7128 7.46667 13.7128 10" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.49609 13.3333V12.5C4.92943 13.3083 7.46276 13.7167 9.99609 13.7167"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.49609 7.5C7.36276 5.875 12.6294 5.875 17.4961 7.5" stroke="currentColor"
            stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M15.1667 17.8334C16.6394 17.8334 17.8333 16.6394 17.8333 15.1667C17.8333 13.6939 16.6394 12.5 15.1667 12.5C13.6939 12.5 12.5 13.6939 12.5 15.1667C12.5 16.6394 13.6939 17.8334 15.1667 17.8334Z"
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.3333 18.3333L17.5 17.5" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>`,
    tag: 'Resources',
    title: "Design <br /> Qualitative",
    sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
    author_img: '/assets/img/users/user-1.jpg',
    author_name: 'Admin',
    date: 'January 10, 2023',
    video_id: 'z4dQmpf5PLM',
    page:"home_creative"
  },
  {
    id: 19,
    img: '/assets/img/blog/6/blog-2.jpg',
    icon:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M17.8919 15.8337V4.16699C17.8919 2.50033 17.0586 1.66699 15.3919 1.66699H12.0586C10.3919 1.66699 9.55859 2.50033 9.55859 4.16699V15.8337C9.55859 17.5003 10.3919 18.3337 12.0586 18.3337H15.3919C17.0586 18.3337 17.8919 17.5003 17.8919 15.8337Z"
            stroke="currentColor" stroke-linecap="round" />
          <path d="M9.55859 5H13.7253" stroke="currentColor" stroke-linecap="round" />
          <path d="M9.55859 15H12.8919" stroke="currentColor" stroke-linecap="round" />
          <path d="M9.55859 11.625L13.7253 11.6667" stroke="currentColor" stroke-linecap="round" />
          <path d="M9.55859 8.33301H12.0586" stroke="currentColor" stroke-linecap="round" />
          <path
            d="M4.57604 1.66699C3.21771 1.66699 2.10938 2.77533 2.10938 4.12533V14.9253C2.10938 15.3003 2.26771 15.867 2.45938 16.192L3.14271 17.3253C3.92604 18.6337 5.21771 18.6337 6.00104 17.3253L6.68438 16.192C6.87604 15.867 7.03437 15.3003 7.03437 14.9253V4.12533C7.03437 2.77533 5.92604 1.66699 4.57604 1.66699Z"
            stroke="currentColor" stroke-linecap="round" />
          <path d="M7.03437 5.83301H2.10938" stroke="currentColor" stroke-linecap="round" />
        </svg>`,
    tag: 'UX Design',
    title: "Become web <br /> designer",
    sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
    author_img: '/assets/img/users/user-2.jpg',
    author_name: 'Naim',
    date: 'April 12, 2023',
    video_id: 'szKlc6zD2uI',
    page:"home_creative"
  },
  {
    id: 20,
    img: '/assets/img/blog/6/blog-3.jpg',
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5013 18.3337H12.5013C16.668 18.3337 18.3346 16.667 18.3346 12.5003V7.50033C18.3346 3.33366 16.668 1.66699 12.5013 1.66699H7.5013C3.33464 1.66699 1.66797 3.33366 1.66797 7.50033V12.5003C1.66797 16.667 3.33464 18.3337 7.5013 18.3337Z"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M7.58594 10.0002V8.7669C7.58594 7.17524 8.71094 6.53357 10.0859 7.32524L11.1526 7.9419L12.2193 8.55857C13.5943 9.35024 13.5943 10.6502 12.2193 11.4419L11.1526 12.0586L10.0859 12.6752C8.71094 13.4669 7.58594 12.8169 7.58594 11.2336V10.0002Z"
              stroke="currentColor" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          </svg>`,
    tag: 'Tutorial',
    title: "Start run a <br /> website",
    sm_text: 'Lorem ipsum dolor sit amet, consectetur are adipiscing elit. Donec nec elementum ipsum porttitor convallis.',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    date: 'May 25, 2023',
    video_id: 'w3pmNX74wf4',
    page:"home_creative"
  },

  // portfolio blogs

  {
    id: 21,
    img: '/assets/img/blog/9/blog-1.jpg',
    tag: 'Design',
    title: 'Logo design trends to avoid in 2023.',
    date: '24 October 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_portfolio"
  },
  {
    id: 22,
    img: '/assets/img/blog/9/blog-2.jpg',
    tag: 'Branding',
    title: "6 free website <br /> mockup tools 2023.",
    date: '10 April 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_portfolio"
  },
  {
    id: 23,
    img: '/assets/img/blog/9/blog-3.jpg',
    tag: 'Technology',
    title: "How to build support <br /> with your design clients.",
    date: '26 June 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_portfolio"
  },

  // home architecture

  {
    id: 24,
    img: '/assets/img/blog/8/blog-1.jpg',
    tag: 'Featured Post',
    category: 'Inspiration',
    title: "Collective living challenge in <br /> Modern design.",
    date: 'April 24, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },
  {
    id: 25,
    img: '/assets/img/blog/8/blog-2.jpg',
    tag: 'Architecture',
    category: 'Architecture',
    title: "Six inspiring new york <br /> young architects following.",
    date: 'May 01, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },
  {
    id: 26,
    img: '/assets/img/blog/8/blog-3.jpg',
    tag: 'Architecture',
    category: 'Architecture',
    title: "Six inspiring new york <br /> young architects following.",
    date: 'May 15, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },
  {
    id: 27,
    img: '/assets/img/blog/8/blog-4.jpg',
    tag: 'Featured Post',
    category: 'Inspiration',
    title: "Collective living challenge in <br /> Modern design.",
    date: 'June 25, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },
  {
    id: 28,
    img: '/assets/img/blog/8/blog-5.jpg',
    tag: 'Featured Post',
    category: 'Inspiration',
    title: "Collective living challenge in <br /> Modern design.",
    date: 'June 20, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },
  {
    id: 29,
    img: '/assets/img/blog/8/blog-6.jpg',
    tag: 'Architecture',
    category: 'Architecture',
    title: "Six inspiring new york young architects following.",
    date: 'July 01, 2023',
    author_img: '/assets/img/users/user-3.jpg',
    author_name: 'Stiven',
    page:"home_architecture"
  },

  // home politician

  {
    id: 30,
    img: '/assets/img/blog/10/blog-1.jpg',
    tag: 'News',
    title: 'Many important brands have given us',
    sm_desc: 'Lorem ipsum dolor consectetur adipiscing elit.',
    author_img: '/assets/img/users/user-10.jpg',
    author_name: 'Angela',
    date: 'April 17, 2023',
    comment: 4,
    page:'home_politician'
  },
  {
    id: 31,
    img: '/assets/img/blog/10/blog-2.jpg',
    tag: 'News',
    title: 'Many important brands have given us',
    sm_desc: 'Lorem ipsum dolor consectetur adipiscing elit.',
    author_img: '/assets/img/users/user-8.jpg',
    author_name: 'Angela',
    date: 'April 18, 2023',
    comment: 6,
    page:'home_politician'
  },
  {
    id: 32,
    img:'/assets/img/blog/10/blog-1.jpg',
    tag: 'News',
    title: 'Keep quiet and continue working hard',
    author_img: '/assets/img/users/user-7.jpg',
    author_name: 'Thomas',
    date: 'March 20, 2023',
    comment: 5,
    page:'home_politician'
  },
  {
    id: 33,
    img:'/assets/img/blog/10/blog-1.jpg',
    tag: 'News',
    title: 'Tuesday tips: being realistic with your goals',
    author_img: '/assets/img/users/user-4.jpg',
    author_name: 'Posture',
    date: 'March 22, 2023',
    comment: 7,
    page:'home_politician'
  },
  {
    id: 34,
    img:'/assets/img/blog/10/blog-1.jpg',
    tag: 'News',
    title: 'Who is running for california governor in..!',
    author_img: '/assets/img/users/user-5.jpg',
    author_name: 'Morose',
    date: 'March 25, 2023',
    comment: 9,
    page:'home_politician'
  },

  // blog postbox

  {
    id:35,
    img:'/assets/img/blog/blog-big-1.jpg',
    author_name:'Naim',
    date:'January 22, 2023',
    comment:35,
    title:'How to Clean Your Home Faster and More Efficiently',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    page:'blog_post_box'
  },
  {
    id:36,
    img:'/assets/img/blog/blog-big-1.jpg',
    author_name:'Shahnewaz',
    date:'February 15, 2023',
    comment:40,
    title:'Four Ways a Clean Workplace Employees Happy and Healthy',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    video_id:'enFWl6n-cFs',
    page:'blog_post_box',
  },
  {
    id:37,
    img:'/assets/img/blog/blog-big-1.jpg',
    author_name:'Salim Rana',
    date:'March 10, 2023',
    comment:42,
    title:'Social distancing',
    desc:'Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the',
    blog_quote:true,
    page:'blog_post_box'
  },
  {
    id:38,
    img:'/assets/img/blog/blog-big-1.jpg',
    audio_url:'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/316547873&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    author_name:'Naim Ahmed',
    date:'July 10, 2023',
    comment:30,
    title:'Time for Spring Cleaning? Use These Tips From the Professionals',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    blog_audio:true,
    page:'blog_post_box'
  },
  {
    id:39,
    img:'/assets/img/blog/blog-big-6.jpg',
    slider_images:['/assets/img/blog/blog-big-6.jpg','/assets/img/blog/blog-big-1.jpg','/assets/img/blog/blog-big-5.jpg'],
    author_name:'Mamun Ahmed',
    date:'April 10, 2023',
    comment:25,
    title:'Visiting the Ads of the World blog is like visiting museum',
    desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat',
    blog_slider:true,
    page:'blog_post_box'
  },

  // blog grid items

  {
    id:40,
    tag:'Work Life',
    img:'/assets/img/blog/grid/blog-grid-1.jpg',
    date:'January 21, 2023',
    title:'How to Create an Effective Design Portfolio',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Jason',
    author_img:'/assets/img/users/user-9.jpg',
    comment:35,
    see:'234,5k',
    page:'blog_grid'
  },
  {
    id:41,
    tag:'Music',
    img:'/assets/img/blog/grid/blog-grid-2.jpg',
    date:'January 23, 2023',
    title:'Look at usual things with unusual eyes',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Naim',
    author_img:'/assets/img/users/user-10.jpg',
    comment:38,
    see:'250,7k',
    page:'blog_grid'
  },
  {
    id:42,
    tag:'Business',
    img:'/assets/img/blog/grid/blog-grid-3.jpg',
    date:'January 25, 2023',
    title:'An economist’s guess is liable good as anybody',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Cliphon',
    author_img:'/assets/img/users/user-11.jpg',
    comment:42,
    see:'240,7k',
    page:'blog_grid'
  },
  {
    id:43,
    tag:'Editorial',
    img:'/assets/img/blog/grid/blog-grid-4.jpg',
    date:'January 27, 2023',
    title:'How Can Designers Prepare For The Future?',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Stevne',
    author_img:'/assets/img/users/user-12.jpg',
    comment:25,
    see:'122,7k',
    page:'blog_grid'
  },
  {
    id:44,
    img:'/assets/img/blog/grid/blog-grid-1.jpg',
    date:'January 28, 2023',
    title:'Social distancing',
    sm_desc:"Never ever think of <br/> giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the",
    author_name:'Shahnewaz Sakil',
    author_img:'/assets/img/users/user-12.jpg',
    comment:25,
    see:'122,7k',
    blog_quote:true,
    page:'blog_grid'
  },
  {
    id:45,
    tag:'Creative Web',
    img:'/assets/img/blog/grid/blog-grid-5.jpg',
    date:'February 05, 2023',
    title:'Lorem ipsum dolor sit amet enim 2',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Crish',
    author_img:'/assets/img/users/user-13.jpg',
    comment:22,
    see:'100,7k',
    page:'blog_grid'
  },
  {
    id:46,
    tag:'Architecture',
    img:'/assets/img/blog/grid/blog-grid-6.jpg',
    date:'February 08, 2023',
    title:'Never give in except convictions good sense',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Sara',
    author_img:'/assets/img/users/user-6.jpg',
    comment:48,
    see:'190,7k',
    page:'blog_grid'
  },
  {
    id:47,
    tag:'Desing',
    img:'/assets/img/blog/grid/blog-grid-7.jpg',
    date:'February 10, 2023',
    title:'Investment trend monitor: Top trends in 2021',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Lilly',
    author_img:'/assets/img/users/user-7.jpg',
    comment:54,
    see:'266,7k',
    page:'blog_grid'
  },
  {
    id:48,
    tag:'Travel',
    img:'/assets/img/blog/grid/blog-grid-8.jpg',
    date:'February 15, 2023',
    title:'Create a Landing Page That Performs Great',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Kasam',
    author_img:'/assets/img/users/user-8.jpg',
    comment:62,
    see:'302,2k',
    page:'blog_grid'
  },

  // masonry items

  {
    id:49,
    tag:'Work Life',
    img:'/assets/img/blog/masonary/blog-masonary-1.jpg',
    date:'January 21, 2023',
    title:'How to Create an Effective Design Portfolio',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Jason',
    author_img:'/assets/img/users/user-9.jpg',
    comment:35,
    see:'234,5k',
    page:"blog_masonry",
  },
  {
    id:50,
    tag:'Architecture',
    img:'/assets/img/blog/masonary/blog-masonary-2.jpg',
    date:'February 08, 2023',
    title:'Never give in except convictions good sense',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Sara',
    author_img:'/assets/img/users/user-11.jpg',
    comment:48,
    see:'190,7k',
    page:"blog_masonry",
  },
  {
    id:51,
    tag:'Business',
    img:'/assets/img/blog/masonary/blog-masonary-3.jpg',
    date:'January 25, 2023',
    title:'Business meeting 2021 in San Francisco',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Cliphon',
    author_img:'/assets/img/users/user-11.jpg',
    comment:42,
    see:'240,7k',
    page:"blog_masonry",
  },
  {
    id:52,
    tag:'Design',
    img:'/assets/img/blog/masonary/blog-masonary-4.jpg',
    date:'January 30, 2023',
    title:'Lorem ipsum dolor sit amet enim 2',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Smith',
    author_img:'/assets/img/users/user-10.jpg',
    comment:55,
    see:'235,2k',
    page:"blog_masonry",
  },
  {
    id:53,
    tag:'Work Life',
    img:'/assets/img/blog/masonary/blog-masonary-5.jpg',
    date:'March 20, 2023',
    title:'How to Create Effective Design Portfolio',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Fahim',
    author_img:'/assets/img/users/user-5.jpg',
    comment:59,
    see:'135,2k',
    page:"blog_masonry",
  },
  {
    id:54,
    tag:'Editorial',
    img:'/assets/img/blog/masonary/blog-masonary-6.jpg',
    date:'January 27, 2023',
    title:'How Can Designers Prepare For The Future?',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Stevne',
    author_img:'/assets/img/users/user-12.jpg',
    comment:25,
    see:'122,7k',
    page:"blog_masonry",
  },
  {
    id:55,
    tag:'Travel',
    img:'/assets/img/blog/masonary/blog-masonary-9.jpg',
    date:'February 15, 2023',
    title:'Create a Landing Page That Performs Great',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Kasam',
    author_img:'/assets/img/users/user-8.jpg',
    comment:62,
    see:'302,2k',
    page:"blog_masonry",
  },
  {
    id:56,
    tag:'Creative Web',
    img:'/assets/img/blog/masonary/blog-masonary-8.jpg',
    date:'February 05, 2023',
    title:'The new trend of Marketing Snapchat.',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Crish',
    author_img:'/assets/img/users/user-13.jpg',
    comment:22,
    see:'100,7k',
    page:"blog_masonry",
  },
  {
    id:57,
    tag:'Editorial',
    date:'February 18, 2023',
    title:'How to Create Effective Design Portfolio',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Sara',
    author_img:'/assets/img/users/user-14.jpg',
    comment:28,
    see:'120,5k',
    page:"blog_masonry",
  },
  {
    id:58,
    tag:'Music',
    img:'/assets/img/blog/masonary/blog-masonary-7.jpg',
    date:'April 10, 2023',
    title:'How to Create Effective Design Portfolio',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Salim',
    author_img:'/assets/img/users/user-7.jpg',
    comment:22,
    see:'105,9k',
    page:"blog_masonry",
  },
  {
    id:59,
    tag:'Music',
    img:'/assets/img/blog/masonary/blog-masonary-12.jpg',
    date:'January 23, 2023',
    title:'Look at usual things with unusual eyes',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Naim',
    author_img:'/assets/img/users/user-10.jpg',
    comment:38,
    see:'250,7k',
    page:"blog_masonry",
  },
  {
    id:60,
    tag:'Desing',
    img:'/assets/img/blog/masonary/blog-masonary-11.jpg',
    date:'February 10, 2023',
    title:'Investment trend monitor: Top trends in 2021',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Lilly',
    author_img:'/assets/img/users/user-7.jpg',
    comment:54,
    see:'266,7k',
    page:"blog_masonry",
  },
  {
    id:61,
    tag:'Design',
    img:'/assets/img/blog/masonary/blog-masonary-13.jpg',
    date:'May 23, 2023',
    title:'Investment trend monitor: Top trends in 2021',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Weir Doe',
    author_img:'/assets/img/users/user-5.jpg',
    comment:42,
    see:'264,4k',
    page:"blog_masonry",
  },
  {
    id:62,
    tag:'Design',
    img:'/assets/img/blog/masonary/blog-masonary-10.jpg',
    date:'May 11, 2023',
    title:'Investment trend monitor: Top trends in 2021',
    sm_desc:'Lorem ipsum is simply dummy text ipsum been dummy',
    author_name:'Hamim',
    author_img:'/assets/img/users/user-6.jpg',
    comment:49,
    see:'189,4k',
    page:"blog_masonry",
  },
  {
    id:63,
    date:'January 28, 2023',
    title:'Social distancing',
    sm_desc:"Never ever think of <br/> giving up. Winners never quit and quitters never win. Take all negative words out your mental dictionary and focus on the",
    author_name:'Shahnewaz Sakil',
    author_img:'/assets/img/users/user-12.jpg',
    comment:25,
    see:'122,7k',
    blog_quote:true,
    page:"blog_masonry",
  },
]

export default blog_data;
