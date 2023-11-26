'use strict';

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.toString().indexOf('recipe.html')>0) {
        //Табы информации о рецепте
        const tabContent = document.querySelectorAll('.recipe-tabInfo'),
              tabs = document.querySelectorAll('.recipe__tab'),
              tabsPerent = document.querySelector('.recipe__tabs');

        function hideTabContent() {
            tabContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(tab => {
                tab.classList.remove('active_tab');
            })
        }

        function showTabContent(i = 0) {
            tabContent[i].classList.add('show', 'fade');
            tabContent[i].classList.remove('hide');
            tabs[i].classList.add('active_tab');
        }

        hideTabContent();
        showTabContent();

        tabsPerent.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.classList.contains('recipe__tab')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        // Изменение количества порций
        const product = document.querySelectorAll('.productCount span'),
              plus = document.querySelector('.plus'),
              minuce = document.querySelector('.minuce'),
              portion = document.querySelector('.countPortion');

        let countPortion = 1;

        let a = [];
        product.forEach(item => {
            a.push(item.textContent);
        });

        function changeCountProduct(count) {
            product.forEach((item, i) => {
                item.textContent = a[i] * count;
            });
        }

        plus.addEventListener('click', () => {
            countPortion++;
            portion.textContent = countPortion;
            changeCountProduct(countPortion);
        });

        minuce.addEventListener('click', () => {
            if (countPortion > 1) {
                countPortion--;
                portion.textContent = countPortion;
                changeCountProduct(countPortion);
            }

        });

        // Добавление в избранное
        const favorite = document.querySelector('.recipe__favorite');
        let click = 0;

        favorite.addEventListener('click', () => {
            if (click === 0) {
                click++;
                document.querySelector('.recipe__favorite p').textContent = 'В избранном';
                document.querySelector('.recipe__favorite span').style.cssText = 'color: #E10914;';
            } else {
                click--;
            }
        })
    }

    // Модально окно авторизации регистрации
    const registr = document.querySelector('#registr'),
          auth = document.querySelector('#auth'),
          substrate = document.querySelector('.substrate'),
          btnAuth = document.querySelectorAll('.auth'),
          btnRegistr = document.querySelector('.registr'),
          btnClose = document.querySelectorAll('.modal__close');

    function hideModal(elem) {
        if (elem.classList.contains('show')) {
            elem.classList.remove('show');
            elem.classList.add('hide');
        }
    }

    function showModal(elem) {
        if (elem.classList.contains('hide')) {
            elem.classList.remove('hide');
            elem.classList.add('show');
        }
    }

    btnAuth.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal(registr);
            showModal(substrate);
            showModal(auth);
        });
    });

    btnRegistr.addEventListener('click', (e) => {
        e.preventDefault();
        hideModal(auth);
        showModal(registr);
    });

    btnClose.forEach(btn => {
        btn.addEventListener('click', () => {
            hideModal(registr);
            hideModal(auth);
            hideModal(substrate);
        });
    });

})
