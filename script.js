let tab = function () {
    let tabNav = document.querySelectorAll('.tab-nav_elem'),
        tabDesc = document.querySelectorAll('.tab-desc_elem'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('id');
        selectTabDesc(tabName);
    }

    function selectTabDesc(tabName) {
        tabDesc.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
};

tab();