function tab() {
  var tabSelector = document.querySelectorAll('.tab-heading .tab-list, .tab-content .tab-panel');
  var tabList = document.querySelectorAll('.tab-list');

  for (let tab of tabList) {
    tab.style.width = 100 / 3 - tabList.length + '%';
  }

  for (i = 0; i < tabSelector.length; i++) {
    tabSelector[i].addEventListener('click', function () {
      var tablistData = this.getAttribute('data-tabbing');
      var allElement = document.querySelectorAll('[data-tabbing]');
      var selectedTabList = document.querySelector('.tab-heading .tab-list[data-tabbing="' + tablistData + '"');
      var selectedTabPanel = document.querySelector('.tab-content .tab-panel[data-tabbing="' + tablistData + '"');
      var selectedLstSp = document.querySelector('.tab-content .tab-panel[data-tabbing="' + tablistData + '"] .tab-list-sp ');
      var selectedListContent = document.querySelector('.tab-content .tab-panel[data-tabbing="' + tablistData + '"] .list-content ');
      var AlltoggledIcon = document.querySelectorAll('.icon-plus-extra');
      var toggledIcon = document.querySelector('.icon-plus-extra[data-tabbing="' + tablistData + '"');
      var x = window.matchMedia("(max-width: 767px)")

      const addClass = () => {
        selectedTabPanel.classList.add('active');
        selectedLstSp.classList.add('active');
        selectedListContent.classList.add('active');
      }
      const addEqClass = (e) => {
        for (let sibling of e) {
          if (sibling == this) sibling.classList.add('active')
        }
      }
      const removeNotEqClass = (e) => {
        for (let sibling of e) {
          if (sibling !== this) sibling.classList.remove('active');
        }
      }
      const AddNotEqClass = (e) => {
        for (let sibling of e) {
          if (sibling !== this) sibling.classList.add('active')
        }
      }

      // selecting Tab
      removeNotEqClass(selectedTabList.parentNode.children)
      selectedTabList.classList.add('active');

      if (x.matches) { // If media query matches
        if (this.classList.contains("active")) {
          addEqClass(allElement)
          addEqClass(AlltoggledIcon)
          toggledIcon.classList.add('active');
          selectedTabPanel.classList.remove('active');
          selectedLstSp.classList.remove('active');
          selectedListContent.classList.remove('active');
        }
        else {
          removeNotEqClass(allElement)
          AddNotEqClass(AlltoggledIcon)
          toggledIcon.classList.remove('active');
          selectedTabList.classList.add('active');
          addClass()
        }

      } else {
        removeNotEqClass(allElement)
        AddNotEqClass(AlltoggledIcon)
        addClass()
        toggledIcon.classList.remove('active');
      }

    });
  }
}

tab();