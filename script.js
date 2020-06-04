document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('.js-header');
    const main = document.querySelector('.js-main');
    const dropList = header.querySelector('[data-droplist]');
    const dropLayout = main.querySelector('[data-mainlayout]');
    

    function headerToggler() {
        const toggler = header.querySelector('[data-toggler]');
        const toggleList = header.querySelector('[data-navlist]')
        const toggleLayout = header.querySelector('[data-navlayout]');

        function toggleMenu() {
            toggleList.classList.toggle("close");
            toggleLayout.classList.toggle('nav__layout');
        }

        function defaultDropDown() {
            dropList.classList.add("close");
            dropLayout.classList.remove("main__layout");
        }

        toggler.addEventListener('click', function() {
            toggleMenu();
            defaultDropDown();
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