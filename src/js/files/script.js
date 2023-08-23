// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLockStatus } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//#region Глобальный клик

document.addEventListener("click", function (e) {
   if (bodyLockStatus && e.target.closest('.catalog-header__btn')) {
      bodyLockToggle();
      document.documentElement.classList.add("catalog-header-open");
      // document.addEventListener("click", documentActions);
      // documentActions(e)
   }
   if (e.target.closest('.catalog-header__close')) {
      document.documentElement.classList.remove("catalog-header-open", "sub-menu-open");
      bodyLockToggle();
   }
});
//#endregion

//#region Открытие подкатегорий каталога в хедере

document.addEventListener("mouseover", documentActions);
export function documentActions(e) {
   if (!e.target.closest('[data-parent]') && !e.target.closest("[data-submenu]")) {
      document.documentElement.classList.remove('sub-menu-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
   }

   if (e.target.closest('[data-parent]')) {
      const targetElement = e.target.closest('[data-parent]');
      const subMenuId = targetElement.closest('[data-parent]').dataset.parent ? targetElement.closest('[data-parent]').dataset.parent : null;
      const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
      if (subMenu) {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');


         if (activeLink && activeLink !== targetElement) {
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }
         document.documentElement.classList.add('sub-menu-open');
         targetElement.classList.add('_sub-menu-active');
         subMenu.classList.add('_sub-menu-open');
         // showMore(subMenu.querySelectorAll('[data-showmore]'));
         e.preventDefault();
      } else {
         const activeLink = document.querySelector('._sub-menu-active');
         const activeBlock = document.querySelector('._sub-menu-open');


         if (activeLink) {
            activeLink.classList.remove('_sub-menu-active');
            activeBlock.classList.remove('_sub-menu-open');
            document.documentElement.classList.remove('sub-menu-open');
         }
      }
   }
   if (e.target.closest('.catalog-header__back')) {
      document.documentElement.classList.remove('sub-menu-open');
      document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
      document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
      e.preventDefault();
   }

}

//#endregion