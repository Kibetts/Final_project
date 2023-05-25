function showTab(tabName) {
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  var selectedTab = document.getElementById(tabName);
  selectedTab.classList.add('active');
}
