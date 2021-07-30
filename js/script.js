'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //--------------------------------------------------------------------------
    //START------------------СОЗДАНИЕ ТАБОВ-------------------------------------
    //--------------------------------------------------------------------------
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');



    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }


    function showTabContent(i = 0) { // если функция вызывается без аргумента, то по умолчание подставляется 0
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //--------------------------------------------------------------------------
    //END--------------------СОЗДАНИЕ ТАБОВ-------------------------------------
    //--------------------------------------------------------------------------

});