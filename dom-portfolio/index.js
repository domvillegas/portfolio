if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

    const navigateTo = (url) => {
    
        history.pushState(null, null, url);
        routes[window.location.pathname]()
    
    }
    
    window.addEventListener('popstate', () => {
        routes[window.location.pathname]()
    })

    const homePage = () => {

        let clicked = false;
    
       const openingAnimationContainer = document.createElement('div');
       openingAnimationContainer.setAttribute('class', 'd-flex align-items-center mx-auto')
    
       const openingTextContainer = document.createElement('div');
       openingTextContainer.setAttribute('id', 'opening-text-container');
       openingTextContainer.classList = 'd-flex align-items-center justify-content-center'
    
       const openingText1 = document.createElement('h1');
       openingText1.setAttribute('id', 'opening-text-1');
       openingText1.classList = 'text-right d-flex align-items-center text-secondary pr-3'
       openingText1.innerHTML = 'dom';
    
       const openingText2Container = document.createElement('div');
       openingText2Container.setAttribute('id', 'opening-text-2-container');
       openingText2Container.classList = 'd-flex align-items-center justify-content-center'
    
       const openingText2 = document.createElement('h1');
       openingText2.setAttribute('id', 'opening-text-2');
       openingText2.classList = 'text-right text-secondary pl-3'
       openingText2.innerHTML = 'enter';
    
       openingText2Container.appendChild(openingText2)
    
       openingTextContainer.appendChild(openingText1);
       openingTextContainer.appendChild(openingText2Container)
    
       openingAnimationContainer.appendChild(openingTextContainer)
    
       document.body.classList = 'd-flex align-items-center justify-self-center justify-content-center overflow-hidden';
       document.body.style = 'opacity: 0;'
       document.body.appendChild(openingAnimationContainer)
       openingText1.classList.add('openingTextContainer')
    
       openingText2.addEventListener('click', () => {
           if(!clicked) {
            openingAnimationContainer.classList.add('page-fade-out');
        
            setTimeout(() => {
                openingAnimationContainer.remove();
                navigateTo('/menu')
            }, 650);

            clicked = true;
           }
       })
    
       window.addEventListener('popstate', () => {
           openingAnimationContainer.remove();
       })
    }
    
    const menuPage = () => {
        let clicked = false;

       const menu = document.createElement('ul');
       menu.setAttribute('id', 'menu')
       menu.classList = 'text-right'
    
       const about = document.createElement('li');
       about.innerHTML = 'about'
       about.classList = 'text-secondary h1'
       about.style.opacity = '0';
    
       const projects = document.createElement('li');
       projects.innerHTML = 'projects'
       projects.classList = 'text-secondary h1'
       projects.style.opacity = '0';
    
       const contact = document.createElement('li');
       contact.innerHTML = 'contact'
       contact.classList = 'text-secondary h1'
       contact.style.opacity = '0';
    
       menu.appendChild(about)
       menu.appendChild(projects)
       menu.appendChild(contact)
       
       document.body.classList = 'd-flex justify-content-center align-items-center'
    
       document.body.appendChild(menu)
    
       setTimeout(() => {
           about.classList.add('page-fade-in')
       }, 100);
    
       setTimeout(() => {
           projects.classList.add('page-fade-in')
       }, 275);
    
    
       setTimeout(() => {
           contact.classList.add('page-fade-in')
       }, 475);
    
       about.addEventListener('click', () => {
           if(!clicked) {
            document.body.style = 'opacity: 1;'
            document.body.classList.add('page-fade-out')
            about.style = 'color: white !important; transition: color 1s !important;';

            clicked = true;
         
            setTimeout(() => {
                menu.remove();
                navigateTo('/about')
            }, 750);
           }
       })

       projects.addEventListener('click', () => {
           if(!clicked) {
            document.body.style = 'opacity: 1;'
            document.body.classList.add('page-fade-out')
            projects.style = 'color: white !important; transition: color 1s !important;';

            clicked = true;
         
            setTimeout(() => {
                menu.remove();
                navigateTo('/projects')
            }, 750);
           }
    })

    contact.addEventListener('click', () => {
        if(!clicked) {
            document.body.style = 'opacity: 1;'
            document.body.classList.add('page-fade-out')
            contact.style = 'color: white !important; transition: color 1s !important;';

            clicked = true;
            
            setTimeout(() => {
                menu.remove();
                navigateTo('/contact')
            }, 750);
        }
    })
    
       window.addEventListener('popstate', () => {
           menu.remove();
       })
    }
    
    const aboutPage = () => {
        let clicked = false;

       const container = document.createElement('div');
       container.setAttribute('class', 'about-container container-fluid d-flex align-items-center justify-content-center');
    
       const row = document.createElement('div');
       row.setAttribute('class', 'row d-flex flex-column');
    
       const backToMenu = document.createElement('h1');
       backToMenu.setAttribute('id', 'back-to-menu')
       backToMenu.setAttribute('class', 'text-secondary align-self-center')
       backToMenu.style = 'opacity: 0; font-size: 30px'
       backToMenu.innerHTML = 'menu'
    
       const aboutMeContent = document.createElement('p');
       aboutMeContent.setAttribute('class', 'text-center m-0 p-0')
       aboutMeContent.innerHTML = "I'm Dominick Villegas, a front-end developer from Portland, OR."
    
       row.appendChild(aboutMeContent)
       row.appendChild(backToMenu)
    
       container.appendChild(row)
    
       document.body.appendChild(container)
       document.body.style = 'opacity: 0'
       document.body.classList = 'd-flex justify-content-center align-items-center'
       document.body.classList.add('page-fade-in')
    
       setTimeout(() => {
           backToMenu.classList.add('page-fade-in')
       }, 2000);
    
       backToMenu.addEventListener('click', () => {
           if(!clicked) {
            container.classList.add('page-fade-out');

            clicked = true;
        
            setTimeout(() => {
                container.remove();
                navigateTo('/menu')
                // homepage();
            }, 650);
           }
       })
    
       window.addEventListener('popstate', () => {
           container.remove();
       })
    }

    const projectsPage = () => {
        let clicked = false;

        const container = document.createElement('div');
        container.setAttribute('class', 'container-fluid d-flex justify-content-center align-items-center flex-column')

        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        const column = document.createElement('div');
        column.setAttribute('class', 'col-xs-12 d-flex justify-content-center')
        column.setAttribute('style', 'max-width: 900px !important')
     
        const backToMenu = document.createElement('h1');
        backToMenu.setAttribute('id', 'back-to-menu')
        backToMenu.setAttribute('class', 'text-secondary text-center projects-back-to-menu')
        backToMenu.style = 'opacity: 0; font-size: 30px'
        backToMenu.innerHTML = 'menu'

        const carousel = document.createElement('div');
        carousel.setAttribute('id', 'carousel-container');
        carousel.setAttribute('class', 'carousel slide w-100');
        carousel.setAttribute('data-interval', 'false');

        const carouselIndicatorsOL = document.createElement('ol');
        carouselIndicatorsOL.setAttribute('class', 'carousel-indicators');

        const carouselListItem1 = document.createElement('li');
        carouselListItem1.setAttribute('data-target', '#carousel-container');
        carouselListItem1.setAttribute('data-slide-to', '0');
        carouselListItem1.setAttribute('class', 'active');

        const carouselListItem2 = document.createElement('li');
        carouselListItem2.setAttribute('data-target', '#carousel-container');
        carouselListItem2.setAttribute('data-slide-to', '1');

        const carouselListItem3 = document.createElement('li');
        carouselListItem3.setAttribute('data-target', '#carousel-container');
        carouselListItem3.setAttribute('data-slide-to', '2');

        const carouselListItem4 = document.createElement('li');
        carouselListItem4.setAttribute('data-target', '#carousel-container');
        carouselListItem4.setAttribute('data-slide-to', '3');

        const carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        carouselInner.setAttribute('role', 'listbox')

        const carouselItem1 = document.createElement('div');
        carouselItem1.setAttribute('class', 'carousel-item active');

        const carouselImage1 = document.createElement('img');
        carouselImage1.setAttribute('class', ' w-100 first-slide')
        carouselImage1.setAttribute('src', 'images/carouselImage1.png')
        carouselImage1.setAttribute('alt', 'slide 1')

        const carouselItem1Caption = document.createElement('div');
        carouselItem1Caption.setAttribute('class', 'carousel-caption')
        
        const item1Description = document.createElement('p');
        item1Description.setAttribute('class', 'd-none d-lg-block')
        item1Description.innerHTML = 'A website for the philospher of mind David Pitt. Built with vanilla JavaScript, Bootstrap, and Font Awesome'

        const item1ButtonsContainer = document.createElement('div');
        item1ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item1ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item1DevelopmentJourneyButton = document.createElement('button');
        item1DevelopmentJourneyButton.setAttribute('type', 'button');
        item1DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item1DevelopmentJourneyButton.setAttribute('data-target', '#david-pitt-modal')
        item1DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item1LiveButton = document.createElement('button');
        item1LiveButton.setAttribute('type', 'button')
        item1LiveButton.innerHTML = 'LIVE';

        const item1CodeButton = document.createElement('button');
        item1CodeButton.setAttribute('type', 'button')
        item1CodeButton.innerHTML = 'CODE';

        item1ButtonsContainer.appendChild(item1DevelopmentJourneyButton)
        item1ButtonsContainer.appendChild(item1LiveButton)
        item1ButtonsContainer.appendChild(item1CodeButton)

        carouselItem1Caption.appendChild(item1Description)
        carouselItem1Caption.appendChild(item1ButtonsContainer)
        carouselItem1.appendChild(carouselItem1Caption)

        const carouselItem2 = document.createElement('div');
        carouselItem2.setAttribute('class', 'carousel-item');

        const carouselImage2 = document.createElement('img');
        carouselImage2.setAttribute('class', ' w-100 second-slide')
        carouselImage2.setAttribute('src', 'images/carouselImage2.png')
        carouselImage2.setAttribute('alt', 'slide 2')

        const carouselItem2Caption = document.createElement('div');
        carouselItem2Caption.setAttribute('class', 'carousel-caption')
        
        const item2Description = document.createElement('p');
        item2Description.setAttribute('class', 'd-none d-lg-block')
        item2Description.innerHTML = 'A website for the modern dance company Tongue Dance Project from Portland, OR. With an emphasis on swiping, the website is inspired by the "mobile-first" philosophy of design. Built with vanilla JavaScript, vanilla CSS, Font Awesome, and Google Fonts.'

        const item2ButtonsContainer = document.createElement('div');
        item2ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item2ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item2DevelopmentJourneyButton = document.createElement('button');
        item2DevelopmentJourneyButton.setAttribute('type', 'button');
        item2DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item2DevelopmentJourneyButton.setAttribute('data-target', '#tongue-dance-project-modal')
        item2DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item2LiveButton = document.createElement('button');
        item2LiveButton.setAttribute('type', 'button')
        item2LiveButton.innerHTML = 'LIVE';

        const item2CodeButton = document.createElement('button');
        item2CodeButton.setAttribute('type', 'button')
        item2CodeButton.innerHTML = 'CODE';

        item2ButtonsContainer.appendChild(item2DevelopmentJourneyButton)
        item2ButtonsContainer.appendChild(item2LiveButton)
        item2ButtonsContainer.appendChild(item2CodeButton)

        carouselItem2Caption.appendChild(item2Description)
        carouselItem2Caption.appendChild(item2ButtonsContainer)
        carouselItem2.appendChild(carouselItem2Caption)

        const carouselItem3 = document.createElement('div');
        carouselItem3.setAttribute('class', 'carousel-item');

        const carouselImage3 = document.createElement('img');
        carouselImage3.setAttribute('class', ' w-100 third-slide')
        carouselImage3.setAttribute('src', 'images/carouselImage3.png')
        carouselImage3.setAttribute('alt', 'slide 3')

        const carouselItem3Caption = document.createElement('div');
        carouselItem3Caption.setAttribute('class', 'carousel-caption')

        const item3Description = document.createElement('p');
        item3Description.setAttribute('class', 'd-none d-lg-block')
        item3Description.innerHTML = 'A shopping experience that renders fetched JSON data from the Fake Store API. Built with React.js, React Router, Axios, vanilla CSS, Font Awesome, and Google Fonts'

        const item3ButtonsContainer = document.createElement('div');
        item3ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item3ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item3DevelopmentJourneyButton = document.createElement('button');
        item3DevelopmentJourneyButton.setAttribute('type', 'button');
        item3DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item3DevelopmentJourneyButton.setAttribute('data-target', '#the-shop-modal')
        item3DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item3LiveButton = document.createElement('button');
        item3LiveButton.innerHTML = 'LIVE';

        const item3CodeButton = document.createElement('button');
        item3CodeButton.innerHTML = 'CODE';

        item3ButtonsContainer.appendChild(item3DevelopmentJourneyButton)
        item3ButtonsContainer.appendChild(item3LiveButton)
        item3ButtonsContainer.appendChild(item3CodeButton)

        carouselItem3Caption.appendChild(item3Description)
        carouselItem3Caption.appendChild(item3ButtonsContainer)
        carouselItem3.appendChild(carouselItem3Caption)

        //

        const carouselItem4 = document.createElement('div');
        carouselItem4.setAttribute('class', 'carousel-item');

        const carouselImage4 = document.createElement('img');
        carouselImage4.setAttribute('class', ' w-100 third-slide')
        carouselImage4.setAttribute('src', 'images/carouselImage4.png')
        carouselImage4.setAttribute('alt', 'slide 3')

        const carouselItem4Caption = document.createElement('div');
        carouselItem4Caption.setAttribute('class', 'carousel-caption')

        const item4Description = document.createElement('p');
        item4Description.setAttribute('class', 'd-none d-lg-block')
        item4Description.innerHTML = 'A joke about being 30 made for a side project of mine. Built with vanilla JavaScript and iMovie. Volume up!'

        const item4ButtonsContainer = document.createElement('div');
        item4ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item4ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item4DevelopmentJourneyButton = document.createElement('button');
        item4DevelopmentJourneyButton.setAttribute('type', 'button');
        item4DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item4DevelopmentJourneyButton.setAttribute('data-target', '#joke-modal')
        item4DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item4LiveButton = document.createElement('button');
        item4LiveButton.innerHTML = 'LIVE';

        item4ButtonsContainer.appendChild(item4DevelopmentJourneyButton)
        item4ButtonsContainer.appendChild(item4LiveButton)

        carouselItem4Caption.appendChild(item4Description)
        carouselItem4Caption.appendChild(item4ButtonsContainer)
        carouselItem4.appendChild(carouselItem4Caption)

        //

        const toPreviousItemContainer = document.createElement('a');
        toPreviousItemContainer.setAttribute('class', 'left carousel-control-prev');
        toPreviousItemContainer.setAttribute('href', '#carousel-container');
        toPreviousItemContainer.setAttribute('role', 'button');
        toPreviousItemContainer.setAttribute('data-slide', 'prev');

        const previousIcon = document.createElement('span');
        previousIcon.setAttribute('class', 'carousel-control-prev-icon');
        previousIcon.setAttribute('aria-hidden', 'true');

        const previousScreenReaderOnly = document.createElement('span');
        previousScreenReaderOnly.setAttribute('class', 'sr-only');
        previousScreenReaderOnly.innerHTML = 'Previous';

        const toNextItemContainer = document.createElement('a');
        toNextItemContainer.setAttribute('class', 'right carousel-control-next');
        toNextItemContainer.setAttribute('href', '#carousel-container');
        toNextItemContainer.setAttribute('role', 'button');
        toNextItemContainer.setAttribute('data-slide', 'next');

        const nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'carousel-control-next-icon');
        nextIcon.setAttribute('aria-hidden', 'true');

        const nextScreenReaderOnly = document.createElement('span');
        nextScreenReaderOnly.setAttribute('class', 'sr-only');
        nextScreenReaderOnly.innerHTML = 'Next';

        const davidPittModalContainer = document.createElement('div');
        davidPittModalContainer.setAttribute('class', 'modal fade');
        davidPittModalContainer.setAttribute('id', 'david-pitt-modal');
        davidPittModalContainer.setAttribute('tab-index', '-1');
        davidPittModalContainer.setAttribute('role', 'dialog');
        davidPittModalContainer.setAttribute('aria-labelledby', 'david-pitt-modal');
        davidPittModalContainer.setAttribute('aria-hidden', 'true');

        const davidPittModalDialog = document.createElement('div');
        davidPittModalDialog.setAttribute('class', 'modal-dialog');
        davidPittModalDialog.setAttribute('role', 'document');

        const davidPittModalContent = document.createElement('div');
        davidPittModalContent.setAttribute('class', 'modal-content');

        const davidPittModalHeader = document.createElement('div');
        davidPittModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const davidPittModalTitle = document.createElement('h5');
        davidPittModalTitle.setAttribute('class', 'modal-title');
        davidPittModalTitle.setAttribute('id', 'david-pitt-modal');
        davidPittModalTitle.innerHTML = 'David Pitt';

        const davidPittCloseButton = document.createElement('button');
        davidPittCloseButton.setAttribute('type', 'button');
        davidPittCloseButton.setAttribute('class', 'close');
        davidPittCloseButton.setAttribute('data-dismiss', 'modal');
        davidPittCloseButton.setAttribute('aria-label', 'Close');

        const davidPittModalSpanTag = document.createElement('span');
        davidPittModalSpanTag.setAttribute('aria-hidden', 'true');
        davidPittModalSpanTag.innerHTML = '&times;';

        davidPittCloseButton.appendChild(davidPittModalSpanTag)

        davidPittModalHeader.appendChild(davidPittModalTitle);
        davidPittModalHeader.appendChild(davidPittCloseButton);

        const davidPittModalBody = document.createElement('div');
        davidPittModalBody.setAttribute('class', 'modal-body');
        davidPittModalBody.innerHTML = 'Tools: vanilla JavaScript, Bootstrap, Font Awesome<br><br>Story: Because David is so well known and because he\'s one of the best teachers I\'ve had, I really wanted to give him a web presence he’s proud of. Because of this, it was important to me that I make a website that fulfills his wants and needs.<br><br>One of the challenges I had making this project was mapping these wants and needs onto a responsive design that looks great on all devices. This project taught me a lot about translating the vision of the client to a responsive design.<br><br>Along the way, I learned how to use Bootstrap’s classes. Although there were some challenging moments on the "CV" page that gave me a better understanding of Bootstrap\'s grid system, I really enjoyed using Bootstrap; so much so, I used it for my personal website: <a href="https:\/\/www.domvillegas.com" target="_blank"/>domvillegas.com</a>.<br><br>Note: the styling of this website, specifically the alignment of the elements, were decisions made by the client.';

        const davidPittModalFooter = document.createElement('div');
        davidPittModalFooter.setAttribute('class', 'modal-footer');

        const davidPittModalFooterCloseButton = document.createElement('button');
        davidPittModalFooterCloseButton.setAttribute('type', 'button');
        davidPittModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        davidPittModalFooterCloseButton.innerHTML = 'CLOSE';

        davidPittModalFooter.appendChild(davidPittModalFooterCloseButton)

        davidPittModalContent.appendChild(davidPittModalHeader);
        davidPittModalContent.appendChild(davidPittModalBody);
        davidPittModalContent.appendChild(davidPittModalFooter);

        davidPittModalDialog.appendChild(davidPittModalContent);

        davidPittModalContainer.appendChild(davidPittModalDialog);

        // 

        const tongueDanceProjectModalContainer = document.createElement('div');
        tongueDanceProjectModalContainer.setAttribute('class', 'modal fade');
        tongueDanceProjectModalContainer.setAttribute('id', 'tongue-dance-project-modal');
        tongueDanceProjectModalContainer.setAttribute('tab-index', '-1');
        tongueDanceProjectModalContainer.setAttribute('role', 'dialog');
        tongueDanceProjectModalContainer.setAttribute('aria-labelledby', 'tongue-dance-project-modal');
        tongueDanceProjectModalContainer.setAttribute('aria-hidden', 'true');

        const tongueDanceProjectModalDialog = document.createElement('div');
        tongueDanceProjectModalDialog.setAttribute('class', 'modal-dialog');
        tongueDanceProjectModalDialog.setAttribute('role', 'document');

        const tongueDanceProjectModalContent = document.createElement('div');
        tongueDanceProjectModalContent.setAttribute('class', 'modal-content');

        const tongueDanceProjectModalHeader = document.createElement('div');
        tongueDanceProjectModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const tongueDanceProjectModalTitle = document.createElement('h5');
        tongueDanceProjectModalTitle.setAttribute('class', 'modal-title');
        tongueDanceProjectModalTitle.setAttribute('id', 'tongue-dance-project-modal');
        tongueDanceProjectModalTitle.innerHTML = 'Tongue Dance Project';

        const tongueDanceProjectCloseButton = document.createElement('button');
        tongueDanceProjectCloseButton.setAttribute('type', 'button');
        tongueDanceProjectCloseButton.setAttribute('class', 'close');
        tongueDanceProjectCloseButton.setAttribute('data-dismiss', 'modal');
        tongueDanceProjectCloseButton.setAttribute('aria-label', 'Close');

        const tongueDanceProjectModalSpanTag = document.createElement('span');
        tongueDanceProjectModalSpanTag.setAttribute('aria-hidden', 'true');
        tongueDanceProjectModalSpanTag.innerHTML = '&times;';

        tongueDanceProjectCloseButton.appendChild(tongueDanceProjectModalSpanTag)

        tongueDanceProjectModalHeader.appendChild(tongueDanceProjectModalTitle);
        tongueDanceProjectModalHeader.appendChild(tongueDanceProjectCloseButton);

        const tongueDanceProjectModalBody = document.createElement('div');
        tongueDanceProjectModalBody.setAttribute('class', 'modal-body');
        tongueDanceProjectModalBody.innerHTML = 'Tools: vanilla JavaScript, vanilla CSS, Font Awesome, Google Fonts<br><br>Story: Before the development of this project, I was reading up on the “mobile-first” philosophy of design. The concept of the mobile user experience inspired me to experiment with a unique feature of the mobile user experience: swiping. Many hours were spent on making swiping feel smooth and significant. My goal was to make the user feel as though <em>they</em> are changing the website, not the code behind the scenes. <br><br>This is the first project I made after learning the basics of HTML, CSS, and JavaScript from online courses. It was important to me that I take the training wheels off and create something that is wholly mine. I used this project to learn how to conceive of ideas by myself and solve problems by myself. This is the project that made me a web developer.<br><br>Note: a dedicated desktop version is still in development.';

        const tongueDanceProjectModalFooter = document.createElement('div');
        tongueDanceProjectModalFooter.setAttribute('class', 'modal-footer');

        const tongueDanceProjectModalFooterCloseButton = document.createElement('button');
        tongueDanceProjectModalFooterCloseButton.setAttribute('type', 'button');
        tongueDanceProjectModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        tongueDanceProjectModalFooterCloseButton.innerHTML = 'CLOSE';

        tongueDanceProjectModalFooter.appendChild(tongueDanceProjectModalFooterCloseButton)

        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalHeader);
        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalBody);
        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalFooter);

        tongueDanceProjectModalDialog.appendChild(tongueDanceProjectModalContent);

        tongueDanceProjectModalContainer.appendChild(tongueDanceProjectModalDialog);

        //

        const theShopModalContainer = document.createElement('div');
        theShopModalContainer.setAttribute('class', 'modal fade');
        theShopModalContainer.setAttribute('id', 'the-shop-modal');
        theShopModalContainer.setAttribute('tab-index', '-1');
        theShopModalContainer.setAttribute('role', 'dialog');
        theShopModalContainer.setAttribute('aria-labelledby', 'the-shop-modal');
        theShopModalContainer.setAttribute('aria-hidden', 'true');

        const theShopModalDialog = document.createElement('div');
        theShopModalDialog.setAttribute('class', 'modal-dialog');
        theShopModalDialog.setAttribute('role', 'document');

        const theShopModalContent = document.createElement('div');
        theShopModalContent.setAttribute('class', 'modal-content');

        const theShopModalHeader = document.createElement('div');
        theShopModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const theShopModalTitle = document.createElement('h5');
        theShopModalTitle.setAttribute('class', 'modal-title');
        theShopModalTitle.setAttribute('id', 'the-shop-modal');
        theShopModalTitle.innerHTML = 'The Shop';

        const theShopCloseButton = document.createElement('button');
        theShopCloseButton.setAttribute('type', 'button');
        theShopCloseButton.setAttribute('class', 'close');
        theShopCloseButton.setAttribute('data-dismiss', 'modal');
        theShopCloseButton.setAttribute('aria-label', 'Close');

        const theShopModalSpanTag = document.createElement('span');
        theShopModalSpanTag.setAttribute('aria-hidden', 'true');
        theShopModalSpanTag.innerHTML = '&times;';

        theShopCloseButton.appendChild(theShopModalSpanTag)

        theShopModalHeader.appendChild(theShopModalTitle);
        theShopModalHeader.appendChild(theShopCloseButton);

        const theShopModalBody = document.createElement('div');
        theShopModalBody.setAttribute('class', 'modal-body');
        theShopModalBody.innerHTML = "Tools: React.js, React Router, Axios, vanilla CSS, Fake Store API, Font Awesome, Google Fonts<br><br>Story: After starting to feel confident about my ability to build straightforward websites with vanilla JavaScript, I decided to start getting into React. So, I completed a React course, which included the building of some React projects. After I finished the course I decided to build a React project without help from a teacher; I think that's the best way to learn a tool. I was also curious about how to fetch and use JSON data in the context of a shopping application. With those two elements in mind, 'THE SHOP' was born.<br><br>The biggest problem I ran into involved the deleting of items from the user's shopping cart. Simply removing the item from the DOM with item.remove() wouldn't do because the Element.remove() method doesn't affect the app's state, which is where the user's shopping cart really is. So I knew I had to remove the item from the app's state and have a new list of cart items be rendered. This is simple to implement with the Array.prototype.filter() method, but another problem arose: if the user has two or more of one kind of item&mdash;let's say two red shirts&mdash; in their cart and click to delete one of these red shirts, then all of the red shirts will be deleted because the red shirts share the same value for the key 'id' as defined by the Fake Store API.<br><br>My solution was to create unique keys and assign them to each individual cart item so that I could refer to a unique key when filtering the shopping cart, rather than the pre-assigned id value fetched from the Fake Store API.<br><br>I had a lot of fun making this app. I learned a lot about JavaScript, passing props, and handling state, which was fascinating and really helped me grow, but it was just really cool seeing things work together to create a unified experience.<br><br>Note: this project's purpose is to display React.js skills, not styling skills.";

        const theShopModalFooter = document.createElement('div');
        theShopModalFooter.setAttribute('class', 'modal-footer');

        const theShopModalFooterCloseButton = document.createElement('button');
        theShopModalFooterCloseButton.setAttribute('type', 'button');
        theShopModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        theShopModalFooterCloseButton.innerHTML = 'CLOSE';

        theShopModalFooter.appendChild(theShopModalFooterCloseButton)

        theShopModalContent.appendChild(theShopModalHeader);
        theShopModalContent.appendChild(theShopModalBody);
        theShopModalContent.appendChild(theShopModalFooter);

        theShopModalDialog.appendChild(theShopModalContent);

        theShopModalContainer.appendChild(theShopModalDialog);
        
        //

        const jokeModalContainer = document.createElement('div');
        jokeModalContainer.setAttribute('class', 'modal fade');
        jokeModalContainer.setAttribute('id', 'joke-modal');
        jokeModalContainer.setAttribute('tab-index', '-1');
        jokeModalContainer.setAttribute('role', 'dialog');
        jokeModalContainer.setAttribute('aria-labelledby', 'joke-modal');
        jokeModalContainer.setAttribute('aria-hidden', 'true');

        const jokeModalDialog = document.createElement('div');
        jokeModalDialog.setAttribute('class', 'modal-dialog');
        jokeModalDialog.setAttribute('role', 'document');

        const jokeModalContent = document.createElement('div');
        jokeModalContent.setAttribute('class', 'modal-content');

        const jokeModalHeader = document.createElement('div');
        jokeModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const jokeModalTitle = document.createElement('h5');
        jokeModalTitle.setAttribute('class', 'modal-title');
        jokeModalTitle.setAttribute('id', 'joke-modal');
        jokeModalTitle.innerHTML = "every form when you're 30";

        const jokeCloseButton = document.createElement('button');
        jokeCloseButton.setAttribute('type', 'button');
        jokeCloseButton.setAttribute('class', 'close');
        jokeCloseButton.setAttribute('data-dismiss', 'modal');
        jokeCloseButton.setAttribute('aria-label', 'Close');

        const jokeModalSpanTag = document.createElement('span');
        jokeModalSpanTag.setAttribute('aria-hidden', 'true');
        jokeModalSpanTag.innerHTML = '&times;';

        jokeCloseButton.appendChild(jokeModalSpanTag)

        jokeModalHeader.appendChild(jokeModalTitle);
        jokeModalHeader.appendChild(jokeCloseButton);

        const jokeModalBody = document.createElement('div');
        jokeModalBody.setAttribute('class', 'modal-body');
        jokeModalBody.innerHTML = "Tools: vanilla JavaScript, iMovie.<br><br>Story: I woke up one morning and thought 'I feel like making something today' so I sat down, opened up VS Code, and played around. I had just turned 30 so I decided to draw from that experience. After a couple of hours of playing around, 'every form when you're 30' was born. I uploaded the video to one of my side projects on Instagram, @secondhand_jonhamm and it ended up being one of my more popular uploads.<br><br>Note: this project is just for fun. If you're a recruiter, I hope it makes looking through resumes a little more enjoyable! Volume up!";

        const jokeModalFooter = document.createElement('div');
        jokeModalFooter.setAttribute('class', 'modal-footer');

        const jokeModalFooterCloseButton = document.createElement('button');
        jokeModalFooterCloseButton.setAttribute('type', 'button');
        jokeModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        jokeModalFooterCloseButton.innerHTML = 'CLOSE';

        jokeModalFooter.appendChild(jokeModalFooterCloseButton)

        jokeModalContent.appendChild(jokeModalHeader);
        jokeModalContent.appendChild(jokeModalBody);
        jokeModalContent.appendChild(jokeModalFooter);

        jokeModalDialog.appendChild(jokeModalContent);

        jokeModalContainer.appendChild(jokeModalDialog);

        //

        carouselIndicatorsOL.appendChild(carouselListItem1)
        carouselIndicatorsOL.appendChild(carouselListItem2)
        carouselIndicatorsOL.appendChild(carouselListItem3)
        carouselIndicatorsOL.appendChild(carouselListItem4)

        carousel.appendChild(carouselIndicatorsOL)

        carouselItem1.appendChild(carouselImage1)
        carouselInner.appendChild(carouselItem1)

        carouselItem2.appendChild(carouselImage2)
        carouselInner.appendChild(carouselItem2)

        carouselItem3.appendChild(carouselImage3)
        carouselInner.appendChild(carouselItem3)

        carouselItem4.appendChild(carouselImage4)
        carouselInner.appendChild(carouselItem4)

        carousel.appendChild(carouselInner)

        toPreviousItemContainer.appendChild(previousIcon)
        toPreviousItemContainer.appendChild(previousScreenReaderOnly)

        carousel.appendChild(toPreviousItemContainer)

        toNextItemContainer.appendChild(nextIcon)
        toNextItemContainer.appendChild(nextScreenReaderOnly)

        carousel.appendChild(toNextItemContainer)

        column.appendChild(carousel)
        row.appendChild(column)
        container.appendChild(row)
        container.appendChild(backToMenu)
        container.appendChild(davidPittModalContainer)
        container.appendChild(tongueDanceProjectModalContainer)
        container.appendChild(theShopModalContainer)
        container.appendChild(jokeModalContainer)

        document.body.appendChild(container)

        document.body.style = 'opacity: 0'
        document.body.classList = 'd-flex justify-content-center align-items-center'
        document.body.classList.add('page-fade-in')



        setTimeout(() => {
            backToMenu.classList.add('page-fade-in')
        }, 2000);

        item1LiveButton.addEventListener('click', () => {
            window.open('https://dpittphilosophy.com/', '_blank')
        })

        item2LiveButton.addEventListener('click', () => {
            window.open('https://tonguedp.netlify.app/', '_blank')
        })

        item3LiveButton.addEventListener('click', () => {
            window.open('https://the-shop-the-shop.netlify.app/', '_blank')
        })

        item4LiveButton.addEventListener('click', () => {
            window.open('https://www.reddit.com/user/secondhand_jonhamm/comments/m9ggao/every_form_when_youre_30/?utm_source=share&utm_medium=web2x&context=3', '_blank')
        })

        item1CodeButton.addEventListener('click', () => {
            window.open('https://github.com', '_blank')
        })

        item2CodeButton.addEventListener('click', () => {
            window.open('https://github.com', '_blank')
        })

        backToMenu.addEventListener('click', () => {
            if(!clicked) {
                container.classList.add('page-fade-out');
                clicked = true;
         
                setTimeout(() => {
                    container.remove();
                    navigateTo('/menu')
                }, 650);
            }
        })


        window.addEventListener('popstate', () => {
            container.remove();
        })

        window.addEventListener('resize', () => {
            if(window.innerWidth < 500) {
                carouselImage1.src = 'images/carouselImage1Mobile.png';
                carouselImage2.src = 'images/carouselImage2Mobile.png';
                carouselImage3.src = 'images/carouselImage3Mobile.png';
                carouselImage4.src = 'images/carouselImage4Mobile.png';
            } else {
                carouselImage1.src = 'images/carouselImage1.png';
                carouselImage2.src = 'images/carouselImage2.png';
                carouselImage3.src = 'images/carouselImage3.png';
                carouselImage4.src = 'images/carouselImage4.png';
            }
        })

        if(window.innerWidth < 500) {
            carouselImage1.src = 'images/carouselImage1Mobile.png';
            carouselImage2.src = 'images/carouselImage2Mobile.png';
            carouselImage3.src = 'images/carouselImage3Mobile.png';
            carouselImage4.src = 'images/carouselImage4Mobile.png';
        } else {
            carouselImage1.src = 'images/carouselImage1.png';
            carouselImage2.src = 'images/carouselImage2.png';
            carouselImage3.src = 'images/carouselImage3.png';
            carouselImage4.src = 'images/carouselImage4.png';
        }

    }

    const contactPage = () => {
        let clicked = false;

        const container = document.createElement('div');
        container.setAttribute('class', 'container-fluid d-flex align-items-center justify-content-center');
     
        const row = document.createElement('div');
        row.setAttribute('class', 'row d-flex flex-column');
     
        const backToMenu = document.createElement('h1');
        backToMenu.setAttribute('id', 'back-to-menu')
        backToMenu.setAttribute('class', 'text-secondary align-self-center')
        backToMenu.style = 'opacity: 0; font-size: 30px'
        backToMenu.innerHTML = 'menu'
     
        const contactMeContainer = document.createElement('div');
        contactMeContainer.setAttribute('class', 'd-flex align-items-center')

        const email = document.createElement('p');
        email.setAttribute('class', 'm-0 p-0');
        email.innerHTML = "villegasdominick@gmail.com";

        const clipboardIcon = document.createElement('i');
        clipboardIcon.setAttribute('id', 'clipboard')
        clipboardIcon.setAttribute('class', 'far fa-clipboard py-1 px-2')

        const sendEmailIcon = document.createElement('i');
        sendEmailIcon.setAttribute('id', 'airplane')
        sendEmailIcon.setAttribute('class', 'far fa-paper-plane py-1')

        contactMeContainer.appendChild(email)
        contactMeContainer.appendChild(clipboardIcon)
        contactMeContainer.appendChild(sendEmailIcon)
     
        row.appendChild(contactMeContainer)
        row.appendChild(backToMenu)
     
        container.appendChild(row)
     
        document.body.appendChild(container)
        document.body.style = 'opacity: 0'
        document.body.classList = 'd-flex justify-content-center align-items-center'
        document.body.classList.add('page-fade-in')
     
        setTimeout(() => {
            backToMenu.classList.add('page-fade-in')
        }, 2000);

        clipboardIcon.addEventListener('click', () => {
            navigator.clipboard.writeText('villegasdominick@gmail.com');
        })

        sendEmailIcon.addEventListener('click', () => {
            location.href = "mailto:villegasdominick@gmail.com"
        })
     
        backToMenu.addEventListener('click', () => {
            if(!clicked) {
                container.classList.add('page-fade-out');
                clicked = true;
         
                setTimeout(() => {
                    container.remove();
                    navigateTo('/menu')
                }, 650);
            }
        })
     
        window.addEventListener('popstate', () => {
            container.remove();
        })
     }

    const routes = {
        '/': homePage,
        '/menu': menuPage,
        '/about': aboutPage,
        '/projects': projectsPage,
        '/contact': contactPage,
    }
    
    window.addEventListener('load', () => {
        if(window.location.pathname == '/' || window.location.pathname == '/menu' || window.location.pathname == '/about' || window.location.pathname == '/projects' || window.location.pathname == '/contact') {
            routes[window.location.pathname]()
        } else {
            document.body.innerHTML = "<h1 id='page-not-found'>you've found a part of the website that doesn't exist, but you're here...so it kind of exists, right?</h1>"
        }
    })
} else {

    const navigateTo = (url) => {
    
        history.pushState(null, null, url);
        routes[window.location.pathname]()
    
    }
    
    window.addEventListener('popstate', () => {
        routes[window.location.pathname]()
    })

    const homePage = () => {
        let clicked = false;
    
       const openingAnimationContainer = document.createElement('div');
       openingAnimationContainer.setAttribute('class', 'd-flex align-items-center mx-auto')
    
       const openingTextContainer = document.createElement('div');
       openingTextContainer.setAttribute('id', 'opening-text-container');
       openingTextContainer.classList = 'd-flex align-items-center justify-content-center'
    
       const openingText1 = document.createElement('h1');
       openingText1.setAttribute('id', 'opening-text-1');
       openingText1.classList = 'text-right d-flex align-items-center text-secondary pr-3'
       openingText1.innerHTML = 'dom';
    
       const openingText2Container = document.createElement('div');
       openingText2Container.setAttribute('id', 'opening-text-2-container');
       openingText2Container.classList = 'd-flex align-items-center justify-content-center'
    
       const openingText2 = document.createElement('h1');
       openingText2.setAttribute('id', 'opening-text-2');
       openingText2.classList = 'text-right text-secondary pl-3'
       openingText2.innerHTML = 'enter';
    
       openingText2Container.appendChild(openingText2)
    
       openingTextContainer.appendChild(openingText1);
       openingTextContainer.appendChild(openingText2Container)
    
       openingAnimationContainer.appendChild(openingTextContainer)
    
       document.body.classList = 'd-flex align-items-center justify-self-center justify-content-center overflow-hidden';
       document.body.style = 'opacity: 0;'
       document.body.appendChild(openingAnimationContainer)
       openingText1.classList.add('openingTextContainer')
    
       openingText2.addEventListener('click', () => {
           if(!clicked) {
            openingAnimationContainer.classList.add('page-fade-out');
            clicked = true;
        
            setTimeout(() => {
                openingAnimationContainer.remove();
                navigateTo('/menu')
            }, 650);
           }
       })
    
       window.addEventListener('popstate', () => {
           openingAnimationContainer.remove();
       })
    }
    
    const menuPage = () => {
        let clicked = false;

       const menu = document.createElement('ul');
       menu.setAttribute('id', 'menu')
       menu.classList = 'text-right'
    
       const about = document.createElement('li');
       about.innerHTML = 'about'
       about.classList = 'text-secondary h1'
       about.style.opacity = '0';
    
       const projects = document.createElement('li');
       projects.innerHTML = 'projects'
       projects.classList = 'text-secondary h1'
       projects.style.opacity = '0';
    
       const contact = document.createElement('li');
       contact.innerHTML = 'contact'
       contact.classList = 'text-secondary h1'
       contact.style.opacity = '0';
    
       menu.appendChild(about)
       menu.appendChild(projects)
       menu.appendChild(contact)
       
       document.body.classList = 'd-flex justify-content-center align-items-center'
    
       document.body.appendChild(menu)
    
       setTimeout(() => {
           about.classList.add('page-fade-in')
           about.classList.add('menu-hover')
       }, 100);
    
       setTimeout(() => {
           projects.classList.add('page-fade-in')
           projects.classList.add('menu-hover')
       }, 275);
    
    
       setTimeout(() => {
           contact.classList.add('page-fade-in')
           contact.classList.add('menu-hover')
       }, 475);

       setTimeout(() => {
        about.classList.add('menu-hover')
    }, 100);
    
       about.addEventListener('click', () => {
        if(!clicked) {
            document.body.style = 'opacity: 1;'
            document.body.classList.add('page-fade-out')
    
                setTimeout(() => {
                    menu.remove();
                    navigateTo('/about')
                }, 750);
            
            clicked = true;
        }
       })

       projects.addEventListener('click', () => {
        if(!clicked) {
            document.body.style = 'opacity: 1;'
            document.body.classList.add('page-fade-out')
    
                setTimeout(() => {
                    menu.remove();
                    navigateTo('/projects')
                }, 750);
            
            clicked = true;
        }
        })

        contact.addEventListener('click', () => {
            if(!clicked) {
                document.body.style = 'opacity: 1;'
                document.body.classList.add('page-fade-out')
        
                    setTimeout(() => {
                        menu.remove();
                        navigateTo('/contact')
                    }, 750);
                
                clicked = true;
            }
        })

        window.addEventListener('popstate', () => {
            menu.remove();
        })

    }
    
    const aboutPage = () => {
        let clicked = false;

       const container = document.createElement('div');
       container.setAttribute('class', 'about-container container-fluid d-flex align-items-center justify-content-center');
    
       const row = document.createElement('div');
       row.setAttribute('class', 'row d-flex flex-column');
    
       const backToMenu = document.createElement('h1');
       backToMenu.setAttribute('id', 'back-to-menu')
       backToMenu.setAttribute('class', 'text-secondary align-self-center')
       backToMenu.style = 'opacity: 0; font-size: 30px'
       backToMenu.innerHTML = 'menu'
    
       const aboutMeContent = document.createElement('p');
       aboutMeContent.setAttribute('class', 'text-center m-0 p-0')
       aboutMeContent.setAttribute('style', 'max-width: 900px')
       aboutMeContent.innerHTML = "I'm Dominick Villegas, a front-end developer from Portland, OR."
    
       row.appendChild(aboutMeContent)
       row.appendChild(backToMenu)
    
       container.appendChild(row)
    
       document.body.appendChild(container)
       document.body.style = 'opacity: 0'
       document.body.classList = 'd-flex justify-content-center align-items-center'
       document.body.classList.add('page-fade-in')
    
       setTimeout(() => {
           backToMenu.classList.add('page-fade-in')
       }, 2000);
    
       backToMenu.addEventListener('click', () => {
           if(!clicked) {
            container.classList.add('page-fade-out');
            clicked = true;
        
            setTimeout(() => {
                container.remove();
                navigateTo('/menu')
                // homepage();
            }, 650);
           }
       })
    
       window.addEventListener('popstate', () => {
           container.remove();
       })
    }

    const projectsPage = () => {
        let clicked = false;

        const container = document.createElement('div');
        container.setAttribute('class', 'container-fluid d-flex justify-content-center align-items-center flex-column')

        const row = document.createElement('div');
        row.setAttribute('class', 'row');

        const column = document.createElement('div');
        column.setAttribute('class', 'col-xs-12 d-flex justify-content-center')
        column.setAttribute('style', 'max-width: 900px !important')
     
        const backToMenu = document.createElement('h1');
        backToMenu.setAttribute('id', 'back-to-menu')
        backToMenu.setAttribute('class', 'text-secondary text-center projects-back-to-menu')
        backToMenu.style = 'opacity: 0; font-size: 30px'
        backToMenu.innerHTML = 'menu'

        const carousel = document.createElement('div');
        carousel.setAttribute('id', 'carousel-container');
        carousel.setAttribute('class', 'carousel slide w-100');
        carousel.setAttribute('data-interval', 'false');

        const carouselIndicatorsOL = document.createElement('ol');
        carouselIndicatorsOL.setAttribute('class', 'carousel-indicators');

        const carouselListItem1 = document.createElement('li');
        carouselListItem1.setAttribute('data-target', '#carousel-container');
        carouselListItem1.setAttribute('data-slide-to', '0');
        carouselListItem1.setAttribute('class', 'active');

        const carouselListItem2 = document.createElement('li');
        carouselListItem2.setAttribute('data-target', '#carousel-container');
        carouselListItem2.setAttribute('data-slide-to', '1');

        const carouselListItem3 = document.createElement('li');
        carouselListItem3.setAttribute('data-target', '#carousel-container');
        carouselListItem3.setAttribute('data-slide-to', '2');

        const carouselListItem4 = document.createElement('li');
        carouselListItem4.setAttribute('data-target', '#carousel-container');
        carouselListItem4.setAttribute('data-slide-to', '3');

        const carouselInner = document.createElement('div');
        carouselInner.setAttribute('class', 'carousel-inner');
        carouselInner.setAttribute('role', 'listbox')

        const carouselItem1 = document.createElement('div');
        carouselItem1.setAttribute('class', 'carousel-item active');

        const carouselImage1 = document.createElement('img');
        carouselImage1.setAttribute('class', ' w-100 first-slide')
        carouselImage1.setAttribute('src', 'images/carouselImage1.png')
        carouselImage1.setAttribute('alt', 'slide 1')

        const carouselItem1Caption = document.createElement('div');
        carouselItem1Caption.setAttribute('class', 'carousel-caption')
        
        const item1Description = document.createElement('p');
        item1Description.setAttribute('class', 'd-none d-lg-block')
        item1Description.innerHTML = 'A website for the philospher of mind David Pitt. Built with vanilla JavaScript, Bootstrap, Font Awesome'

        const item1ButtonsContainer = document.createElement('div');
        item1ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item1ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item1DevelopmentJourneyButton = document.createElement('button');
        item1DevelopmentJourneyButton.setAttribute('type', 'button');
        item1DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item1DevelopmentJourneyButton.setAttribute('data-target', '#david-pitt-modal')
        item1DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item1LiveButton = document.createElement('button');
        item1LiveButton.setAttribute('type', 'button')
        item1LiveButton.innerHTML = 'LIVE';

        const item1CodeButton = document.createElement('button');
        item1CodeButton.setAttribute('type', 'button')
        item1CodeButton.innerHTML = 'CODE';

        item1ButtonsContainer.appendChild(item1DevelopmentJourneyButton)
        item1ButtonsContainer.appendChild(item1LiveButton)
        item1ButtonsContainer.appendChild(item1CodeButton)

        carouselItem1Caption.appendChild(item1Description)
        carouselItem1Caption.appendChild(item1ButtonsContainer)
        carouselItem1.appendChild(carouselItem1Caption)

        const carouselItem2 = document.createElement('div');
        carouselItem2.setAttribute('class', 'carousel-item');

        const carouselImage2 = document.createElement('img');
        carouselImage2.setAttribute('class', ' w-100 second-slide')
        carouselImage2.setAttribute('src', 'images/carouselImage2.png')
        carouselImage2.setAttribute('alt', 'slide 2')

        const carouselItem2Caption = document.createElement('div');
        carouselItem2Caption.setAttribute('class', 'carousel-caption')
        
        const item2Description = document.createElement('p');
        item2Description.setAttribute('class', 'd-none d-lg-block')
        item2Description.innerHTML = 'A website for the modern dance company Tongue Dance Project from Portland, OR. With an emphasis on swiping, the website is inspired by the "mobile-first" philosophy of design. Built with vanilla JavaScript, vanilla CSS, Font Awesome, and Google Fonts.'

        const item2ButtonsContainer = document.createElement('div');
        item2ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item2ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item2DevelopmentJourneyButton = document.createElement('button');
        item2DevelopmentJourneyButton.setAttribute('type', 'button');
        item2DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item2DevelopmentJourneyButton.setAttribute('data-target', '#tongue-dance-project-modal')
        item2DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item2LiveButton = document.createElement('button');
        item2LiveButton.setAttribute('type', 'button')
        item2LiveButton.innerHTML = 'LIVE';

        const item2CodeButton = document.createElement('button');
        item2CodeButton.setAttribute('type', 'button')
        item2CodeButton.innerHTML = 'CODE';

        item2ButtonsContainer.appendChild(item2DevelopmentJourneyButton)
        item2ButtonsContainer.appendChild(item2LiveButton)
        item2ButtonsContainer.appendChild(item2CodeButton)

        carouselItem2Caption.appendChild(item2Description)
        carouselItem2Caption.appendChild(item2ButtonsContainer)
        carouselItem2.appendChild(carouselItem2Caption)

        const carouselItem3 = document.createElement('div');
        carouselItem3.setAttribute('class', 'carousel-item');

        const carouselImage3 = document.createElement('img');
        carouselImage3.setAttribute('class', ' w-100 third-slide')
        carouselImage3.setAttribute('src', 'images/carouselImage3.png')
        carouselImage3.setAttribute('alt', 'slide 3')

        const carouselItem3Caption = document.createElement('div');
        carouselItem3Caption.setAttribute('class', 'carousel-caption')

        const item3Description = document.createElement('p');
        item3Description.setAttribute('class', 'd-none d-lg-block')
        item3Description.innerHTML = 'A shopping experience that renders fetched JSON data from the Fake Store API. Built with React.js, React Router, Axios, vanilla CSS, Font Awesome, and Google Fonts.'

        const item3ButtonsContainer = document.createElement('div');
        item3ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item3ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item3DevelopmentJourneyButton = document.createElement('button');
        item3DevelopmentJourneyButton.setAttribute('type', 'button');
        item3DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item3DevelopmentJourneyButton.setAttribute('data-target', '#the-shop-modal')
        item3DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item3LiveButton = document.createElement('button');
        item3LiveButton.innerHTML = 'LIVE';

        const item3CodeButton = document.createElement('button');
        item3CodeButton.innerHTML = 'CODE';

        item3ButtonsContainer.appendChild(item3DevelopmentJourneyButton)
        item3ButtonsContainer.appendChild(item3LiveButton)
        item3ButtonsContainer.appendChild(item3CodeButton)

        carouselItem3Caption.appendChild(item3Description)
        carouselItem3Caption.appendChild(item3ButtonsContainer)
        carouselItem3.appendChild(carouselItem3Caption)

        //

        const carouselItem4 = document.createElement('div');
        carouselItem4.setAttribute('class', 'carousel-item');

        const carouselImage4 = document.createElement('img');
        carouselImage4.setAttribute('class', ' w-100 third-slide')
        carouselImage4.setAttribute('src', 'images/carouselImage4.png')
        carouselImage4.setAttribute('alt', 'slide 3')

        const carouselItem4Caption = document.createElement('div');
        carouselItem4Caption.setAttribute('class', 'carousel-caption')

        const item4Description = document.createElement('p');
        item4Description.setAttribute('class', 'd-none d-lg-block')
        item4Description.innerHTML = 'A joke about being 30 made for a side project of mine. Built with vanilla JavaScript and iMovie. Volume up!'

        const item4ButtonsContainer = document.createElement('div');
        item4ButtonsContainer.setAttribute('class', 'd-flex justify-content-center')
        item4ButtonsContainer.setAttribute('style', 'margin-bottom: 5px !important')

        const item4DevelopmentJourneyButton = document.createElement('button');
        item4DevelopmentJourneyButton.setAttribute('type', 'button');
        item4DevelopmentJourneyButton.setAttribute('data-toggle', 'modal');
        item4DevelopmentJourneyButton.setAttribute('data-target', '#joke-modal')
        item4DevelopmentJourneyButton.innerHTML = 'ABOUT';

        const item4LiveButton = document.createElement('button');
        item4LiveButton.innerHTML = 'LIVE';

        item4ButtonsContainer.appendChild(item4DevelopmentJourneyButton)
        item4ButtonsContainer.appendChild(item4LiveButton)

        carouselItem4Caption.appendChild(item4Description)
        carouselItem4Caption.appendChild(item4ButtonsContainer)
        carouselItem4.appendChild(carouselItem4Caption)

        //

        const toPreviousItemContainer = document.createElement('a');
        toPreviousItemContainer.setAttribute('class', 'left carousel-control-prev');
        toPreviousItemContainer.setAttribute('href', '#carousel-container');
        toPreviousItemContainer.setAttribute('role', 'button');
        toPreviousItemContainer.setAttribute('data-slide', 'prev');

        const previousIcon = document.createElement('span');
        previousIcon.setAttribute('class', 'carousel-control-prev-icon');
        previousIcon.setAttribute('aria-hidden', 'true');

        const previousScreenReaderOnly = document.createElement('span');
        previousScreenReaderOnly.setAttribute('class', 'sr-only');
        previousScreenReaderOnly.innerHTML = 'Previous';

        const toNextItemContainer = document.createElement('a');
        toNextItemContainer.setAttribute('class', 'right carousel-control-next');
        toNextItemContainer.setAttribute('href', '#carousel-container');
        toNextItemContainer.setAttribute('role', 'button');
        toNextItemContainer.setAttribute('data-slide', 'next');

        const nextIcon = document.createElement('span');
        nextIcon.setAttribute('class', 'carousel-control-next-icon');
        nextIcon.setAttribute('aria-hidden', 'true');

        const nextScreenReaderOnly = document.createElement('span');
        nextScreenReaderOnly.setAttribute('class', 'sr-only');
        nextScreenReaderOnly.innerHTML = 'Next';

        const davidPittModalContainer = document.createElement('div');
        davidPittModalContainer.setAttribute('class', 'modal fade');
        davidPittModalContainer.setAttribute('id', 'david-pitt-modal');
        davidPittModalContainer.setAttribute('tab-index', '-1');
        davidPittModalContainer.setAttribute('role', 'dialog');
        davidPittModalContainer.setAttribute('aria-labelledby', 'david-pitt-modal');
        davidPittModalContainer.setAttribute('aria-hidden', 'true');

        const davidPittModalDialog = document.createElement('div');
        davidPittModalDialog.setAttribute('class', 'modal-dialog');
        davidPittModalDialog.setAttribute('role', 'document');

        const davidPittModalContent = document.createElement('div');
        davidPittModalContent.setAttribute('class', 'modal-content');

        const davidPittModalHeader = document.createElement('div');
        davidPittModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const davidPittModalTitle = document.createElement('h5');
        davidPittModalTitle.setAttribute('class', 'modal-title');
        davidPittModalTitle.setAttribute('id', 'david-pitt-modal');
        davidPittModalTitle.innerHTML = 'David Pitt';

        const davidPittCloseButton = document.createElement('button');
        davidPittCloseButton.setAttribute('type', 'button');
        davidPittCloseButton.setAttribute('class', 'close');
        davidPittCloseButton.setAttribute('data-dismiss', 'modal');
        davidPittCloseButton.setAttribute('aria-label', 'Close');

        const davidPittModalSpanTag = document.createElement('span');
        davidPittModalSpanTag.setAttribute('aria-hidden', 'true');
        davidPittModalSpanTag.innerHTML = '&times;';

        davidPittCloseButton.appendChild(davidPittModalSpanTag)

        davidPittModalHeader.appendChild(davidPittModalTitle);
        davidPittModalHeader.appendChild(davidPittCloseButton);

        const davidPittModalBody = document.createElement('div');
        davidPittModalBody.setAttribute('class', 'modal-body');
        davidPittModalBody.innerHTML = 'Tools: vanilla JavaScript, Bootstrap, Font Awesome<br><br>Story: Because David is so well known and because he\'s one of the best teachers I\'ve had, I really wanted to give him a web presence he’s proud of. Because of this, it was important to me that I make a website that fulfills his wants and needs.<br><br>One of the challenges I had making this project was mapping these wants and needs onto a responsive design that looks great on all devices. This project taught me a lot about translating the vision of the client to a responsive design.<br><br>Along the way, I learned how to use Bootstrap’s classes. Although there were some challenging moments on the "CV" page that gave me a better understanding of Bootstrap\'s grid system, I really enjoyed using Bootstrap; so much so, I used it for my personal website: <a href="https:\/\/www.domvillegas.com" target="_blank"/>domvillegas.com</a>.<br><br>Note: the styling of this website, specifically the alignment of the elements, were decisions made by the client.';

        const davidPittModalFooter = document.createElement('div');
        davidPittModalFooter.setAttribute('class', 'modal-footer');

        const davidPittModalFooterCloseButton = document.createElement('button');
        davidPittModalFooterCloseButton.setAttribute('type', 'button');
        davidPittModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        davidPittModalFooterCloseButton.innerHTML = 'CLOSE';

        davidPittModalFooter.appendChild(davidPittModalFooterCloseButton)

        davidPittModalContent.appendChild(davidPittModalHeader);
        davidPittModalContent.appendChild(davidPittModalBody);
        davidPittModalContent.appendChild(davidPittModalFooter);

        davidPittModalDialog.appendChild(davidPittModalContent);

        davidPittModalContainer.appendChild(davidPittModalDialog);

        // 

        const tongueDanceProjectModalContainer = document.createElement('div');
        tongueDanceProjectModalContainer.setAttribute('class', 'modal fade');
        tongueDanceProjectModalContainer.setAttribute('id', 'tongue-dance-project-modal');
        tongueDanceProjectModalContainer.setAttribute('tab-index', '-1');
        tongueDanceProjectModalContainer.setAttribute('role', 'dialog');
        tongueDanceProjectModalContainer.setAttribute('aria-labelledby', 'tongue-dance-project-modal');
        tongueDanceProjectModalContainer.setAttribute('aria-hidden', 'true');

        const tongueDanceProjectModalDialog = document.createElement('div');
        tongueDanceProjectModalDialog.setAttribute('class', 'modal-dialog');
        tongueDanceProjectModalDialog.setAttribute('role', 'document');

        const tongueDanceProjectModalContent = document.createElement('div');
        tongueDanceProjectModalContent.setAttribute('class', 'modal-content');

        const tongueDanceProjectModalHeader = document.createElement('div');
        tongueDanceProjectModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const tongueDanceProjectModalTitle = document.createElement('h5');
        tongueDanceProjectModalTitle.setAttribute('class', 'modal-title');
        tongueDanceProjectModalTitle.setAttribute('id', 'tongue-dance-project-modal');
        tongueDanceProjectModalTitle.innerHTML = 'Tongue Dance Project';

        const tongueDanceProjectCloseButton = document.createElement('button');
        tongueDanceProjectCloseButton.setAttribute('type', 'button');
        tongueDanceProjectCloseButton.setAttribute('class', 'close');
        tongueDanceProjectCloseButton.setAttribute('data-dismiss', 'modal');
        tongueDanceProjectCloseButton.setAttribute('aria-label', 'Close');

        const tongueDanceProjectModalSpanTag = document.createElement('span');
        tongueDanceProjectModalSpanTag.setAttribute('aria-hidden', 'true');
        tongueDanceProjectModalSpanTag.innerHTML = '&times;';

        tongueDanceProjectCloseButton.appendChild(tongueDanceProjectModalSpanTag)

        tongueDanceProjectModalHeader.appendChild(tongueDanceProjectModalTitle);
        tongueDanceProjectModalHeader.appendChild(tongueDanceProjectCloseButton);

        const tongueDanceProjectModalBody = document.createElement('div');
        tongueDanceProjectModalBody.setAttribute('class', 'modal-body');
        tongueDanceProjectModalBody.innerHTML = 'Tools: vanilla JavaScript, vanilla CSS, Font Awesome, Google Fonts<br><br>Story: Before the development of this project, I was reading up on the “mobile-first” philosophy of design. The concept of the mobile user experience inspired me to experiment with a unique feature of the mobile user experience: swiping. Many hours were spent on making swiping feel smooth and significant. My goal was to make the user feel as though <em>they</em> are changing the website, not the code behind the scenes. <br><br>This is the first project I made after learning the basics of HTML, CSS, and JavaScript from online courses. It was important to me that I take the training wheels off and create something that is wholly mine. I used this project to learn how to conceive of ideas by myself and solve problems by myself. This is the project that made me a web developer.<br><br>Note: a dedicated desktop version is still in development.';

        const tongueDanceProjectModalFooter = document.createElement('div');
        tongueDanceProjectModalFooter.setAttribute('class', 'modal-footer');

        const tongueDanceProjectModalFooterCloseButton = document.createElement('button');
        tongueDanceProjectModalFooterCloseButton.setAttribute('type', 'button');
        tongueDanceProjectModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        tongueDanceProjectModalFooterCloseButton.innerHTML = 'CLOSE';

        tongueDanceProjectModalFooter.appendChild(tongueDanceProjectModalFooterCloseButton)

        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalHeader);
        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalBody);
        tongueDanceProjectModalContent.appendChild(tongueDanceProjectModalFooter);

        tongueDanceProjectModalDialog.appendChild(tongueDanceProjectModalContent);

        tongueDanceProjectModalContainer.appendChild(tongueDanceProjectModalDialog);

        //

        const theShopModalContainer = document.createElement('div');
        theShopModalContainer.setAttribute('class', 'modal fade');
        theShopModalContainer.setAttribute('id', 'the-shop-modal');
        theShopModalContainer.setAttribute('tab-index', '-1');
        theShopModalContainer.setAttribute('role', 'dialog');
        theShopModalContainer.setAttribute('aria-labelledby', 'the-shop-modal');
        theShopModalContainer.setAttribute('aria-hidden', 'true');

        const theShopModalDialog = document.createElement('div');
        theShopModalDialog.setAttribute('class', 'modal-dialog');
        theShopModalDialog.setAttribute('role', 'document');

        const theShopModalContent = document.createElement('div');
        theShopModalContent.setAttribute('class', 'modal-content');

        const theShopModalHeader = document.createElement('div');
        theShopModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const theShopModalTitle = document.createElement('h5');
        theShopModalTitle.setAttribute('class', 'modal-title');
        theShopModalTitle.setAttribute('id', 'the-shop-modal');
        theShopModalTitle.innerHTML = 'The Shop';

        const theShopCloseButton = document.createElement('button');
        theShopCloseButton.setAttribute('type', 'button');
        theShopCloseButton.setAttribute('class', 'close');
        theShopCloseButton.setAttribute('data-dismiss', 'modal');
        theShopCloseButton.setAttribute('aria-label', 'Close');

        const theShopModalSpanTag = document.createElement('span');
        theShopModalSpanTag.setAttribute('aria-hidden', 'true');
        theShopModalSpanTag.innerHTML = '&times;';

        theShopCloseButton.appendChild(theShopModalSpanTag)

        theShopModalHeader.appendChild(theShopModalTitle);
        theShopModalHeader.appendChild(theShopCloseButton);

        const theShopModalBody = document.createElement('div');
        theShopModalBody.setAttribute('class', 'modal-body');
        theShopModalBody.innerHTML = "Tools: React.js, React Router, Axios, vanilla CSS, Fake Store API, Font Awesome, Google Fonts<br><br>Story: After starting to feel confident about my ability to build straightforward websites with vanilla JavaScript, I decided to start getting into React. So, I completed a React course, which included the building of some React projects. After I finished the course I decided to build a React project without help from a teacher; I think that's the best way to learn a tool. I was also curious about how to fetch and use JSON data in the context of a shopping application. With those two elements in mind, 'THE SHOP' was born.<br><br>The biggest problem I ran into involved the deleting of items from the user's shopping cart. Simply removing the item from the DOM with item.remove() wouldn't do because the Element.remove() method doesn't affect the app's state, which is where the user's shopping cart really is. So I knew I had to remove the item from the app's state and have a new list of cart items be rendered. This is simple to implement with the Array.prototype.filter() method, but another problem arose: if the user has two or more of one kind of item&mdash;let's say two red shirts&mdash; in their cart and click to delete one of these red shirts, then all of the red shirts will be deleted because the red shirts share the same value for the key 'id' as defined by the Fake Store API.<br><br>My solution was to create unique keys and assign them to each individual cart item so that I could refer to a unique key when filtering the shopping cart, rather than the pre-assigned id value fetched from the Fake Store API.<br><br>I had a lot of fun making this app. I learned a lot about JavaScript, passing props, and handling state, which was fascinating and really helped me grow, but it was just really cool seeing things work together to create a unified experience.<br><br>Note: this project's purpose is to display React.js skills, not styling skills.";

        const theShopModalFooter = document.createElement('div');
        theShopModalFooter.setAttribute('class', 'modal-footer');

        const theShopModalFooterCloseButton = document.createElement('button');
        theShopModalFooterCloseButton.setAttribute('type', 'button');
        theShopModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        theShopModalFooterCloseButton.innerHTML = 'CLOSE';

        theShopModalFooter.appendChild(theShopModalFooterCloseButton)

        theShopModalContent.appendChild(theShopModalHeader);
        theShopModalContent.appendChild(theShopModalBody);
        theShopModalContent.appendChild(theShopModalFooter);

        theShopModalDialog.appendChild(theShopModalContent);

        theShopModalContainer.appendChild(theShopModalDialog);

        //

        const jokeModalContainer = document.createElement('div');
        jokeModalContainer.setAttribute('class', 'modal fade');
        jokeModalContainer.setAttribute('id', 'joke-modal');
        jokeModalContainer.setAttribute('tab-index', '-1');
        jokeModalContainer.setAttribute('role', 'dialog');
        jokeModalContainer.setAttribute('aria-labelledby', 'joke-modal');
        jokeModalContainer.setAttribute('aria-hidden', 'true');

        const jokeModalDialog = document.createElement('div');
        jokeModalDialog.setAttribute('class', 'modal-dialog');
        jokeModalDialog.setAttribute('role', 'document');

        const jokeModalContent = document.createElement('div');
        jokeModalContent.setAttribute('class', 'modal-content');

        const jokeModalHeader = document.createElement('div');
        jokeModalHeader.setAttribute('class', 'modal-header d-flex align-items-center');

        const jokeModalTitle = document.createElement('h5');
        jokeModalTitle.setAttribute('class', 'modal-title');
        jokeModalTitle.setAttribute('id', 'joke-modal');
        jokeModalTitle.innerHTML = "every form when you're 30";

        const jokeCloseButton = document.createElement('button');
        jokeCloseButton.setAttribute('type', 'button');
        jokeCloseButton.setAttribute('class', 'close');
        jokeCloseButton.setAttribute('data-dismiss', 'modal');
        jokeCloseButton.setAttribute('aria-label', 'Close');

        const jokeModalSpanTag = document.createElement('span');
        jokeModalSpanTag.setAttribute('aria-hidden', 'true');
        jokeModalSpanTag.innerHTML = '&times;';

        jokeCloseButton.appendChild(jokeModalSpanTag)

        jokeModalHeader.appendChild(jokeModalTitle);
        jokeModalHeader.appendChild(jokeCloseButton);

        const jokeModalBody = document.createElement('div');
        jokeModalBody.setAttribute('class', 'modal-body');
        jokeModalBody.innerHTML = "Tools: vanilla JavaScript, iMovie.<br><br>Story: I woke up one morning and thought 'I feel like making something today' so I sat down, opened up VS Code, and played around. I had just turned 30 so I decided to draw from that experience. After a couple of hours of playing around, 'every form when you're 30' was born. I uploaded the video to one of my side projects on Instagram, @secondhand_jonhamm and it ended up being one of my more popular uploads.<br><br>Note: this project is just for fun. If you're a recruiter, I hope it makes looking through resumes a little more enjoyable! Volume up!";

        const jokeModalFooter = document.createElement('div');
        jokeModalFooter.setAttribute('class', 'modal-footer');

        const jokeModalFooterCloseButton = document.createElement('button');
        jokeModalFooterCloseButton.setAttribute('type', 'button');
        jokeModalFooterCloseButton.setAttribute('data-dismiss', 'modal');
        jokeModalFooterCloseButton.innerHTML = 'CLOSE';

        jokeModalFooter.appendChild(jokeModalFooterCloseButton)

        jokeModalContent.appendChild(jokeModalHeader);
        jokeModalContent.appendChild(jokeModalBody);
        jokeModalContent.appendChild(jokeModalFooter);

        jokeModalDialog.appendChild(jokeModalContent);

        jokeModalContainer.appendChild(jokeModalDialog);

        //

        carouselIndicatorsOL.appendChild(carouselListItem1)
        carouselIndicatorsOL.appendChild(carouselListItem2)
        carouselIndicatorsOL.appendChild(carouselListItem3)
        carouselIndicatorsOL.appendChild(carouselListItem4)

        carousel.appendChild(carouselIndicatorsOL)

        carouselItem1.appendChild(carouselImage1)
        carouselInner.appendChild(carouselItem1)

        carouselItem2.appendChild(carouselImage2)
        carouselInner.appendChild(carouselItem2)

        carouselItem3.appendChild(carouselImage3)
        carouselInner.appendChild(carouselItem3)

        carouselItem4.appendChild(carouselImage4)
        carouselInner.appendChild(carouselItem4)

        carousel.appendChild(carouselInner)

        toPreviousItemContainer.appendChild(previousIcon)
        toPreviousItemContainer.appendChild(previousScreenReaderOnly)

        carousel.appendChild(toPreviousItemContainer)

        toNextItemContainer.appendChild(nextIcon)
        toNextItemContainer.appendChild(nextScreenReaderOnly)

        carousel.appendChild(toNextItemContainer)

        column.appendChild(carousel)
        row.appendChild(column)
        container.appendChild(row)
        container.appendChild(backToMenu)
        container.appendChild(davidPittModalContainer)
        container.appendChild(tongueDanceProjectModalContainer)
        container.appendChild(theShopModalContainer)
        container.appendChild(jokeModalContainer)

        document.body.appendChild(container)

        document.body.style = 'opacity: 0'
        document.body.classList = 'd-flex justify-content-center align-items-center'
        document.body.classList.add('page-fade-in')



        setTimeout(() => {
            backToMenu.classList.add('page-fade-in')
        }, 2000);

        item1LiveButton.addEventListener('click', () => {
            window.open('https://dpittphilosophy.com/', '_blank')
        })

        item2LiveButton.addEventListener('click', () => {
            window.open('https://tonguedp.netlify.app/', '_blank')
        })

        item3LiveButton.addEventListener('click', () => {
            window.open('https://the-shop-the-shop.netlify.app/', '_blank')
        })

        item4LiveButton.addEventListener('click', () => {
            window.open('https://www.reddit.com/user/secondhand_jonhamm/comments/m9ggao/every_form_when_youre_30/?utm_source=share&utm_medium=web2x&context=3', '_blank')
        })

        item1CodeButton.addEventListener('click', () => {
            window.open('https://github.com', '_blank')
        })

        item2CodeButton.addEventListener('click', () => {
            window.open('https://github.com', '_blank')
        })

        backToMenu.addEventListener('click', () => {
            if(!clicked) {
                container.classList.add('page-fade-out');
                clicked = true;
         
                setTimeout(() => {
                    container.remove();
                    navigateTo('/menu')
                }, 650);
            }
        })


        window.addEventListener('popstate', () => {
            container.remove();
        })

        window.addEventListener('resize', () => {
            if(window.innerWidth < 500) {
                carouselImage1.src = 'images/carouselImage1Mobile.png';
                carouselImage2.src = 'images/carouselImage2Mobile.png';
                carouselImage3.src = 'images/carouselImage3Mobile.png';
                carouselImage4.src = 'images/carouselImage4Mobile.png';
            } else {
                carouselImage1.src = 'images/carouselImage1.png';
                carouselImage2.src = 'images/carouselImage2.png';
                carouselImage3.src = 'images/carouselImage3.png';
                carouselImage4.src = 'images/carouselImage4.png';
            }
        })

        if(window.innerWidth < 500) {
            carouselImage1.src = 'images/carouselImage1Mobile.png';
            carouselImage2.src = 'images/carouselImage2Mobile.png';
            carouselImage3.src = 'images/carouselImage3Mobile.png';
            carouselImage4.src = 'images/carouselImage4Mobile.png';
        } else {
            carouselImage1.src = 'images/carouselImage1.png';
            carouselImage2.src = 'images/carouselImage2.png';
            carouselImage3.src = 'images/carouselImage3.png';
            carouselImage4.src = 'images/carouselImage4.png';
        }

    }

    const contactPage = () => {
        let clicked = false;

        const container = document.createElement('div');
        container.setAttribute('class', 'container-fluid d-flex align-items-center justify-content-center');
     
        const row = document.createElement('div');
        row.setAttribute('class', 'row d-flex flex-column');
     
        const backToMenu = document.createElement('h1');
        backToMenu.setAttribute('id', 'back-to-menu')
        backToMenu.setAttribute('class', 'text-secondary align-self-center')
        backToMenu.style = 'opacity: 0; font-size: 30px'
        backToMenu.innerHTML = 'menu'

        const contactMeContainer = document.createElement('div');
        contactMeContainer.setAttribute('class', 'd-flex align-items-center')

        const email = document.createElement('p');
        email.setAttribute('class', 'm-0 p-0');
        email.innerHTML = "villegasdominick@gmail.com";

        const clipboardIcon = document.createElement('i');
        clipboardIcon.setAttribute('id', 'clipboard')
        clipboardIcon.setAttribute('class', 'far fa-clipboard py-1 px-2')

        const sendEmailIcon = document.createElement('i');
        sendEmailIcon.setAttribute('id', 'airplane')
        sendEmailIcon.setAttribute('class', 'far fa-paper-plane py-1')

        contactMeContainer.appendChild(email)
        contactMeContainer.appendChild(clipboardIcon)
        contactMeContainer.appendChild(sendEmailIcon)
     
        row.appendChild(contactMeContainer)
        row.appendChild(backToMenu)
     
        container.appendChild(row)
     
        document.body.appendChild(container)
        document.body.style = 'opacity: 0'
        document.body.classList = 'd-flex justify-content-center align-items-center'
        document.body.classList.add('page-fade-in')
     
        setTimeout(() => {
            backToMenu.classList.add('page-fade-in')
        }, 2000);

        clipboardIcon.addEventListener('click', () => {
            navigator.clipboard.writeText('villegasdominick@gmail.com');
        })

        sendEmailIcon.addEventListener('click', () => {
            location.href = "mailto:villegasdominick@gmail.com"
        })
     
        backToMenu.addEventListener('click', () => {
            if(!clicked) {
                container.classList.add('page-fade-out');
                clicked = true;
         
                setTimeout(() => {
                    container.remove();
                    navigateTo('/menu')
                    // homepage();
                }, 650);
            }
        })
     
        window.addEventListener('popstate', () => {
            container.remove();
        })
     }

    const routes = {
        '/': homePage,
        '/menu': menuPage,
        '/about': aboutPage,
        '/projects': projectsPage,
        '/contact': contactPage,
    }
    
    window.addEventListener('load', () => {
        if(window.location.pathname == '/' || window.location.pathname == '/menu' || window.location.pathname == '/about' || window.location.pathname == '/projects' || window.location.pathname == '/contact') {
            routes[window.location.pathname]()
        } else {
            document.body.innerHTML = "<h1 id='page-not-found'>you've found a part of the website that doesn't exist, but you're here...so it kind of exists, right?</h1>"
            //add code here like this is its own page. you can remove this text via the popstate listener above
        }
    })
}