// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Under construction.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-membaca-menulis-mengubah",
        
          title: 'Membaca, Menulis, Mengubah <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/membaca-menulis-mengubah-7c9b4ebb487b?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-hold-your-loved-ones",
        
          title: 'Hold Your Loved Ones <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/hold-your-loved-ones-651e18191632?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-floating-with-no-bearing",
        
          title: 'Floating With No Bearing <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/floating-with-no-bearing-26dc5e18203f?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-to-see-is-to-believe",
        
          title: 'To See is To Believe <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/to-see-is-to-believe-57e2942cd44c?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-rebuilding",
        
          title: 'Rebuilding <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/rebuilding-27253081f21c?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-melaju",
        
          title: 'Melaju. <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/melaju-77971cb77405?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-salah-seorang-legenda",
        
          title: 'Salah Seorang Legenda <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/salah-seorang-legenda-e61dd1b0da8c?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-legend",
        
          title: 'Legend <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/legend-bee60d6eff0d?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-putar-balik",
        
          title: 'Putar Balik <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/putar-balik-d0dad5b82bcb?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-land-cover-classification-with-machine-learning",
        
          title: "Land Cover Classification with Machine Learning",
        
        description: "Automated land cover mapping using satellite imagery and machine learning algorithms",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/land-cover-classification/";
          
        },
      },{id: "post-satellite-imagery-analysis-spectral-indices-explained",
        
          title: "Satellite Imagery Analysis - Spectral Indices Explained",
        
        description: "Deep dive into vegetation, water, and urban indices for satellite image analysis",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/spectral-indices/";
          
        },
      },{id: "post-the-notion-of-technology",
        
          title: 'The Notion of Technology <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/the-notion-of-technology-6cbab51b1aee?source=rss-8ac9eaddcab2------2", "_blank");
          
        },
      },{id: "post-idea-flight-count",
        
          title: "idea-flight count",
        
        description: "what if you would not forget your flights",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/flight-tracking/";
          
        },
      },{id: "post-introduction-to-remote-sensing",
        
          title: "Introduction to Remote Sensing",
        
        description: "A comprehensive guide to remote sensing technology, applications, and satellite systems",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/remote-sensing/";
          
        },
      },{id: "post-attention-required-cloudflare",
        
          title: 'Attention Required! | Cloudflare <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@tarreq.maulana/hiking-clarity-d0fe7b75bb9f", "_blank");
          
        },
      },{id: "books-the-elegant-universe",
          title: 'The Elegant Universe',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/elegant_universe/";
            },},{id: "books-hunter-x-hunter",
          title: 'Hunter X Hunter',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hunter_x_hunter/";
            },},{id: "books-catatan-sang-sahabat-alam",
          title: 'Catatan Sang Sahabat Alam',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/norman_edwin/";
            },},{id: "books-sakamoto-days",
          title: 'Sakamoto Days',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/sakamoto_days/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "books-things-to-make-and-do-in-the-fourth-dimension",
          title: 'Things to Make and Do in the Fourth Dimension',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/things_to_make_and_do_in_the_fourth_dimension/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%72%72%65%71.%6D%61%75%6C%61%6E%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
