document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.js-header');
    const main = document.querySelector('.js-main');
    const mainList = header.querySelector('[data-droplist]');
    const mainLayout = main.querySelector('[data-mainlayout]');
    

    function headerToggler() {
        const toggler = header.querySelector('[data-toggler]');
        const navList = header.querySelector('[data-navlist]')
        const navLayout = header.querySelector('[data-navlayout]');

        function toggleMenu() {
            navList.classList.toggle("close");
            navLayout.classList.toggle('nav__layout');
        }

        function defaultDropDown() {
            mainList.classList.add("close");
            mainLayout.classList.remove("main__layout");
        }

        toggler.addEventListener('click', function() {
            toggleMenu();
            defaultDropDown();
        });

        navLayout.addEventListener('click', function() {
            toggleMenu();
        })

    }
    headerToggler();


    function dropDownApp() {
        const btn = header.querySelector('[data-dropbtn]');
    
        function dropDown() {
            mainList.classList.toggle("close")
            mainLayout.classList.toggle("main__layout")
        }
    
        btn.addEventListener('click', function(){
            dropDown();
        })

        mainLayout.addEventListener('click', function(){
            dropDown();
        })
    }
    dropDownApp();
})