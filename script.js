document.addEventListener('DOMContentLoaded', function() {

    const html = document.documentElement;
    const header = document.querySelector('.js-header');
    const main = document.querySelector('.js-main');
    const dropList = header.querySelector('[data-droplist]');
    const dropLayout = main.querySelector('[data-mainlayout]');
    

    function headerToggler() {
        const toggler = header.querySelector('[data-toggler]');
        const toggleList = header.querySelector('[data-togglelist]')
        const toggleLayout = header.querySelector('[data-togglelayout]');

        function toggleMenu() {
            toggleList.classList.toggle("close");
            toggleLayout.classList.toggle('nav__layout');
        }

        function defaultDropDown() {
            dropList.classList.add("close");
            dropLayout.classList.remove("main__layout");
        }

        function noScroll() {
            html.style.overflowY = "hidden";
        }

        toggler.addEventListener('click', function() {
            toggleMenu();
            defaultDropDown();
            noScroll();
        });

        toggleLayout.addEventListener('click', function() {
            toggleMenu();
        })

    }
    headerToggler();


    function dropDownApp() {
        const btn = header.querySelector('[data-dropbtn]');
    
        function dropDown() {
            dropList.classList.toggle("close")
            dropLayout.classList.toggle("main__layout")
        }
    
        btn.addEventListener('click', function(){
            dropDown();
        })

        dropLayout.addEventListener('click', function(){
            dropDown();
        })
    }
    dropDownApp();
})